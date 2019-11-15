import React from 'react'
import AppContainer from './src/utils/routes'
import * as Font from 'expo-font'
import { View, ActivityIndicator, StatusBar, StyleSheet } from 'react-native'
import { colors } from './src/utils/colors'
import { SafeAreaView } from 'react-navigation';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      fontLoaded: false
    }

  }

  async componentDidMount() {
    await Font.loadAsync({
      'Poppins-Regular': require('./src/assets/font/Poppins/Poppins-Regular.ttf'),
      'Poppins-Bold': require('./src/assets/font/Poppins/Poppins-Bold.ttf')
    })
    this.setState({ fontLoaded: true })
  }

  render() {
    if (this.state.fontLoaded) {
      return (
        <SafeAreaView forceInset={{ top: 'always' }} style={styles.flex}>
          <View style={styles.container}>
            <AppContainer />
          </View>
        </SafeAreaView>
      )
    } else return (
      <View style={styles.spinnerContainer}>
        {this.state.fontLoaded}
        <ActivityIndicator size="large" color={colors.greenColor} />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  container: {
    flex: 1, 
    marginTop: -(StatusBar.currentHeight)
  },
  spinnerContainer: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  }
})
