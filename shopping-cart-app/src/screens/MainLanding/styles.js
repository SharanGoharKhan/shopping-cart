import { Dimensions } from 'react-native';
import { verticalScale } from '../../utils/scaling';
import { colors } from '../../utils/colors';
import { fontStyles } from '../../utils/fontStyles';
const { height, width } = Dimensions.get('window');

export default {
    flex: {
        flex: 1,
    },
    scrollViewStyle: {
        marginTop: verticalScale(20),
        backgroundColor: colors.backgroudGray,
    },
    grayBackground: {
        backgroundColor: colors.backgroudGray,
        flex: 1
    },
    caroselContainer: {
        width: '100%',
        height: height * 0.3,
        position: 'relative',
    },
    menuDrawerContainer: {
        width: verticalScale(20),
        height: verticalScale(18),
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
        bottom: verticalScale(-20),
        borderRadius: verticalScale(5),
        flexDirection: 'row',
    },
    searchTextContainer: {
        width: '80%',
        height: '100%',
        justifyContent: 'center',
    },
    searchTextStyle: {
        fontSize: verticalScale(15),
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
