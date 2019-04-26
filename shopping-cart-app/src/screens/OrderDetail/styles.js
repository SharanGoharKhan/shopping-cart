import { Dimensions } from 'react-native';
import { moderateScale } from '../../utils/scaling';
import { colors } from '../../utils/colors';
import { fontStyles } from '../../utils/fontStyles';
import { StatusBar } from 'react-native'
const { height, width } = Dimensions.get('window');
/* StyleSheet
============================================================================= */
export default {
    flex: {
        flex: 1,
    },
    line: {
        width: '100%',
        height: moderateScale(1),
        backgroundColor: '#edeaea'
    },
    headerContainer: {
        marginTop: StatusBar.currentHeight,
        width: '100%',
        height: height * 0.06,
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    backImg: {
        marginBottom: '3%',
        marginLeft: '5%',
    },
    headerContainerText: {
        marginBottom: '1%',
        marginLeft: '5%',
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(18),
    },
    profileContainer: {
        height: height * 0.1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    profileContentContainer: {
        marginLeft: '5%',
        width: '30%',
        height: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    imgFixed: {
        width: moderateScale(40),
        height: moderateScale(40),
    },
    profileTitlStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        color: '#4A4A4A',
        fontSize: moderateScale(12),
    },
    profileSubTitleStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(14),
    },
    dotsContainer: {
        width: '30%',
        height: '80%',
        marginRight: '5%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    dot: {
        width: moderateScale(4),
        height: moderateScale(4),
        marginLeft: moderateScale(1),
        borderRadius: moderateScale(2),
        backgroundColor: colors.brownColor,
    },
    cardContainer: {
        backgroundColor: colors.backgroudGray,
        width: '100%',
        height: height * 0.2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        backgroundColor: colors.whiteColor,
        width: '90%',
        height: '80%',
        flexDirection: 'row',
        borderRadius: moderateScale(8),
        borderTopLeftRadius: moderateScale(8),
        borderBottomLeftRadius: moderateScale(8),
    },
    cardLeftContainer: {
        width: '35%',
        height: '100%',
        borderTopLeftRadius: moderateScale(8),
        borderBottomLeftRadius: moderateScale(8),
    },
    cardRightContainer: {
        marginLeft: '3%',
        width: '60%',
        height: '100%',
    },
    imgResponsive: {
        flex: 1,
        width: undefined,
        height: undefined,
        borderTopLeftRadius: moderateScale(8),
        borderBottomLeftRadius: moderateScale(8),
    },
    marginTop5: {
        marginTop: '5%',
    },
    productTitleStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(14),
    },
    productDescriptionStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(12),
        color: colors.greenColor,
    },
    amountContainer: {
        width: '100%',
        height: '30%',
        flexDirection: 'row',
        marginTop: '10%',
        justifyContent: 'space-between',
    },
    quantityContainer: {
        width: '40%',
        height: '100%',
        justifyContent: 'center',
    },
    priceContainer: {
        width: '40%',
        height: '100%',
        justifyContent: 'center',
    },
    deliverContainer: {
        width: '100%',
        height: height * 0.35,
        backgroundColor: colors.backgroudGray,
        justifyContent: 'center'
    },
    deliverSubContainer: {
        marginLeft: '5%',
        width: '50%',
        height: '90%',
    },
    titleStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(16),
        color: colors.brownColor,
    },
    contactStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(14),
        color: '#9B9B9B',
    },
    addressStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(14),
    },
    paymentContainer: {
        backgroundColor: colors.backgroudGray,
        width: '100%',
        height: height * 0.2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    paymentSubContainer: {
        width: '90%',
        height: '70%',
    },
    twoItems: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    totalContainer: {
        backgroundColor: colors.backgroudGray,
        width: '100%',
        height: height * 0.1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    totalSubContainer: {
        width: '90%',
        height: '50%',
        justifyContent: 'center'
    },
    trackOrderContainer: {
        width: '100%',
        height: height * 0.2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.backgroudGray,
    },
    trackOrderSubContainer: {
        width: '90%',
        height: '80%',
        backgroundColor: colors.whiteColor,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: moderateScale(4),
    },
    trackStyle: {
        width: '90%',
        height: '40%',
        backgroundColor: colors.lightBlueColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: moderateScale(4),
    },
    trackStyleText: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(16),
        color: colors.whiteColor,
    },
};
