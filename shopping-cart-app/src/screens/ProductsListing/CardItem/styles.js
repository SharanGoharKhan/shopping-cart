import { moderateScale } from '../../../utils/scaling'
import { colors } from '../../../utils/colors'
import { fontStyles } from '../../../utils/fontStyles';
import { Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window')
/* StyleSheet
============================================================================= */
export default {
    cardContainer: {
        width: width*.45,
        height: height*.3,
        backgroundColor:'white',
        marginTop: moderateScale(10),
        marginBottom: moderateScale(10),
        borderRadius: moderateScale(5)
    },
    cardTop: {
        width: '100%',
        height: '60%'
    },
    imgResponsive: {
        flex: 1,
        width: undefined,
        height: undefined,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderRadius:moderateScale(5)
    },
    textContainer: {
        width: '100%',
        height: '12%'
    },
    textStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(12),
        marginLeft: '5%'
    },
    botContainer: {
        flex:1,
        alignItems: 'flex-end',
        flexDirection: 'row'
    },
    ratingContainer: {
        width: '60%',
        height: '40%',
        alignItems: 'flex-start',
        flexDirection:'row'
    },
    ratingStyle: {
        marginLeft:'8%'
    },
    ratingNumber: {
        marginTop: '1%',
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(10)
    },
    priceContainer: {
        width: '40%',
        height:'40%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    priceStyle: {
        fontSize: moderateScale(14),
        fontFamily: fontStyles.PoppinsRegular,
        color: colors.textBlueColor
    }
}