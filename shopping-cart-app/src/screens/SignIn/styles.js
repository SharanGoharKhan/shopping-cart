import { StatusBar } from 'react-native';
import { verticalScale, scale } from '../../utils/scaling';
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
        marginTop: StatusBar.currentHeight,
        height: '95%',
        width: '95%',
        alignSelf: 'center',
    },
    body_header: {
        height: '8%',
        width: '90%',
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
    },
    header_text: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(16),
        paddingLeft: verticalScale(8),
    },
    body_container: {
        width: '90%',
        height: '63%',
        alignSelf: 'center',
        backgroundColor: colors.greyLinesColor,
        borderRadius: verticalScale(5),
    },
    body_container_background: {
        backgroundColor: colors.backgroudGray,
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    body_footer: {
        width: '90%',
        height: '25%',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    footer: {
        height: '55%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderRadius: verticalScale(5),
        paddingLeft: verticalScale(15),
        backgroundColor: '#fcead9',
    },
    bc_h1: {
        fontSize: verticalScale(22),
        fontFamily: fontStyles.PoppinsRegular,
    },
    bc_h2: {
        fontSize: verticalScale(12),
        fontFamily: fontStyles.PoppinsRegular,
        lineHeight: verticalScale(13),
    },
    bc_texts: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '30%',
    },
    bc_main: {
        height: '45%',
        width: '90%',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    bc_inputs: {
        width: '90%',
    },
    bc_input_view: {
        backgroundColor: colors.secondaryWhiteColor,
        borderRadius: 3,
        height: verticalScale(38),
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: colors.greyLinesColor,
    },
    bc_input: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(13),
        paddingLeft: '3%',
    },
    bc_loginBtns: {
        width: '90%',
    },
    main_brown_btn: {
        backgroundColor: '#D0AD8A',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%',
        height: verticalScale(50),
        borderRadius: 5,
    },
    bb_text: {
        color: colors.secondaryWhiteColor,
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(16),
    },
    passwordText: {
        color: '#DC4E41',
    },
    bc_socialBtns: {
        flexDirection: 'row',
        width: '90%',
        height: '25%',
        alignItems: 'center',
    },
    socialBtns_View: {
        width: '50%',
    },
    socialBtn: {
        flexDirection: 'row',
        height: verticalScale(50),
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    google_btn: {
        height: verticalScale(50),
        borderWidth: 0,
        borderRightWidth: 0,
        borderRadius: 3,
        borderColor: 'orange',
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        backgroundColor: '#DC4E41',
    },
    facebook_btn: {
        height: verticalScale(50),
        borderWidth: 0,
        borderLeftWidth: 0,
        borderRadius: 3,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,

        backgroundColor: '#3B5998',
    },
    fb_text: {
        color: colors.secondaryWhiteColor,
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(16),
        paddingLeft: verticalScale(5),
    },
    mixed_line: {
        flexDirection: 'row',
    },
    bold_text: {
        fontFamily: fontStyles.PoppinsRegular,
        fontWeight: '500',
        fontSize: verticalScale(10),
    },
    ft_text: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: scale(10),
    },
    ft_underline: {
        textDecorationLine: 'underline',
    },


};
