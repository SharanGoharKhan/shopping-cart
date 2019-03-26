import { Dimensions } from 'react-native'
const {height, width} = Dimensions.get('window')

/* StyleSheet
============================================================================= */
export default {
    container: {
        flexDirection:'column',
        height: height*.3,
        width: width,
        alignItems:'center'
    },
    image: {
        width: width,
        height: height*.3
    }
}