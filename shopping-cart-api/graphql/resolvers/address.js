const Point = require("../../models/point")
const Address = require('../../models/address')
const User = require('../../models/user')
const { transformUser } = require('./merge')

module.exports = {
    Mutation: {
        createAddress: async (_, { addressInput }, { req, res }) => {
            console.log('createAddress')
            try {
                if (!req.isAuth) throw new Error('Unauthenticated')
                const user = await User.findById(req.userId)
                if (!user) {
                    throw new Error('User not found')
                }

                await Address.updateMany(
                    { _id: { $in: user.addresses } },
                    { $set: { selected: false } }
                )

                const address = new Address({
                    ...addressInput,
                    location: new Point({
                        type: 'Point',
                        coordinates: [addressInput.longitude, addressInput.latitude]
                    })
                })
                const savedAddress = await address.save()
                user.addresses.push(savedAddress)
                const updatedUser = await user.save()

                return transformUser(updatedUser)
            } catch (e) {
                throw e
            }
        },
        editAddress: async (_, { addressInput }, { req, res }) => {
            console.log('editAddress')
            try {
                if (!req.isAuth) throw new Error('Unauthenticated')
                const user = await User.findById(req.userId)
                if (!user) {
                    throw new Error('User not found')
                }
                const address = await Address.findById(addressInput._id)
                if (!address) {
                    throw new Error('Address not found')
                }
                const location = new Point({
                    type: 'Point',
                    coordinates: [addressInput.longitude, addressInput.latitude]
                })
                address.location = location
                address.deliveryAddress = addressInput.deliveryAddress
                address.details = addressInput.details
                address.label = addressInput.label

                const updatedAddress = await address.save()
                return { ...updatedAddress._doc, _id: updatedAddress.id }
            } catch (e) {
                throw e
            }
        },
        deleteAddress: async (_, { id }, { req, res }) => {
            console.log('deleteAddress')
            try {
                if (!req.isAuth) throw new Error('Unauthenticated')
                const user = await User.findById(req.userId)
                if (!user) {
                    throw new Error('User not found')
                }
                const address = await Address.findById(id)
                if (!address) {
                    throw new Error('Address not found')
                }
                address.isActive = false
                await address.save()
                const updatedUser = await User.findById(req.userId)
                return transformUser(updatedUser)
            } catch (e) {
                throw e
            }
        },
        selectAddress: async (_, { id }, { req }) => {
            console.log('selectAddress')
            try {
                if (!req.isAuth) throw new Error('Unauthenticated')
                const user = await User.findById(req.userId)
                if (!user) {
                    throw new Error('User not found')
                }

                await Address.updateMany(
                    { _id: { $in: user.addresses } },
                    { $set: { selected: false } }
                )
                await Address.updateOne({ _id: id }, { $set: { selected: true } })

                return transformUser(user)
            } catch (e) {
                throw e
            }
        }
    }
}