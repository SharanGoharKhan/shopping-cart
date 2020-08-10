/* eslint-disable prefer-const */
/* eslint-disable no-useless-return */
const express = require('express')
const paypal = require('paypal-rest-sdk')
const Paypal = require('../models/paypal')
const Order = require('../models/order')
const User = require('../models/user')
const Item = require('../models/item')
const Option = require('../models/option')
const Coupon = require('../models/coupon')
const Configuration = require('../models/configuration')
const sendEmail = require('../helpers/email')
const { sendNotification, updateStockValue } = require('../helpers/utilities')
const { placeOrderTemplate, placeOrderText } = require('../helpers/templates')
const {
  pubsub,
  PLACE_ORDER,
  ORDER_STATUS_CHANGED
} = require('../helpers/pubsub')

const { transformOrder } = require('../graphql/resolvers/merge')
const router = express.Router()

var DELIVERY_CHARGES = 0.0
var CURRENCY = 'USD'
var CURRENCY_SYMBOL = '$'
var isInitialized = false

const initializePaypal = async() => {
  const configuration = await Configuration.findOne()
  if (!configuration) return (isInitialized = false)
  paypal.configure({
    mode: configuration.sandbox ? 'sandbox' : 'live', // sandbox or live
    client_id: configuration.client_id,
    client_secret: configuration.client_secret
  })
  DELIVERY_CHARGES = configuration.delivery_charges
  CURRENCY = configuration.currency
  CURRENCY_SYMBOL = configuration.currency_symbol
  isInitialized = true
}

router.get('/', async(req, res) => {
  await initializePaypal()
  if (!isInitialized) return res.render('cancel')
  console.log('/', req.query.id)
  return res.render('index', { id: req.query.id })
})
router.get('/payment', async(req, res) => {
  if (!isInitialized) await initializePaypal()
  if (!isInitialized) return res.render('cancel')
  console.log('payment')
  // get order information from paypal table against this id
  const paypalOrder = await Paypal.findOne({ order_id: req.query.id })
  if (!paypalOrder) {
    return res.redirect(`${process.env.SERVER_URL}paypal/cancel`)
  }

  const itemsFood = await Item.find({
    _id: { $in: paypalOrder.items }
  }).populate('food variation')

  const items_list = []

  let price = 0
  let addonsTitle = ''
  let itemsT = []
  itemsT = itemsFood.map(async item => {
    items_list.push({
      name: item.food.title,
      sku: item.food.title,
      price: item.variation.price,
      currency: CURRENCY,
      quantity: item.quantity
    })
    let item_price = item.variation.price
    if (item.addons && item.addons.length > 0) {
      let addons = []
      let optionsAll = []
      item.addons.forEach(({ options }) => {
        optionsAll = optionsAll.concat(options)
      })
      const populatedOptions = await Option.find({ _id: { $in: optionsAll } })
      optionsAll.forEach(id => {
        const option = populatedOptions.find(o => o.id === id)
        item_price += option.price
        items_list.push({
          name: option.title,
          sku: option.title,
          price: option.price,
          currency: CURRENCY,
          quantity: item.quantity
        })
        addons.push(`${option.title} ${CURRENCY_SYMBOL}${option.price}`)
      })
      addonsTitle = addons.join(',')
    }
    price += item_price * item.quantity
    return `${item.quantity} x ${item.food.title}(${item.variation.title}) ${CURRENCY_SYMBOL}${item.variation.price}`
  })

  let description = await Promise.all(itemsT)
  description = description.join(',') + `, ${addonsTitle}`
  console.log(paypalOrder.coupon)
  if (paypalOrder.coupon) {
    const coupon = await Coupon.findOne({ code: paypalOrder.coupon })
    if (coupon) {
      items_list.push({
        name: 'discount',
        sku: 'discount',
        price: -((coupon.discount / 100) * price),
        currency: CURRENCY,
        quantity: 1
      })
      price = price - (coupon.discount / 100) * price
    }
  }
  // do something here
  var create_payment_json = {
    intent: 'sale',
    payer: {
      payment_method: 'paypal'
    },
    redirect_urls: {
      return_url: `${process.env.SERVER_URL}paypal/success`,
      cancel_url: `${process.env.SERVER_URL}paypal/cancel`
    },
    transactions: [
      {
        item_list: {
          items: items_list
        },
        amount: {
          currency: CURRENCY,
          total: (price + DELIVERY_CHARGES).toFixed(2),
          details: {
            subtotal: Number(price).toFixed(2),
            shipping: DELIVERY_CHARGES.toFixed(2)
          }
        },
        description: description
      }
    ]
  }

  paypal.payment.create(create_payment_json, async function(error, payment) {
    if (error) {
      console.log(error.response.details)
      throw error
    } else {
      console.log('Create Payment Response')
      console.log(payment)
      paypalOrder.paypal_create_payment = payment
      paypalOrder.paymentId = payment.id
      await paypalOrder.save()
      res.redirect(payment.links[1].href)
    }
  })
})
router.get('/success', async(req, res) => {
  console.log('success')
  if (!isInitialized) await initializePaypal()
  if (!isInitialized) return res.render('cancel')
  // PAYID-LTR2IXQ81928789AS396423N
  var PayerID = req.query.PayerID
  var paymentId = req.query.paymentId
  const paypalOrder = await Paypal.findOne({ paymentId: paymentId })
  let user = await User.findById(paypalOrder.user)
  const itemsFood = await Item.find({
    _id: { $in: paypalOrder.items }
  }).populate('food variation')
  let price = 0
  let addonsTitle = ''
  let itemsT = []
  itemsT = itemsFood.map(async item => {
    let item_price = item.variation.price

    if (item.addons && item.addons.length > 0) {
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
      addonsTitle = addons.join(', ')
    }
    price += item_price * item.quantity
    return `${item.quantity} x ${item.food.title}(${item.variation.title}) ${CURRENCY_SYMBOL}${item.variation.price}`
  })
  let description = await Promise.all(itemsT)
  description = description.join(', ')
  console.log(PayerID, paymentId, paypalOrder)
  console.log(paypalOrder.coupon)
  if (paypalOrder.coupon) {
    const coupon = await Coupon.findOne({ code: paypalOrder.coupon })
    if (coupon) {
      price = price - (coupon.discount / 100) * price
    }
  }
  var execute_payment_json = {
    payer_id: PayerID,
    transactions: [
      {
        amount: {
          currency:
            paypalOrder.paypal_create_payment.transactions[0].amount.currency,
          total: paypalOrder.paypal_create_payment.transactions[0].amount.total
        }
      }
    ]
  }

  paypal.payment.execute(paymentId, execute_payment_json, async function(
    error,
    payment
  ) {
    if (error) {
      console.log(error.response)
      res.render('cancel')
      return
    } else {
      console.log('Get Payment Response')
      if (payment.state === 'approved') {
        console.log(JSON.stringify(payment))
        paypalOrder.paypal_payment_response = payment
        const order = new Order({
          user: paypalOrder.user,
          items: paypalOrder.items,
          delivery_address: paypalOrder.delivery_address, // dynamic address
          order_id: paypalOrder.order_id,
          order_status: 'PENDING',
          payment_method: 'PAYPAL',
          payment_status: 'PAID',
          paid_amount:
            paypalOrder.paypal_create_payment.transactions[0].amount.total,
          order_amount: paypalOrder.order_amount,
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
        await paypalOrder.save()
        const placeOrder_template = placeOrderTemplate([
          result.order_id,
          description,
          result.delivery_address.delivery_address,
          `${CURRENCY_SYMBOL} ${Number(price).toFixed(2)}`,
          `${CURRENCY_SYMBOL} ${DELIVERY_CHARGES}`,
          `${CURRENCY_SYMBOL} ${result.paid_amount.toFixed(2)}`,
          addonsTitle
        ])
        const placeOrder_text = placeOrderText([
          result.order_id,
          description,
          result.delivery_address.delivery_address,
          `${CURRENCY_SYMBOL} ${Number(price).toFixed(2)}`,
          `${CURRENCY_SYMBOL} ${DELIVERY_CHARGES}`,
          `${CURRENCY_SYMBOL} ${result.paid_amount.toFixed(2)}`,
          addonsTitle
        ])
        user.orders.push(result._id)
        await user.save()

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

        sendEmail(
          user.email,
          'Order Placed',
          placeOrder_text,
          placeOrder_template
        )
        sendNotification(order.order_id)
        console.log('success')
        res.render('success')
        updateStockValue(itemsFood)
        return
      }
      res.render('cancel')
      return
    }
  })
})
router.get('/cancel', (req, res) => {
  res.render('cancel')
})

module.exports = router
