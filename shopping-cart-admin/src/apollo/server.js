
export const getCategories = `query AllCategories($page:Int)
    {
      allCategories(page:$page){
        _id
        title
      }}`

export const categories = `query categories
    {
      categories{
          _id
          title
    }}`

export const subscribePlaceOrder = `subscription SubscribePaceOrder{
  subscribePlaceOrder{
      order{
        _id
      deliveryAddress{
        deliveryAddress
        details
        label
      }
      deliveryCharges
      orderAmount
      paidAmount
      paymentMethod
      orderId
      user{
        _id
        name
        email
        phone
      }
      items{
        _id
        food{
          _id
          title
          description
          img_url
        }
        variation{
          _id
          title
          price
          discounted
        }
        addons{
          _id
          title
          description
          quantity_minimum
          quantity_maximum
          options{
            _id
            title
            price
          }
        }
        quantity
      }
      reason
      status
      payment_status
      order_status
      createdAt
      review{
        _id
        rating
        description
      }
      rider{
        _id
        name
      }
    }
    origin
  }
}`

export const createCategory = `
mutation CreateCategory($title:String!){
  createCategory(category:{title:$title}){_id}
}`

export const editCategory = `
      mutation EditCategory( $_id:String,$title:String!){
        editCategory(category:{_id:$_id,title:$title}){_id}
      }`

export const deleteCategory = `
      mutation DeleteCategory($id:String!){
        deleteCategory(id:$id){
          _id
        }
      }`
export const subCategories = `query subCategories
      {
        subCategories{
            _id
            title
            image
            category{
              _id
              title
            }
      }}`
export const createSubCategory = `
      mutation CreateSubCategory($title:String!,$image:String!,$category:String!){
        createSubCategory(subCategory:{title:$title,image:$image,category:$category}){_id}
      }`

export const editSubCategory = `
            mutation EditSubCategory( $_id:String,$title:String!,$image:String!,$category:String!){
              editSubCategory(subCategory:{_id:$_id,title:$title,image:$image,category:$category}){_id}
            }`

export const deleteSubCategory = `
            mutation DeleteSubCategory($id:String!){
              deleteSubCategory(id:$id){
                _id
              }
            }`

export const attributes = `
            query OptionGroups{
              optionGroups{
                _id
                title
                subCategory{
                  _id
                  title
                }
                options{
                  _id
                  title
                }
              }
            }
`

export const getAttributesByCategory = `query GetOptionGroupsByCategory($subCategory:String!){
  getOptionGroupsByCategory(subCategory:$subCategory){
    _id
    title
    subCategory{
      _id
      title
      category{
        _id
        title
      }
    }
    options{
      _id
      title
    }
  }
}`

export const createAttributes = `
            mutation CreateOptionGroup($optionGroupInput:OptionGroupInput!){
              createOptionGroup(optionGroupInput:$optionGroupInput){
                  _id
                  title
                  subCategory{
                    _id
                    title
                  }
                  options{
                    _id
                    title
                  }
              }
            }
`

export const editAttributes = `
            mutation EditOptionGroup($optionGroupInput:OptionGroupInput!){
              editOptionGroup(optionGroupInput:$optionGroupInput){
                  _id
                  title
                  subCategory{
                    _id
                    title
                  }
                  options{
                    _id
                    title
                  }
              }
            }
`

export const deleteAttribute = `mutation DeleteOptionAttribute($id:String!){
  deleteOptionGroup(id:$id)
  }`


export const getProducts = `query Products{
  products{
    _id
    title
    skuCode
    description
    subCategory{
      _id
      title
      category{
        _id
        title
      }
    }
    image
    attributes{
      _id
      title
      options{
        _id
        title
        price
        stock
      }
    }
    price
    featured
  }
}`

export const createProduct = `mutation CreateProduct($productInput:ProductInput!){
    createProduct(productInput:$productInput){
      _id
    title
    skuCode
    description
    subCategory{
      _id
      title
      category{
        _id
        title
      }
    }
    image
    attributes{
      _id
      title
      options{
        _id
        title
        price
        stock
      }
    }
    price
    featured
    }
}`


export const editProduct = `mutation EditProduct($productInput:ProductInput!){
  editProduct(productInput:$productInput){
    _id
  title
  skuCode
  description
  subCategory{
    _id
    title
    category{
      _id
      title
    }
  }
  image
  attributes{
    _id
    title
    options{
      _id
      title
      price
      stock
    }
  }
  price
  featured
  }
}`

export const deleteProduct = `mutation DeleteProduct($id:String!){
  deleteProduct(id:$id){
  _id
  }
}`

export const getOrders = `query Orders($page:Int,$rows:Int,$search:String){
  allOrders(page:$page,rows:$rows,search:$search){
    _id
    delivery_address{
      latitude
      longitude
      delivery_address
      details
      label
    }
    delivery_charges
    order_amount
    paid_amount
    payment_method
    order_id
    user{
      _id
      name
      email
      phone
    }
    items{
      _id
      food{
        _id
        title
        description
        img_url
      }
      variation{
        _id
        title
        price
        discounted
      }
      addons{
        
        title
        description
        quantity_minimum
        quantity_maximum
        options{
         
          title
          price
        }
      }
      quantity
    }
    reason
    status
    payment_status
    order_status
    createdAt
    review{
      _id
      rating
      description
    }
    rider{
      _id
      name
    }
  }
}`

export const getDashboardTotal = `query GetDashboardTotal($startingDate: String, $endingDate: String){
  getDashboardTotal(starting_date: $startingDate, ending_date: $endingDate){
    total_orders
    total_users
    total_sales
    total_ratings
    avg_ratings
  }
}`
export const getDashboardSales = `query GetDashboardSales($startingDate: String, $endingDate: String){
  getDashboardSales(starting_date: $startingDate, ending_date: $endingDate){
    orders{
      day
      amount
    }
  }
}`
export const getDashboardOrders = `query GetDashboardOrders($startingDate: String, $endingDate: String){
  getDashboardOrders(starting_date: $startingDate, ending_date: $endingDate){
    orders{
      day
      count
    }
  }
}`

export const getDashboardData = `query GetDashboardData($startingDate: String, $endingDate: String){
  getDashboardData(starting_date: $startingDate, ending_date: $endingDate){
    total_orders
    total_users
    total_sales
    orders{
      day
      count
      amount
    }
  }
}`

export const getConfiguration = `query GetConfiguration{
  configuration{
    _id
    orderPrefix
    email
    password
    enableEmail
    clientId
    clientSecret
    sandbox
    publishableKey
    secretKey
    deliveryCharges
    currency
    currencySymbol
  }
}`

export const saveOrderConfiguration = `mutation SaveOrderConfiguration($configurationInput:OrderConfigurationInput!){
  saveOrderConfiguration(configurationInput:$configurationInput){
    _id
    orderPrefix
  }
}`
export const saveEmailConfiguration = `mutation SaveEmailConfiguration($configurationInput:EmailConfigurationInput!){
  saveEmailConfiguration(configurationInput:$configurationInput){
    _id
    email
    password
    enableEmail
  }
}`
export const saveMongoConfiguration = `mutation SaveMongoConfiguration($configurationInput:MongoConfigurationInput!){
  saveMongoConfiguration(configurationInput:$configurationInput){
    _id
    mongodbUrl
  }
}`

export const savePaypalConfiguration = `mutation SavePaypalConfiguration($configurationInput:PaypalConfigurationInput!){
  savePaypalConfiguration(configurationInput:$configurationInput){
    _id
    clientId
    clientSecret
    sandbox
  }
}`

export const saveStripeConfiguration = `mutation SaveStripeConfiguration($configurationInput:StripeConfigurationInput!){
  saveStripeConfiguration(configurationInput:$configurationInput){
    _id
    publishableKey
    secretKey
  }
}`
export const saveDeliveryConfiguration = `mutation SaveDeliveryConfiguration($configurationInput:DeliveryConfigurationInput!){
  saveDeliveryConfiguration(configurationInput:$configurationInput){
    _id
    deliveryCharges
  }
}`
export const saveCurrencyConfiguration = `mutation SaveCurrencyConfiguration($configurationInput:CurrencyConfigurationInput!){
  saveCurrencyConfiguration(configurationInput:$configurationInput){
    _id
    currency
    currencySymbol
  }
}`

export const adminLogin = `mutation AdminLogin($email:String!,$password:String!){
  adminLogin(email:$email,password:$password){
    userId
    token
    name
    email
  }
}`

export const updateOrderStatus = `mutation UpdateOrderStatus($id:String!,$status:String!,$reason:String){
  updateOrderStatus(id:$id,status:$status,reason:$reason){
    _id
    orderStatus
    paymentStatus
  }
}
`

export const sendNotificationUser = `mutation SendNotificationUser($notificationTitle:String, $notificationBody: String!){
  sendNotificationUser(notificationTitle:$notificationTitle,notificationBody:$notificationBody)
}
`

export const updateStatus = `mutation UpdateStatus($id:String!,$status:Boolean!,$reason:String){
  updateStatus(id:$id,status:$status,reason:$reason){
    _id
    status
    reason
  }
}
`

export const uploadToken = `mutation UploadToken($pushToken:String!){
  uploadToken(pushToken:$pushToken){
    _id
    pushToken
  }
}`

export const getUsers = `query Users($page:Int){
  users(page:$page){
    _id
    name
    email
    phone
    addresses{
      _id
      deliveryAddress
      details
      label
    }
  }
}`

export const reviews = `query AllReviews($offset:Int){
  allReviews(offset:$offset){
    _id
    rating
    description
    createdAt
    updatedAt
    is_active
    order{
      user{
        name
        email
      }
      items{
        food{
          title
        }
      }
   }
  }
}`

export const resetPassword = `mutation ResetPassword($password:String!,$token:String!){
  resetPassword(password:$password,token:$token){
    result
  }
}`

export const orderCount = `
query{
  orderCount
}`

export const getOrderStatuses = `query{
  getOrderStatuses
}
`

export const getPaymentStatuses = `query{
  getPaymentStatuses
}`

export const updatePaymentStatus = `mutation UpdatePaymentStatus($id:String!,$status:String!){
  updatePaymentStatus(id:$id,status:$status){
    _id
    paymentStatus
    paidAmount
  }
}
`

export const createOptions = `mutation CreateOptions($optionInput:[OptionInput]){
  createOptions(optionInput:$optionInput){
    _id
    title
    description
    price
  }
}`

export const getOptions = `query Options{
  options {
    _id
    title
    description
    price
  }
}
`

export const options = `query AllOptions($page:Int){
  allOptions(page:$page) {
    _id
    title
    description
    price
  }
}
`

export const createCoupon = `mutation CreateCoupon($couponInput:CouponInput!){
  createCoupon(couponInput:$couponInput){
    _id
    code
    discount
    enabled
  }
}`
export const editCoupon = `mutation editCoupon($couponInput:CouponInput!){
  editCoupon(couponInput:$couponInput){
    _id
    code
    discount
    enabled
        }
      }`
export const deleteCoupon = `mutation DeleteCoupon($id:String!){
        deleteCoupon(id:$id)
      }`

export const getCoupons = `query Coupons{
        coupons {
          _id
          code
          discount
          enabled
        }
      }`
