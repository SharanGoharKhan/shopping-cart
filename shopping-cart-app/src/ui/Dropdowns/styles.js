import { moderateScale } from '../../utils/scaling';
import { colors } from '../../utils/colors';
import { fontStyles } from '../../utils/fontStyles';

export default {
    main_container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(16),
        color: colors.brownColor,
        textDecorationStyle: 'dotted',
        textDecorationColor: colors.brownColor,
        marginRight: moderateScale(5),
    },
    image: {
        width: moderateScale(16),
        height: moderateScale(16),
    },
    animated_container: {
        backgroundColor: colors.secondaryWhiteColor,
        position: 'absolute',
        top: '100%',
        width: '100%',
        height: 70,
    },
    item_text: {
        fontSize: moderateScale(14),
        fontFamily: fontStyles.PoppinsRegular,
    },
};
