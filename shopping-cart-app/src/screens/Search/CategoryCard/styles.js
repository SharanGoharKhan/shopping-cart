import { moderateScale } from '../../../utils/scaling';
import { colors } from '../../../utils/colors';
import { fontStyles } from '../../../utils/fontStyles';

export default {
    container: {
        backgroundColor: colors.secondaryWhiteColor,
        height: moderateScale(60),
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: moderateScale(5),
    },
    text: {
        fontSize: moderateScale(16),
        fontFamily: fontStyles.PoppinsRegular,
        color: colors.fontBlackColor,
    },
};
