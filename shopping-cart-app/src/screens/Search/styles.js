import { StatusBar } from 'react-native';
import { moderateScale } from '../../utils/scaling';
import { colors } from '../../utils/colors';
import { fontStyles } from '../../utils/fontStyles';

/* StyleSheet
============================================================================= */
export default {
    flex: {
        flex: 1,
    },
    container: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
    },
    statusbarImage: {
        height: StatusBar.currentHeight,
        backgroundColor: 'black',
    },
    body: {
        marginTop: StatusBar.currentHeight,
        height: '95%',
        width: '100%',
        alignSelf: 'center',
    },
    main_scroller: {
        marginBottom: moderateScale(10),
    },

    // header
    header: {
        height: '10%',
        width: '95%',
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
    },
    header_text: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(16),
        paddingLeft: moderateScale(8),
    },
    // main
    main: {
        height: '80%',
        width: '100%',
        marginLeft: 0,
        justifyContent: 'center',
        alignItems: 'center',

    },
    searchBarContainer: {
        height: '10%',
        width: '93%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainBodyContainer: {
        height: '90%',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: colors.backgroudGray,
    },
    mainBody: {
        marginTop: '5%',
        width: '95%',
    },
    mixed_text: {
        flexDirection: 'row',
        justifyContent:'center',
        marginBottom: moderateScale(20),
    },
    text: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(12),
    },
    colored_text: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(12),
        color: colors.brownColor,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: moderateScale(15),
    },
    // footer
    footer: {
        backgroundColor: colors.backgroudGray,
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

};
