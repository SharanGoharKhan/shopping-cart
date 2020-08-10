const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Point{
    coordinates: [String!]
  }

  type Address {
    _id: ID!
    location:Point
    deliveryAddress: String!
    details: String
    label: String!
    selected: Boolean
  }

  type OrderAddress {
    location:Point
    deliveryAddress: String!
    details: String
    label: String!
  }

  type Item {
    _id: ID!
    product: String!
    productId: String!
    price: Float!
    quantity: Int!
    selectedAttributes:[SelectedAttributes!]
    isActive: Boolean!
    createdAt: String!
    updatedAt: String!
  }

  type SelectedAttributes {
    _id: String!
    title: String!
    options: Option!
  }

  type PaymentType {
    _id: ID!
    name: String
    isActive: Boolean!
    createdAt: String!
    updatedAt: String!
  }

  type CardInformation {
    name: String!
    creditCardNumber: String!
    expirationDate: String!
    cvv: String!
  }

  type Category {
    _id: ID!
    title: String!
    image: String
    isActive: Boolean!
    createdAt: String!
    updatedAt: String!
  }

  type SubCategory {
    _id: ID
    title: String!
    image: String!
    category: Category!
    isActive: Boolean!
    createdAt: String!
    updatedAt: String!
  }

  type Product {
    _id: ID!
    title: String!
    description: String!
    subCategory: SubCategory!
    image: [String!]
    attributes: [Attributes!]
    price: Float!
    featured: Boolean
    isActive: Boolean!
    createdAt: String!
    updatedAt: String!
  }

  type Attributes {
    _id: String!
    title: String!
    options: [ProductOption!]
  }

  type ProductOption {
    _id: String!
    title:String!
    price:Float!
    stock:Int!
  }

  type User {
    _id: ID
    name: String
    phone: String
    email: String
    password: String
    paymentType: PaymentType
    cardInformation: CardInformation
    orders: [Order!]
    isActive: Boolean
    createdAt: String
    updatedAt: String
    addresses: [Address!]
    notificationToken: String
  }
  type Configuration {
    _id: String!
    orderPrefix: String
    pushToken: String
    email: String
    password: String
    enableEmail: Boolean
    clientId: String
    clientSecret: String
    sandbox: Boolean
    publishableKey: String
    secretKey: String
    deliveryCharges: Float
    currency: String
    currencySymbol: String
  }

  type OrderStatus {
    pending: String!
    preparing: String
    picked: String
    delivered: String
    cancelled: String
  }

  type Order {
    _id: ID!
    orderId: String!
    deliveryAddress: OrderAddress!
    items: [Item!]!
    user: User!
    paymentMethod: String
    paidAmount: Float
    orderAmount: Float
    status: Boolean
    paymentStatus: String!
    orderStatus: String
    reason: String
    statusQueue: OrderStatus
    isActive: Boolean!
    createdAt: String!
    updatedAt: String!
    deliveryCharges: Float
  }

  type AuthData {
    userId: ID!
    token: String!
    tokenExpiration: Int!
    name: String
    phone: String
    email: String
    notificationToken: String
  }

  type Review {
    _id: ID!
    order: Order!
    rating: Int!
    description: String
    is_active: Boolean!
    createdAt: String!
    updatedAt: String!
  }

  type ReviewOutput {
    _id: ID!
    order_id: String!
    review: Review!
    is_active: Boolean!
    createdAt: String!
    updatedAt: String!
  }

  type AllReviewOutput {
    review: [Review!]
  }

  type Admin {
    userId: String!
    email: String!
    name: String!
    token: String!
  }

  type ForgotPassword {
    result: Boolean!
  }

  type Option {
    _id: String!
    title: String!
  }

  type OptionGroup {
    _id: String!
    title: String!
    subCategory: SubCategory
    options: [Option]!
    isActive: Boolean!
  }

  type DashboardData {
    total_orders: Int!
    total_users: Int!
    total_sales: Float!
    total_ratings: Int!
    avg_ratings: Float!
  }

  type DashboardSales {
    orders: [SalesValues!]
  }
  type DashboardOrders {
    orders: [OrdersValues!]
  }

  type SalesValues {
    day: String!
    amount: Float!
  }
  type OrdersValues {
    day: String!
    count: Int!
  }
  type Coupon {
    _id: String!
    code: String!
    discount: Float!
    enabled: Boolean!
  }

  type Subscription_Orders {
    userId: String
    order: Order!
    origin: String!
  }

  input OrderConfigurationInput {
    orderPrefix: String!
  }

  input EmailConfigurationInput {
    email: String!
    password: String!
    enableEmail: Boolean!
  }

  input MongoConfigurationInput {
    mongodbUrl: String!
  }

  input PaypalConfigurationInput {
    clientId: String!
    clientSecret: String!
    sandbox: Boolean!
  }
  input StripeConfigurationInput {
    publishableKey: String!
    secretKey: String!
  }
  input DeliveryConfigurationInput {
    deliveryCharges: Float
  }
  input CurrencyConfigurationInput {
    currency: String!
    currencySymbol: String!
  }

  input UpdateUser {
    name: String!
    phone: String!
  }

  input OrderInput {
    product: String!
    productId: String!
    price: Float!
    quantity: Int!
    selectedAttributes: [OrderAttributesInput!]
  }

  input OrderAttributesInput {
    _id: String!
    title: String!
    options: OptionInput!
  }

  input ProductInput {
    _id: String
    skuCode: String
    title: String!
    description: String
    subCategory: String!
    image: [String]
    attributes: [AttributeInput!]
    price: Float!
    featured: Boolean
  }

  input AttributeInput {
    _id: String!
    title: String!
    options: [ProductOptionInput!]
  }

  input ProductOptionInput {
    _id: String!
    title: String!
    price: Float!
    stock: Int!
  }


  input UserInput {
    phone: String
    email: String
    password: String
    name: String
    facebookId: String
    notificationToken: String
    appleId: String
  }

  input ReviewInput {
    orderId: String!
    rating: Int!
    description: String
  }

  input CategoryInput {
    _id: String
    title: String!
    image: String
  }

  input SubCategoryInput {
    _id: String
    title: String!
    image: String!
    category: String!
  }

  input OptionInput {
    _id: String
    title: String!
  }

  input OptionGroupInput {
    _id: String
    title: String!
    subCategory: String!
    options: [OptionInput]!
    isActive: Boolean 
  }

  input CouponInput {
    _id: String
    code: String!
    discount: Float!
    enabled: Boolean
  }

  input AddressInput {
    _id: String
    latitude: String!
    longitude: String!
    deliveryAddress: String!
    details: String
    label: String!
  }

  type Query {
    categories: [Category!]!
    subCategories: [SubCategory!]!
    allCategories(page: Int): [Category!]!
    orders(offset: Int): [Order!]!
    products(page: Int): [Product!]!
    undeliveredOrders(offset: Int): [Order!]!
    deliveredOrders(offset: Int): [Order!]!
    allOrders(page: Int, rows: Int, search: String): [Order!]!
    getDashboardTotal(
      starting_date: String
      ending_date: String
    ): DashboardData!
    allReviews(offset: Int): [Review!]
    reviews(offset: Int): [ReviewOutput!]!
    profile: User
    configuration: Configuration!
    users(page: Int): [User!]
    order(id: String!): Order!
    orderCount: Int
    productByIds(ids: [String!]!): [Product!]
    productByCategory(subCategory:String!):[Product!]
    getOrderStatuses: [String!]
    getPaymentStatuses: [String!]
    assignedOrders(id: String): [Order!]
    options: [Option!]
    optionGroups: [OptionGroup!]
    getOptionGroupsByCategory(subCategory: String!):[OptionGroup]
    allOptions(page: Int): [Option!]
    getDashboardOrders(
      starting_date: String
      ending_date: String
    ): DashboardOrders!
    getDashboardSales(
      starting_date: String
      ending_date: String
    ): DashboardSales!
    coupons: [Coupon!]!
  }

  type Mutation {
    adminLogin(email: String!, password: String!): Admin!
    login(
      appleId: String
      facebookId: String
      email: String
      password: String
      type: String!
      name: String
      notificationToken: String
    ): AuthData!
    createUser(userInput: UserInput): AuthData!
    updateUser(updateUserInput: UpdateUser!): User!
    updateNotificationStatus(
      offerNotification: Boolean!
      orderNotification: Boolean!
    ): User!
    createCategory(category: CategoryInput!): Category!
    editCategory(category: CategoryInput!): Category!
    createSubCategory(subCategory: SubCategoryInput!): SubCategory!
    editSubCategory(subCategory: SubCategoryInput!): SubCategory!
    placeOrder(
      orderInput: [OrderInput!]!
      paymentMethod: String!
      couponCode: String
      address: AddressInput!
    ): Order!
    reviewOrder(reviewInput: ReviewInput!): Order!
    cancelOrder(orderId: String!): Order!
    uploadPicture(picture: String!): User!
    saveOrderConfiguration(
      configurationInput: OrderConfigurationInput!
    ): Configuration!
    saveEmailConfiguration(
      configurationInput: EmailConfigurationInput!
    ): Configuration!
    saveMongoConfiguration(
      configurationInput: MongoConfigurationInput!
    ): Configuration!
    savePaypalConfiguration(
      configurationInput: PaypalConfigurationInput!
    ): Configuration!
    saveStripeConfiguration(
      configurationInput: StripeConfigurationInput!
    ): Configuration!
    saveDeliveryConfiguration(
      configurationInput: DeliveryConfigurationInput!
    ): Configuration!
    saveCurrencyConfiguration(
      configurationInput: CurrencyConfigurationInput!
    ): Configuration!
    pushToken(token: String): User!
    updateOrderStatus(id: String!, status: String!, reason: String): Order!
    uploadToken(pushToken: String!): Configuration!
    forgotPassword(email: String!): ForgotPassword!
    resetPassword(password: String!, token: String!): ForgotPassword!
    deleteCategory(id: String!): Category!
    deleteSubCategory(id: String!): SubCategory!
    updateStatus(id: String, status: Boolean, reason: String): Order!
    updatePaymentStatus(id: String!, status: String!): Order!
    createOptions(optionInput: [OptionInput]): [Option!]
    editOption(optionInput: OptionInput): Option!
    deleteOption(id: String!): String!
    createOptionGroup(optionGroupInput: OptionGroupInput): OptionGroup!
    editOptionGroup(optionGroupInput: OptionGroupInput): OptionGroup!
    deleteOptionGroup(id: String!): String!
    createCoupon(couponInput: CouponInput!): Coupon!
    editCoupon(couponInput: CouponInput!): Coupon!
    deleteCoupon(id: String!): String!
    coupon(coupon: String!): Coupon!
    createAddress(addressInput: AddressInput!): User!
    editAddress(addressInput: AddressInput!): Address!
    deleteAddress(id: ID!): User!
    changePassword(oldPassword: String!, newPassword: String!): Boolean!
    selectAddress(id: String!): User!
    assignOrder(id: String): Order!
    createProduct(productInput:ProductInput):Product!
    editProduct(productInput:ProductInput):Product!
    deleteProduct(id: ID!):Product!
  }
  type Subscription {
    subscribePlaceOrder: Subscription_Orders!
    orderStatusChanged(userId: String!): Subscription_Orders!
    unassignedOrder: Subscription_Orders!
  }
`
module.exports = typeDefs