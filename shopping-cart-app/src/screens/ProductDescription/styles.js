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
        width: '60%',
        height: '100%',
        justifyContent: 'center'
    },
    headerIconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'flex-end',
        width: '40%',
        height: '100%'
    },
    headerText: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(16)
    },
    headerImg: {
        width: '20%',
        height: '40%'
    },
    marginLeft5: {
        marginLeft: '5%'
    },
    imgResponsive: {
        flex: 1,
        width: undefined,
        height: undefined
    },
    caroselContainer: {
        width: '100%',
        height: '10%',
        alignItems: 'center'
    },
    caroselSubContainer: {
        width: '80%',
        height: '100%',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    caroselTitleContainer: {
        width: '70%',
        height: '100%',
        justifyContent: 'center'
    },
    caroselPriceContainer: {
        width: '30%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    caroselPriceSubContainer: {
        width: '80%',
        height: '35%',
        marginTop: moderateScale(20),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5'
    },
    textStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(13)
    },
    priceColor: {
        color: colors.textBlueColor
    },
    caroselMainImgCnt: {
        height: height*.3,
        width: '100%',
        backgroundColor: 'blue'
    },
    caroselItemsContainer: {
        flexDirection: 'row', 
        width: '100%', 
        height: height*.08
    },
    caroselItems: {
        width: width*.2,
        height: height*.08,
        marginRight: width*.01,
        marginLeft: width*.01,
        marginTop: width*.01
    }
}