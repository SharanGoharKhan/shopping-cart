import { Dimensions } from 'react-native';
import { verticalScale } from '../../utils/scaling';
import { colors } from '../../utils/colors';
import { fontStyles } from '../../utils/fontStyles';
const { height, width } = Dimensions.get('window');

export default {
    flex: {
        flex: 1,
    },
    headerContainer: {
        width: '100%',
        height: '10%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    headerSubContainer: {
        width: '95%',
        height: '50%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headerTextContainer: {
        width: '40%',
        height: '100%',
        justifyContent: 'center',
    },
    headerIconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '40%',
        height: '100%',
    },
    headerText: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(16),
    },
    backCnt: {
        width: '10%', 
        height: '100%',
        justifyContent:'center',
        alignItems:'center'
    },
    backImg: {
        width: '50%',
        height: '40%'
    },
    headerImg: {
        width: '20%',
        height: '40%',
    },
    marginLeft5: {
        marginLeft: '5%',
    },
    imgResponsive: {
        flex: 1,
        width: undefined,
        height: undefined,
    },
    caroselContainer: {
        width: '100%',
        height: height * 0.1,
        alignItems: 'center',
        backgroundColor: colors.whiteColor,
    },
    caroselSubContainer: {
        width: '80%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    caroselTitleContainer: {
        width: '70%',
        height: '100%',
        justifyContent: 'center',
    },
    caroselPriceContainer: {
        width: '30%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    caroselPriceSubContainer: {
        width: '80%',
        height: '35%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
    },
    mainScrollViewContainer: {
        backgroundColor: '#F8F8F8',
    },
    textStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(13),
    },
    priceColor: {
        color: colors.textBlueColor,
    },
    caroselMainImgCnt: {
        height: height * 0.3,
        width: '100%'
    },
    scrollViewStyle: {
        height: height * 0.08,
    },
    caroselItemsContainer: {
        flexDirection: 'row',
        width: '100%',
        height: height * 0.08,
    },
    caroselItems: {
        width: width * 0.15,
        height: height * 0.08,
        marginRight: width * 0.01,
        marginLeft: width * 0.01,
        marginTop: width * 0.01,
    },
    productsByContainer: {
        width: '100%',
        height: height * 0.15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    productsBySubContainer: {
        width: '80%',
        height: '90%',
        justifyContent: 'space-around',
    },
    productsText: {
        width: '100%',
        height: '20%',
    },
    productCardContainer: {
        width: '100%',
        height: '60%',
        borderRadius: verticalScale(8),
        backgroundColor: colors.whiteColor,
        alignItems: 'center',
        flexDirection: 'row',
    },
    productImgContainer: {
        marginLeft: '5%',
        width: verticalScale(40),
        height: verticalScale(40),
        borderRadius: verticalScale(15),
    },
    productTextContainer: {
        marginLeft: '5%',
        width: '60%',
        height: verticalScale(30),
        justifyContent: 'center',
    },
    dotContainer: {
        width: '10%',
        height: verticalScale(30),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dot: {
        width: verticalScale(4),
        height: verticalScale(4),
        marginRight: verticalScale(1),
        borderRadius: verticalScale(2),
        backgroundColor: colors.brownColor,
    },
    accordianContainer: {
        width,
        minHeight: height * 0.2,
        backgroundColor: '#F8F8F8',
        alignItems: 'center',
        paddingTop: verticalScale(13),
    },
    shoppingCartContainer: {
        height: height * 0.13,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    shoppingCartSubContainer: {
        width: '90%',
        height: '50%',
        backgroundColor: colors.textBlueColor,
        borderRadius: verticalScale(5),
        justifyContent: 'center',
        alignItems: 'center',
    },
    shoppingCartText: {
        fontFamily: fontStyles.PoppinsRegular,
        color: colors.whiteColor,
        fontSize: verticalScale(16),
    },
};
