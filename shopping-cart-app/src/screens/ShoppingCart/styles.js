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
        width: '95%',
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
        alignItems: 'center',
    },
    main_top: {
        height: '70%',
        width: '95%',
    },
    main_bot: {
        height: '30%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: colors.backgroudGray,
        borderRadius: moderateScale(5),
    },
    subtotal_container: {
        width: '90%',
        borderBottomWidth: moderateScale(1),
        borderBottomColor: colors.grayLinesColor,
        paddingBottom: moderateScale(5),
    },
    row: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(12.5),
    },
    text_bold: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(13),
    },
    text_blue: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(13),
        color: colors.textBlueColor,
    },
    total_container: {
        width: '90%',
    },
    submit_container: {
        width: '90%',
    },

    // footer
    footer: {
        height: '12%',
        width: '120%',
        alignSelf: 'center',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

};
