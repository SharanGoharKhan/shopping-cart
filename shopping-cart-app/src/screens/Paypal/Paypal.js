import React, { useState } from 'react'
import { WebView } from 'react-native-webview'
import { useNavigation, useRoute } from '@react-navigation/native'

function Paypal() {
  const navigation = useNavigation()
  const route = useRoute()
  const [_id] = useState(route.params._id ?? null)



  return (
    <WebView
    />
  )
}

export default Paypal
