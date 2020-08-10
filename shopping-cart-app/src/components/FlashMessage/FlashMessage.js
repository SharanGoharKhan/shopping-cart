import { showMessage } from 'react-native-flash-message'
import styles from './styles'
import PropTypes from 'prop-types'
import { colors } from '../../utils'

export const FlashMessage = props => {
  showMessage({
    backgroundColor: colors.messageBackground,
    message: props.message,
    position: 'center',
    titleStyle: styles.text,
    style: styles.container
  })
}
FlashMessage.propTypes = {
  message: PropTypes.string.isRequired
}
