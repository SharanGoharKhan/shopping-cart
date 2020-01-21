import React from 'react'
import { View, StatusBar, StyleSheet, Platform } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import AppContainer from './src/utils/routes'

function App() {
  return (
    <SafeAreaView forceInset={{ top: 'always' }} style={styles.flex}>
      <View style={styles.container}>
        <AppContainer />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  container: {
    flex: 1, 
  },
  spinnerContainer: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  }
})

export default App;