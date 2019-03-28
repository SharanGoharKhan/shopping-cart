import { moderateScale } from '../../../utils/scaling'
import { fontStyles } from '../../../utils/fontStyles';
import { Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window')

/* StyleSheet
============================================================================= */
export default {
    cardsContainer: {
        width: '95%', 
        height: height * .25, 
        marginTop: moderateScale(30), 
        alignSelf: 'center', 
        flexDirection: 'column', 
        justifyContent: 'space-around' 
    },
    rowContainer: {
        width: '100%', 
        height: '25%', 
        flexDirection: 'row', 
        justifyContent: 'space-around'  
    },
    cardBtnContainer: {
        width: '45%', 
        height: '100%', 
        flexDirection: 'row', 
        backgroundColor: 'white', 
        borderRadius: moderateScale(5) 
    },
    textViewContainer: {
        width: '80%', 
        height: '100%', 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    textStyle: {
        fontFamily: fontStyles.PoppinsRegular, 
        fontSize: moderateScale(14)
    },
    imgContainer: {
        width: '20%', 
        height: '100%', 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    imgSubContainer: {
        width: '100%', 
        height: '80%'
    },
    imgResponsive: {
        flex: 1, 
        width: undefined, 
        height: undefined 
    }
}