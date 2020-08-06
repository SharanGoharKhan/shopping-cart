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
    <WebView
      originWhitelist={['*']}
      source={{ html: '<h1>This is a static HTML source!</h1>' }}
    />
  )
}

export default StripeCheckout
