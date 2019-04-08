import { Dimensions } from 'react-native';
import { moderateScale } from '../../utils/scaling';
import { fontStyles } from '../../utils/fontStyles';

const { height, width } = Dimensions.get('window');
/* StyleSheet
============================================================================= */
export default {
    footerContainer: {
        width,
        height: height * 0.07,
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    footerBtnContainer: {
        width: '25%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgContainer: {
        width: '40%',
        height: '40%',
    },
    imgResponsive: {
        flex: 1,
        width: undefined,
        height: undefined,
    },
    profileContainer: {
        width: '40%',
        height: '40%',
        position: 'relative',
    },
    profileBadge: {
        width: moderateScale(8),
        height: moderateScale(8),
        position: 'absolute',
        right: 0,
        top: 0,
        backgroundColor: '#EE9826',
        borderRadius: moderateScale(4),
    },
    shoppingContainer: {
        width: '50%',
        height: '40%',
        position: 'relative',
    },
    shoppingBadgeContainer: {
        width: '40%',
        height: '50%',
        position: 'absolute',
        right: 0,
        top: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    shoppingBadgeStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        color: '#6178DE',
        fontSize: moderateScale(8),
    },

};
