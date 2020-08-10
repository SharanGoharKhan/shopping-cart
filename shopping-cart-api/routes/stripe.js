/* eslint-disable prefer-const */
const express = require('express')
const stripeObj = require('stripe')
const router = express.Router()
const Stripe = require('../models/stripe')
const User = require('../models/user')
const Order = require('../models/order')
const Item = require('../models/item')
const Option = require('../models/option')
const Configuration = require('../models/configuration')
const sendEmail = require('../helpers/email')
const Coupon = require('../models/coupon')
const { sendNotification, updateStockValue } = require('../helpers/utilities')
const { placeOrderTemplate, placeOrderText } = require('../helpers/templates')
const { stripeCurrencies } = require('../helpers/currencies')

const {
  pubsub,
  PLACE_ORDER,
  ORDER_STATUS_CHANGED
} = require('../helpers/pubsub')

const { transformOrder } = require('../graphql/resolvers/merge')

var DELIVERY_CHARGES = 0.0
var stripe
var isInitialized = false
var CURRENCY = 'USD'
var CURRENCY_SYMBOL = '$'
var CURRENCY_MULTIPLIER = 100

const initializeStripe = async() => {
  let configuration = await Configuration.findOne()
  if (!configuration) return (isInitialized = false)
  stripe = stripeObj(configuration.secret_key)
  DELIVERY_CHARGES = configuration.delivery_charges
  CURRENCY = configuration.currency
  CURRENCY_SYMBOL = configuration.currency_symbol
  CURRENCY_MULTIPLIER = stripeCurrencies.find(val => val.currency === CURRENCY)
    .multiplier
  isInitialized = true
}

router.post('/charge', async(req, res) => {
  console.log('charge')
  await initializeStripe()
  if (!isInitialized) return res.send({ paid: false })

  const stripeOrder = await Stripe.findOne({ order_id: req.query.id })
  if (!stripeOrder) return res.send({ redirect: 'stripe/failed' })
  let user = await User.findById(stripeOrder.user)

  stripeOrder.stripe_create_payment = req.body
  stripeOrder.paymentId = req.body.id

  const itemsFood = await Item.find({
    _id: { $in: stripeOrder.items }
  }).populate('food variation')

  let addonsTitle = ''
  let price = 0
  const itemsTitle = itemsFood.map(async item => {
    let item_price = item.variation.price
    if (item.addons && item.addons.length) {
      let addons = []
      let optionsAll = []
      item.addons.forEach(({ options }) => {
        optionsAll = optionsAll.concat(options)
      })
      const populatedOptions = await Option.find({ _id: { $in: optionsAll } })
      optionsAll.forEach(id => {
        const option = populatedOptions.find(o => o.id === id)
        item_price += option.price
        addons.push(`${option.title} ${CURRENCY_SYMBOL}${option.price}`)
      })
      addonsTitle = addons.join(',')
    }
    price += item_price * item.quantity
    return `${item.quantity} x ${item.food.title}(${item.variation.title}) ${CURRENCY_SYMBOL}${item.variation.price}`
  })

  let description = await Promise.all(itemsTitle)
  description = description.join(', ')
  console.log(stripeOrder.coupon)
  if (stripeOrder.coupon) {
    const coupon = await Coupon.findOne({ code: stripeOrder.coupon })
    if (coupon) {
      price = price - (coupon.discount / 100) * price
    }
  }
  let amount = (price + DELIVERY_CHARGES) * CURRENCY_MULTIPLIER

  stripe.customers
    .create({
      email: req.body.email,
      card: req.body.id
    })
    .then(customer =>
      stripe.charges.create({
        amount: Math.trunc(amount),
        description: description,
        currency: CURRENCY.toLowerCase(),
        customer: customer.id
      })
    )
    .then(async charge => {
      stripeOrder.stripe_payment_response = charge
      if (charge.paid) {
        const order = new Order({
          user: stripeOrder.user,
          items: stripeOrder.items,
          delivery_address: stripeOrder.delivery_address, // dynamic address
          order_id: stripeOrder.order_id,
          order_status: 'PENDING',
          payment_method: 'STRIPE',
          payment_status: 'PAID',
          paid_amount: charge.amount / CURRENCY_MULTIPLIER,
          order_amount: stripeOrder.order_amount,
          delivery_charges: DELIVERY_CHARGES,
          status_queue: {
            pending: new Date(),
            preparing: null,
            picked: null,
            delivered: null,
            cancelled: null
          }
        })
        const result = await order.save()
        await stripeOrder.save()
        user.orders.push(result._id)
        await user.save()
        updateStockValue(itemsFood)
        const placeOrder_template = placeOrderTemplate([
          order.order_id,
          description,
          order.delivery_address.delivery_address,
          `${CURRENCY_SYMBOL} ${Number(price).toFixed(2)}`,
          `${CURRENCY_SYMBOL} ${DELIVERY_CHARGES}`,
          `${CURRENCY_SYMBOL} ${order.order_amount.toFixed(2)}`,
          addonsTitle
        ])
        const placeOrder_text = placeOrderText([
          order.order_id,
          description,
          order.delivery_address.delivery_address,
          `${CURRENCY_SYMBOL} ${Number(price).toFixed(2)}`,
          `${CURRENCY_SYMBOL} ${DELIVERY_CHARGES}`,
          `${CURRENCY_SYMBOL} ${order.order_amount.toFixed(2)}`,
          addonsTitle
        ])
        sendEmail(
          user.email,
          'Order Placed',
          placeOrder_text,
          placeOrder_template
        )

        const transformedOrder = await transformOrder(result)
        const orderStatusChanged = {
          userId: user.id,
          order: transformedOrder,
          origin: 'new'
        }
        pubsub.publish(ORDER_STATUS_CHANGED, {
          orderStatusChanged: orderStatusChanged
        })

        pubsub.publish(PLACE_ORDER, {
          subscribePlaceOrder: { origin: 'new', order: transformedOrder }
        })

        sendNotification(result.order_id)
        console.log(charge)
        return res.send({ redirect: 'stripe/success' })
      } else {
        console.log('failed')
        return res.send({ redirect: 'stripe/failed' })
      }
    })
    .catch(err => {
      console.log('Error:', err)
      return res.send({ redirect: 'stripe/failed' })
    })
})
router.get('/success', async(req, res) => {
  console.log('success')
  return res.render('stripeSuccess')
})
router.get('/failed', async(req, res) => {
  return res.render('stripeFailed')
})
router.get('/cancel', async(req, res) => {
  return res.render('stripeCancel')
})
module.exports = router
