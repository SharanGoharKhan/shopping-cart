const Product = require('../../models/product')
const User = require('../../models/user')
const Category = require('../../models/category')
const SubCategory = require('../../models/subCategory')
const Item = require('../../models/item')
const Option = require('../../models/option')
const Order = require('../../models/order')
const Address = require('../../models/address')
const { dateToString } = require('../../helpers/date')


const products = async productIds => {
  try {
    const products = await Product.find({ _id: { $in: productIds } })
    products.sort((a, b) => {
      return (
        productIds.indexOf(a._id.toString()) - productIds.indexOf(b._id.toString())
      )
    })
    return products.map(product => {
      return transformProduct(product)
    })
  } catch (err) {
    throw err
  }
}

const item = async itemId => {
  try {
    const item = await Item.findById(itemId)

    const product = await singleProduct(item.product)

    return {
      _id: item.id,
      quantity: item.quantity,
      // variation: await variation.bind(this, item.variation),
      product
    }
  } catch (err) {
    throw err
  }
}

const singleProduct = async productId => {
  try {
    const product = await Product.findById(productId.toString())
    return {
      ...product._doc,
      _id: product.id,
      subCategory: populateSubCategory.bind(this, product.subCategory)
      // variations function here
    }
  } catch (err) {
    throw err
  }
}

const user = async userId => {
  try {
    const user = await User.findById(userId.toString())
    return {
      ...user._doc,
      _id: user.id
    }
  } catch (err) {
    throw err
  }
}

const subCategory = async subCategory => {
  try {
    const result = await SubCategory.findOne({ _id: subCategory })
    return {
      ...result._doc,
      _id: result.id,
      category: populateCategory.bind(this, result.category)
    }
  } catch (err) {
    throw err
  }
}

const transformProduct = product => {
  return {
    ...product._doc,
    _id: product.id,
    subCategory: subCategory.bind(this, product.subCategory),
  }
}

const transformProducts = async productIds => {
  return await products(productIds)
}

const transformStatusQueue = statusQueue => {
  Object.keys(statusQueue).forEach(function(key) {
    statusQueue[key] = statusQueue[key]
      ? dateToString(statusQueue[key])
      : null
  })
  return statusQueue
}

const transformOrder = async order => {
  return {
    ...order._doc,
    _id: order.id,
    user: await user.bind(this, order._doc.user),
    statusQueue: await transformStatusQueue.bind(this, order.statusQueue),
    createdAt: await dateToString(order._doc.createdAt),
    updatedAt: await dateToString(order._doc.updatedAt)
  }
}

const transformCategory = category => {
  return {
    ...category._doc,
    _id: category.id
  }
}

const order = async orderId => {
  const order = await Order.findById(orderId)
  return transformOrder(order)
}


const transformOption = async option => {
  return {
    ...option._doc,
    _id: option.id
  }
}
const transformOptionGroup = async optionGroup => {
  return {
    ...optionGroup._doc,
    _id: optionGroup.id,
    subCategory: populateSubCategory.bind(this, optionGroup.subCategory)
    // options: optionGroup.options.map(transformOption)
  }
}
const transformOrderOption = option => {
  return {
    ...option._doc,
    __typename: 'ItemOption',
    _id: option.id
  }
}

// const options = async optionIds => {
//   const options = await Option.find({
//     _id: { $in: optionIds },
//     isActive: true
//   })
//   return options.map(transformOption)
// }

const orderOption = async optionId => {
  const option = await Option.findById(optionId)
  return transformOrderOption(option)
}


const transformUser = async user => {
  console.log('user',user)
  return {
    ...user._doc,
    password: null,
    _id: user.id,
    addresses: populateAddresses.bind(this, user.addresses)
  }
}

const populateAddresses = async addressIds => {
  const addresses = await Address.find({
    _id: { $in: addressIds },
    isActive: true
  }).sort({ createdAt: -1 })
  return addresses.map(address => ({
    ...address._doc,
    _id: address.id
  }))
}

const populateCategory = async categoryId => {
  const category = await Category.findById(categoryId)
  return transformCategory(category)
}

const populateSubCategory = async subCategoryId => {
  const subCategory = await SubCategory.findById(subCategoryId)
  return transformSubCategory(subCategory)
}

const transformSubCategory = async subCategory => {
  return {
    ...subCategory._doc,
    _id: subCategory.id,
    category: populateCategory.bind(this, subCategory.category)
  }
}

exports.transformSubCategory = transformSubCategory
exports.transformCategory = transformCategory
exports.transformProduct = transformProduct
exports.transformProducts = transformProducts
exports.transformOrder = transformOrder
exports.transformOption = transformOption
exports.transformOptionGroup = transformOptionGroup
exports.transformUser = transformUser