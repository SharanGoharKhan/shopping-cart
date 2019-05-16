import { StatusBar } from 'react-native';
import { verticalScale } from '../../utils/scaling';
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
        width: '90%',
        alignSelf: 'center',
    },
    main_scroller: {
        marginBottom: verticalScale(10),
    },
    // header
    header: {
        height: '8%',
        width: '100%',
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
    },
    header_text: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(16),
        paddingLeft: verticalScale(8),
    },

    // main
    main: {
        height: '80%',
        width: '100%',
        alignItems: 'center',
    },
    simpleRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    main_top: {
        height: '70%',
        width: '100%',
    },
    orders: {
        height: '32%',
        width: '100%',
        borderBottomWidth: verticalScale(1),
        borderColor: colors.grayLinesColor,
        borderStyle: 'dashed',
    },
    items: {
        height: verticalScale(50),
        width: '100%',
        paddingTop: verticalScale(3),
    },
    itemBoldText: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(13),
        fontWeight: '500',
    },
    itemBlueText: {
        color: colors.textBlueColor,
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(13),
        fontWeight: '500',
    },

    goldenText: {
        color: colors.brownColor,
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(13),
    },
    addressSmallText: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(11),
        color: colors.fontGreyColor,
    },
    addressBoldText: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(11),
        fontWeight: '500',
    },
    deliveryDate: {
        paddingTop: verticalScale(5),
        color: colors.textBlueColor,
        fontSize: verticalScale(11),
        fontFamily: fontStyles.PoppinsRegular,
        paddingLeft: verticalScale(5),
    },
    padding: {
        paddingTop: verticalScale(6),
        paddingBottom: verticalScale(2),
    },
    address: {
        height: '60%',
        width: '100%',
        paddingTop: verticalScale(10),
    },
    addressDetail: {
        paddingTop: verticalScale(5),
    },
    borderBottom: {
        borderBottomWidth: verticalScale(1),
        borderColor: colors.grayLinesColor,
        borderStyle: 'dashed',
        paddingBottom: verticalScale(15),
    },
    main_bot: {
        marginTop:verticalScale(-55),
        height: verticalScale(200),
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: colors.backgroudGray,
        borderRadius: verticalScale(5),
    },
    subtotal_container: {
        width: '90%',
        borderBottomWidth: verticalScale(1),
        borderBottomColor: colors.grayLinesColor,
        paddingBottom: verticalScale(5),
    },
    listItem: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: verticalScale(3),
    },
    row: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(12.5),
    },
    text_bold: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(13),
        fontWeight: '500',
    },
    text_blue: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(13),
        fontWeight: '500',
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
        height: '100%',
        width: '120%',
        alignSelf: 'center',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
};
