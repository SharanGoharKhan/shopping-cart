import { StatusBar } from 'react-native';
import { verticalScale } from '../../utils/scaling';
import { colors } from '../../utils/colors';
import { fontStyles } from '../../utils/fontStyles';

export default {
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
        height: '93%',
        width: '90%',
        alignSelf: 'center',
    },

    // Header
    header: {
        justifyContent: 'space-evenly',
        height: '20%',
    },
    header_text: {
        paddingLeft: '5%',
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(16),
    },
    header_btn: {

    },

    // main
    main: {
        backgroundColor: colors.backgroudGray,
        height: '80%',
        width: '100%',
        borderRadius: verticalScale(5),
    },
    body_container_background: {
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },

    main_top: {
        height: '20%',
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    h1_text: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(17.5),
        fontWeight: '500',
        letterSpacing: verticalScale(0.5),
        marginTop: '5%',
    },
    h2_text: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(12),
    },
    main_mid: {
        height: '55%',
        width: '90%',
    },
    main_bot: {
        height: '25%',
        width: '90%',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    bot_btn_container: {
        width: '100%',
    },
    mixed_line: {
        flexDirection: 'row',
    },
    ft_text: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(10),
    },
    ft_text_underline: {
        textDecorationLine: 'underline',
    },

};
