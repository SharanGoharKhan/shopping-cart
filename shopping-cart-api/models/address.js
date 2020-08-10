const mongoose = require('mongoose')
const { pointSchema } = require('./point')

const Schema = mongoose.Schema

const AddressSchema = new Schema(
  {
    location: {
      type: pointSchema,
    },
    deliveryAddress: { type: String, required: true },
    details: { type: String },
    label: { type: String, required: true },
    selected: { type: Boolean, default: true },
    isActive: { type: Boolean, default: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Address', AddressSchema)
