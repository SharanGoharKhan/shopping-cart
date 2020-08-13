export const login = `
mutation Login($facebookId:String,$email:String,$password:String,$type:String!,$appleId:String,$name:String,$notificationToken:String){
    login(facebookId:$facebookId,email:$email,password:$password,type:$type,appleId:$appleId,name:$name,notificationToken:$notificationToken){
     userId
     token
     tokenExpiration
     name
     email
     phone
   }
}
`

export const createUser = `
  mutation CreateUser($facebookId:String,$phone:String,$email:String,$password:String,$name:String,$notificationToken:String,$appleId:String){
      createUser(userInput:{
          facebookId:$facebookId,
          phone:$phone,
          email:$email,
          password:$password,
          name:$name,
          notificationToken:$notificationToken,
          appleId:$appleId
      }){
          userId
          token
          tokenExpiration
          name
          email
          phone
          notificationToken
      }
    }`

export const profile = `
  query{
    profile{
      _id
      name
      phone
      email
      notificationToken
      addresses{
        _id
        label
        region
        city
        apartment
        building
        details
        selected
      }
    }
  }`

export const updateUser = `
    mutation UpdateUser($name:String!,$phone:String!){
        updateUser(updateUserInput:{name:$name,phone:$phone}){
          _id
          name
          phone
        }
      }`

export const createAddress = `mutation CreateAddress($addressInput:AddressInput!){
  createAddress(addressInput:$addressInput){
    _id
    addresses{
      _id
      label
      region
      city
      apartment
      building
      details
      selected
    }
  }
}`

export const editAddress = `mutation EditAddress($addressInput:AddressInput!){
  editAddress(addressInput:$addressInput){
    _id
    label
    region
    city
    apartment
    building
    details
    selected
  }
}`
export const deleteAddress = `mutation DeleteAddress($id:ID!){
  deleteAddress(id:$id){
    _id
    addresses{
      _id
      label
      region
      city
      apartment
      building
      details
      selected
    }
  }
}`

export const selectAddress = `mutation SelectAddress($id:String!){
  selectAddress(id:$id){
    _id
    addresses{
      _id
      label
      region
      city
      apartment
      building
      details
      selected
    }
  }
}`

export const categories = `
{
  categories{
  _id
  title
  }
}`

export const subCategories = `query SubCategoriesById($id: String!){
  subCategoriesById(id:$id){
    _id
    title
    image
    category{
      _id
      title
    }
  }
}`



export const getConfiguration = `query Configuration{
    configuration{
      _id
      currency
      currencySymbol
      deliveryCharges
    }
  }`