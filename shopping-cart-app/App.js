import React from 'react'
import AppContainer from './src/routes/routes'
import { View, ActivityIndicator, StatusBar, StyleSheet } from 'react-native'
import { colors } from './src/utils/colors'
import { useFonts } from 'expo-font';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


export default function App() {
  const [fontLoaded] = useFonts({
    'Poppins-Regular': require('./src/assets/font/Poppins/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./src/assets/font/Poppins/Poppins-Bold.ttf')
  });

  const client = new ApolloClient({
    // uri: 'https://48p1r2roz4.sse.codesandbox.io',
    cache: new InMemoryCache()
  });

  if (fontLoaded) {
    return (
      <ApolloProvider client={client}>
        <StatusBar barStyle={'dark-content'} backgroundColor={colors.headerbackground} />
        <AppContainer />
      </ApolloProvider>
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
