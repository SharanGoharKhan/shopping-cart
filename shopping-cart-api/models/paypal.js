const mongoose = require('mongoose')
const {pointSchema} = require('./point')
const { itemSchema } = require('./item')
const {
  payment_status,
  order_status,
  payment_method
} = require('../helpers/enum')
const item = require('./item')

const Schema = mongoose.Schema

const paypalSchema = new Schema(
  {
    orderId: {
      type: String,
      required: true
    },
    deliveryAddress: {
      location:{
        type: pointSchema,
      },
      deliveryAddress: { type: String, required: true },
      details: { type: String },
      label: { type: String, required: true }
    },
    items: [
      {
        type: itemSchema,
        required: true
      }
    ],
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    paymentStatus: {
      type: String,
      enum: payment_status,
      default: payment_status[0]
    },
    orderStatus: {
      type: String,
      enum: order_status
    },
    orderAmount: { type: Number, required: true },
    statusQueue: {
      type: Object,
      required: true
    },
    paymentMethod: {
      enum: payment_method,
      type: String,
      required: true,
      default: payment_method[0]
    },
    paypalCreatePayment: {
      type: Object,
      default: null
    },
    paypalPaymentResponse: {
      type: Object,
      default: null
    },

    paymentId: {
      type: String
    },
    coupon: { type: String },
    isActive: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
)
module.exports = mongoose.model('Paypal', paypalSchema)
