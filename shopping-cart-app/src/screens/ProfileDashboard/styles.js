import { StatusBar } from 'react-native';
import { moderateScale } from '../../utils/scaling';
import { colors } from '../../utils/colors';
import { fontStyles } from '../../utils/fontStyles';
import { Platform } from 'react-native'
/* StyleSheet
============================================================================= */
export default {
    flex: {
        flex: 1,
    },
    statusBarImage: {
        height: Platform.OS=='ios'? 20 : StatusBar.currentHeight,
        width: '100%',
    },
    tabContainer: {
        width: '90%',
        height: '8%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    tabStyleActive: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(14),
        color: colors.brownColor,
    },
    tabStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(14),
    },
};
