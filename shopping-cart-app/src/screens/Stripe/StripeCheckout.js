import React from 'react'
import { WebView } from 'react-native-webview'
import { useNavigation, useRoute } from '@react-navigation/native'


function StripeCheckout() {
  const navigation = useNavigation()
  const route = useRoute()

  function onClose(flag) {
    // showMessage here
    navigation.goBack()
  }

  return (
    <WebView />
  )
}

export default StripeCheckout
