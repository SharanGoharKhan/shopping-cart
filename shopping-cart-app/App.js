import React, { useState, useEffect } from 'react'
import AppContainer from './src/routes/routes'
import * as Font from 'expo-font'
import { View, ActivityIndicator, StatusBar, StyleSheet, Platform } from 'react-native'
import { colors } from './src/utils/colors'


export default function App() {
  const [fontLoaded, fontLoadedSetter] = useState(false);

  useEffect(() => {
    loadApp();
  })

  async function loadApp() {
    await Font.loadAsync({
      'Poppins-Regular': require('./src/assets/font/Poppins/Poppins-Regular.ttf'),
      'Poppins-Bold': require('./src/assets/font/Poppins/Poppins-Bold.ttf')
    })
    fontLoadedSetter(true)
  }

  if (fontLoaded) {
    return (
      <>
        <StatusBar barStyle={'dark-content'} backgroundColor={colors.headerbackground} />
        <AppContainer />
      </>
    )
  } else return (
    <View style={styles.spinnerContainer}>
      {fontLoaded}
      <ActivityIndicator size="large" color={colors.greenColor} />
    </View>
  )
}
const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  spinnerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
