import { alignment, textStyles } from '../../utils'

export default {
  text: {
    ...textStyles.Bold,
    ...textStyles.H5,
    ...alignment.PTxSmall
  },
  container: {
    borderRadius: 50
  }
}
