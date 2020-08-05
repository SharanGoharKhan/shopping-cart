import { colors } from '../../utils'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  background: {
    backgroundColor: colors.themeBackground
  },
  container: {
    height: '85%'
  },
  button: {
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    height: '7%',
    width: '100%',
    backgroundColor: colors.buttonBackground
  }
})
export default styles
