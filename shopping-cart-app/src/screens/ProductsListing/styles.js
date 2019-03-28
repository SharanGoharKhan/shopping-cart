import { moderateScale } from '../../utils/scaling'
import { colors } from '../../utils/colors'
import { fontStyles } from '../../utils/fontStyles';
import { Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window')
/* StyleSheet
============================================================================= */
export default {
    flex: {
        flex: 1
    },
    headerContainer: {
        width: '100%',
        height: '10%',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    headerSubContainer: {
        width: '80%',
        height: '50%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerTextContainer: {
        width: '80%',
        height: '100%',
        justifyContent: 'center'
    },
    headerText: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(16)
    },
    headerImg: {
        width: '20%',
        height: '40%'
    },
    imgResponsive: {
        flex: 1,
        width: undefined,
        height: undefined
    },
    scrollViewStyle: {
        backgroundColor: '#EEEEEE'
    },
    bannerContainer: {
        width: '100%',
        height: height *.45,
        backgroundColor: 'blue'
    },
    contentContainer: {
        width: '100%',
        height: height *.38,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentSubContainer: {
        width: '90%',
        height: '90%',
        flexWrap:'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
}