import { StatusBar } from 'react-native';
import { moderateScale } from '../../utils/scaling';
import { colors } from '../../utils/colors';
import { fontStyles } from '../../utils/fontStyles';

export default {
    flex: {
        flex: 1
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
        justifyContent: 'space-between',
    },
    header_text: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(16),
        paddingLeft: moderateScale(8),
    },
    headerLeft: {
        flexDirection: 'row',

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
        alignItems: 'center',
        backgroundColor: colors.backgroudGray,

    },
    mainBody: {
        width: '93%',
        height: '93%',
    },
    mixed_text: {
        height: '7%',
        width: '100%',
        paddingTop: moderateScale(5),
        flexDirection: 'row',
    },
    text: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(14),
        paddingRight: moderateScale(4),
    },
    bold: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(14),
        fontWeight: '500',
        paddingRight: moderateScale(4),

    },
    main_scroller: {
        height: '93%',
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
