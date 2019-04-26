import { Dimensions } from 'react-native';
import { moderateScale } from '../../utils/scaling';
import { colors } from '../../utils/colors';
import { fontStyles } from '../../utils/fontStyles';

const { height, width } = Dimensions.get('window');
/* StyleSheet
============================================================================= */
export default {
    flex: {
        flex: 1,
    },
    scrollViewStyle: {
        backgroundColor: colors.backgroudGray,
    },
    caroselContainer: {
        width: '100%',
        height: height * 0.3,
        position: 'relative',
    },
    menuDrawerContainer: {
        width: moderateScale(20),
        height: moderateScale(18),
        position: 'absolute',
        top: '15%',
        left: '10%',
    },
    imgResponsive: {
        flex: 1,
        width: undefined,
        height: undefined,
    },
    searchContainer: {
        width: width * 0.9,
        height: height * 0.06,
        backgroundColor: '#fff',
        alignSelf: 'center',
        position: 'absolute',
        bottom: moderateScale(-20),
        borderRadius: moderateScale(5),
        flexDirection: 'row',
    },
    searchTextContainer: {
        width: '80%',
        height: '100%',
        justifyContent: 'center',
    },
    searchTextStyle: {
        fontSize: moderateScale(15),
        marginLeft: '5%',
        fontFamily: fontStyles.PoppinsRegular,
    },
    searchIconContainer: {
        width: '20%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchIconBtnContainer: {
        width: '50%',
        height: '50%',
    },

};
