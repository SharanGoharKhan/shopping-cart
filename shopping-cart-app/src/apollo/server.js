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
              deliveryAddress
              details
              location{coordinates}
              selected
            }
          }
        }`

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

export const getConfiguration = `query Configuration{
    configuration{
      _id
      currency
      currencySymbol
      deliveryCharges
    }
  }`