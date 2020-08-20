import React, { useState, useEffect } from 'react'
import AppContainer from './src/routes/routes'
import * as Permissions from 'expo-permissions'
import { Notifications } from 'expo'
import { ApolloProvider } from '@apollo/client'
import { StatusBar, Platform } from 'react-native'
import { ConfigurationProvider } from './src/context/Configuration'
import { UserProvider } from './src/context/User'
import { colors } from './src/utils/colors'
import * as Font from 'expo-font';
import setupApolloClient from './src/apollo/index'
import FlashMessage from 'react-native-flash-message'
import { Spinner } from './src/components'


export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)
  const [client, setupClient] = useState(null)

  useEffect(() => {
    loadAppData()
  }, [])


  async function loadAppData() {
    const client = await setupApolloClient()

    setupClient(client)
    await Font.loadAsync({
      'Poppins-Regular': require('./src/assets/font/Poppins/Poppins-Regular.ttf'),
      'Poppins-Bold': require('./src/assets/font/Poppins/Poppins-Bold.ttf')
    })

    await permissionForPushNotificationsAsync()

    setFontLoaded(true)
  }



  async function permissionForPushNotificationsAsync() {
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    )
    let finalStatus = existingStatus
    // only ask if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    if (existingStatus !== 'granted') {
      // Android remote notification permissions are granted during the app
      // install, so this will only ask on iOS
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS)
      finalStatus = status
    }

    // Stop here if the user did not grant permissions
    if (finalStatus !== 'granted') {
      return
    }

    if (Platform.OS === 'android') {
      Notifications.createChannelAndroidAsync('default', {
        name: 'default',
        sound: true,
        priority: 'max',
        vibrate: [0, 250, 250, 250]
      })
    }
  }


  if (fontLoaded && client) {
    return (
      <ApolloProvider client={client}>
        <StatusBar barStyle={'dark-content'} backgroundColor={colors.headerbackground} />
        <ConfigurationProvider>
          <UserProvider>
            <AppContainer />
          </UserProvider>
        </ConfigurationProvider>
        <FlashMessage position="top" />
      </ApolloProvider>
    )
  } else return (
    <Spinner spinnerColor={colors.spinnerColor} />
  )
}
