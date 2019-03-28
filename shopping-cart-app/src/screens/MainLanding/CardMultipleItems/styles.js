import { moderateScale } from '../../../utils/scaling'
import { fontStyles } from '../../../utils/fontStyles';
import { Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window')

/* StyleSheet
============================================================================= */
export default {
    cardItemsContainer: {
        width: '95%', 
        height: height * .3, 
        alignSelf: 'flex-end'
    },
    cardItemsTextContainer: {
        width: '100%', 
        height: '15%', 
        justifyContent: 'center'
    },
    cardItemsTextStyles: {
        fontFamily: fontStyles.PoppinsRegular, 
        fontSize: moderateScale(16) 
    },
    scrollViewContainer: { 
        width: '100%', 
        height: '85%', 
        flexDirection: 'row' 
    },
    cardContainer: {
        width: width * .5, 
        height: height * .25, 
        marginRight: moderateScale(20), 
        flexDirection: 'column', 
        borderRadius: moderateScale(5), 
        borderColor: 'white', 
        borderWidth: moderateScale(3)
    },
    cardTopContainer: {
        width: '100%', 
        height: '80%'
    },
    cardTopSubContainer: {
        width: '100%', 
        height: '100%', 
        flexWrap: 'wrap', 
        position: 'relative'  
    },
    w50h50: {
        width: '50%', 
        height: '50%' 
    },
    imgResponsive: {
        flex: 1, 
        width: undefined, 
        height: undefined, 
        opacity: 1 
    },
    centerImgContainer: {
        width: width * .18, 
        height: height * .09, 
        position: 'absolute', 
        top: '25%', 
        left: '30%', 
        borderRadius: width * .1
    },
    centerImgStyle: {
        width: width * .18, 
        height: height * .09, 
        borderColor: 'white', 
        borderWidth: moderateScale(2), 
        borderRadius: width * .09 
    },
    bottomContainer: {
        width: '100%', 
        height: '20%', 
        backgroundColor: 'white'
    },
    bottomSubContainer: {
        width: '90%', 
        height: '100%', 
        flexDirection: 'column', 
        marginLeft: '5%', 
        marginTop: '3%'
    },
    bottomTextStyle: {
        fontFamily: fontStyles.PoppinsRegular, 
        fontSize: moderateScale(10), 
        lineHeight: moderateScale(11)
    }


}