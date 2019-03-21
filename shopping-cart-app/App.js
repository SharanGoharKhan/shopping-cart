import React from 'react'
import AppContainer from './src/utils/routes'
import { Font } from 'expo'
import { View, ActivityIndicator } from 'react-native'
import { colors } from './src/utils/colors'

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
          <AppContainer />
      )
    } else return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {this.state.fontLoaded}
        <ActivityIndicator size="large" color={colors.greenColor} />
      </View>
    )
  }
}
