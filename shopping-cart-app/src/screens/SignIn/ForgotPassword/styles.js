import { Dimensions } from 'react-native';
import { verticalScale } from '../../../utils/scaling';
import { colors } from '../../../utils/colors';
import { fontStyles } from '../../../utils/fontStyles';
const { height, width } = Dimensions.get('window');

export default {
    modalContainer: {
        height: height * 0.3,
        backgroundColor: colors.whiteColor,
        borderRadius: verticalScale(8),
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: '90%',
        height: '80%',
    },
    titleContainer: {
        width: '100%',
        height: '15%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(16),
    },
    subtitleStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(12),
        color: colors.darkGrayText,
    },
    inputContainer: {
        width: '100%',
        height: '25%',
        marginTop: '5%',
        borderRadius: verticalScale(3),
        backgroundColor: colors.backgroudGray,
        justifyContent: 'center',
        alignItems: 'center',
    },
    brownColor: {
        backgroundColor: colors.brownColor,
    },
    sendStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(16),
        color: colors.whiteColor,
    },

};
