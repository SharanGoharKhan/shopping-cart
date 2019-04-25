import { Dimensions } from 'react-native';
import { moderateScale } from '../../../utils/scaling';
import { fontStyles } from '../../../utils/fontStyles';

const { height, width } = Dimensions.get('window');

/* StyleSheet
============================================================================= */
export default {
    popularItemsContainer: {
        width: '95%',
        height: height * 0.3,
        alignSelf: 'flex-end',
    },
    popularItemsContainerText: {
        width: '100%',
        height: '15%',
        justifyContent: 'center',
    },
    popularItemsContainerTextStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(16),
    },
    scrollViewContainer: {
        width: '100%',
        height: '85%',
        flexDirection: 'row',
    },
    cardContainer: {
        width: width * 0.40,
        height: height * 0.25,
        marginRight: moderateScale(20),
        flexDirection: 'column',
        borderRadius: moderateScale(5),
        borderColor: 'white',
        borderWidth: moderateScale(3),
    },
    topCardContainer: {
        width: '100%',
        height: '70%',
    },
    cardImageContainer: {
        width: '100%',
        height: '100%',
        position: 'relative',
    },
    imgResponsive: {
        flex: 1,
        width: undefined,
        height: undefined,
    },
    imgTextContainer: {
        width: '30%',
        height: '15%',
        position: 'absolute',
        top: '8%',
        left: '8%',
        backgroundColor: '#BD10E0',
        borderRadius: moderateScale(3),
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgTextStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        color: 'white',
        fontSize: moderateScale(10),
    },
    botCardContainer: {
        width: '100%',
        height: '30%',
        backgroundColor: 'white',
    },
    botSubCardContainer: {
        width: '90%',
        height: '100%',
        flexDirection: 'column',
        marginLeft: '5%',
        marginTop: '3%',
    },
    botCardTextStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(10),
        lineHeight: moderateScale(11),
    },
    botIconContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    botPriceContainer: {
        width: '60%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    botPriceStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        color: '#6178DE',
    },
    botIconCartContainer: {
        width: '40%',
        height: '100%',
        marginTop:'3%',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
    },
    botIconCartSubContainer: {
        width: '50%',
        height: '50%',
    },
};
