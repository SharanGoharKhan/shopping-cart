import { StatusBar, Dimensions } from 'react-native';
import { moderateScale } from '../../utils/scaling';
import { colors } from '../../utils/colors';
import { fontStyles } from '../../utils/fontStyles';

const { width, height } = Dimensions.get('window');

/* StyleSheet
============================================================================= */
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
        width: '90%',
        alignSelf: 'center',
    },
    main_scroller: {
        marginBottom: moderateScale(10),
    },
    // header
    header: {
        height: '10%',
        width: '100%',
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
    simpleRow: {
        flexDirection: 'row',
    },
    mainTop: {
        height: '65%',
        width: '100%',
    },
    mainTopHeadline: {
        height: '10%',
        justifyContent: 'center',
    },
    headlineText: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(13),
    },
    cardContainer: {
        width: width * 0.90,
        height: '65%',
    },
    card: {
        width: width * 0.90,
    },
    manualBtnContainer: {
        height: '25%',
        width: '95%',
        alignSelf: 'center',
    },
    manBtnContText: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(11),
    },
    paginationItem: {
        marginLeft: 0,
        marginRight: moderateScale(3),
        height: moderateScale(7),
        width: moderateScale(8),
    },
    mainBot: {
        height: '30%',
        width: '100%',
    },
    mainBot: {
        height: '35%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: colors.backgroudGray,
        borderRadius: moderateScale(5),
    },
    subtotalContainer: {
        width: '90%',
        borderBottomWidth: moderateScale(1),
        borderBottomColor: colors.grayLinesColor,
        paddingBottom: moderateScale(5),
    },
    cvvContainer: {
        backgroundColor: colors.whiteColor,
        borderWidth: moderateScale(1),
        borderRadius: moderateScale(3),
        borderColor: colors.grayLinesColor,
        height: moderateScale(25),
        width: moderateScale(45),
        justifyContent: 'center',
        alignItems: 'center',

    },
    cvvInput: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(12),
        width: '60%',
    },
    listItem: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: moderateScale(3),
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
    textBold: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(13),
        fontWeight: '500',
    },
    textBlue: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(13),
        fontWeight: '500',
        color: colors.textBlueColor,
    },
    totalContainer: {
        width: '90%',
    },
    submitContainer: {
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
