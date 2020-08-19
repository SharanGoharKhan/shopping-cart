import React, { useState, useLayoutEffect } from 'react'
import { WebView } from 'react-native-webview'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useApolloClient, gql} from '@apollo/client'
import { myOrders } from "../../apollo/server"
import getEnvVars from '../../../environment'
const { SERVER_URL } = getEnvVars()

const MYORDERS = gql`
  ${myOrders}
`

function Paypal() {
  const navigation = useNavigation()
  const route = useRoute()
  const client = useApolloClient()
  const [_id] = useState(route.params._id ?? null)

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: null,
      title: 'Paypal Checkout'
    })
  }, [navigation])

  async function handleResponse(data) {
    if (data.title === 'success') {
      const result = await client.query({
        query: MYORDERS,
        fetchPolicy: 'network-only'
      })
      const order = result.data.orders.find(order => order.orderId === _id)
      navigation.reset({
        routes: [
          { name: 'MainLanding' },
          {
            name: 'OrderDetail',
            params: { _id: order._id, clearCart: true }
          }
        ]
      })
    } else if (data.title === 'cancel') {
      navigation.goBack()
      // goBack on Payment Screen
    }
  }

  return (
    <WebView
      source={{ uri: `${SERVER_URL}paypal?id=${_id}` }}
      onNavigationStateChange={data => {
        handleResponse(data)
      }}
      injectedJavaScript={'document.f1.submit()'}
    />
  )
}

export default Paypal
