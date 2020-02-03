import { verticalScale } from '../../utils/scaling';
import { colors } from '../../utils/colors';
import { fontStyles } from '../../utils/fontStyles';

export default {
    container: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
    },
    body: {
        // adjust body height in order to accomodate footer
        height: '80%',
        width: '100%',
        alignItems: 'center',
        backgroundColor: colors.backgroudGray,

    },
    // header
    header: {
        height: '8%',
        width: '100%',
        backgroundColor: colors.whiteColor,
        borderBottomWidth: verticalScale(1),
        borderColor: colors.grayLinesColor,
        alignItems: 'center',
    },
    headerRow: {
        height: '100%',
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerText: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(16),
        color: colors.blackText,
    },
    headerBtn: {
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    headerBtnText: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(11),
        color: colors.greenTextColor,
    },
    // main
    main: {
        height: '80%',
        width: '95%',
        paddingTop: verticalScale(10),
    },
    mainScroll: {
        height: '100%',
        width: '100%',
    },
    // footer
    footer: {
        height: '10%',
        width: '100%',
        justifyContent: 'center',
    },
};