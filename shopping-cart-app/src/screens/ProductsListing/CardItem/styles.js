import { Dimensions } from 'react-native';
import { moderateScale } from '../../../utils/scaling';
import { colors } from '../../../utils/colors';
import { fontStyles } from '../../../utils/fontStyles';

const { height, width } = Dimensions.get('window');
/* StyleSheet
============================================================================= */
export default {
    cardContainer: {
        width: width * 0.45,
        height: height * 0.3,
        backgroundColor: 'white',
        marginTop: moderateScale(10),
        marginBottom: moderateScale(10),
        borderRadius: moderateScale(5),
    },
    cardTop: {
        width: '100%',
        height: '60%',
    },
    imgResponsive: {
        flex: 1,
        width: undefined,
        height: undefined,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderRadius: moderateScale(5),
    },
    textContainer: {
        height:'10%',
        justifyContent:'flex-end'
    },
    textStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(12),
        marginLeft: '5%',
    },
    botContainer: {
        flex:1,
        alignItems: 'center',
        flexDirection: 'row',
    },
    ratingContainer: {
        width: '60%',
        height: '40%',
        alignItems: 'flex-end',
        flexDirection: 'row',
    },
    ratingStyle: {
        marginLeft: '8%',
    },
    ratingNumber: {
        marginBottom:'-10%',
        marginLeft:'3%',
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(10),
    },
    priceContainer: {
        marginTop:'5%',
        width: '40%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    priceStyle: {
        marginTop: moderateScale(4),
        fontSize: moderateScale(14),
        fontFamily: fontStyles.PoppinsRegular,
        color: colors.textBlueColor,
    },
};
