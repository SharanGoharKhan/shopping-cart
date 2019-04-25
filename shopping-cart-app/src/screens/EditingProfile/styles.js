import { Dimensions } from 'react-native';
import { moderateScale } from '../../utils/scaling';
import { colors } from '../../utils/colors';
import { fontStyles } from '../../utils/fontStyles';

const { height, width } = Dimensions.get('window');
/* StyleSheet
============================================================================= */
export default {
    flex: {
        flex: 1,
    },
    headerContainer: {
        width: '100%',
        height: '10%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        borderColor: colors.grayLinesColor,
        borderWidth: moderateScale(1),
    },
    headerContainerText: {
        marginBottom: '1%',
        marginLeft: '5%',
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(18),
    },
    backImg: {
        marginBottom:'3%',
        marginLeft:'5%'
    },
    formMainContainer: {
        flex: 1,
        backgroundColor: colors.backgroudGray,
        alignItems: 'center',
    },
    formContainer: {
        marginTop: '15%',
        width: '90%',
        height: '80%',
        backgroundColor: colors.whiteColor,
        borderRadius: moderateScale(8),
        alignItems: 'center',
        position: 'relative',
    },
    profileImageContainer: {
        width: moderateScale(80),
        height: moderateScale(80),
        position: 'absolute',
        alignSelf: 'center',
        backgroundColor: colors.whiteColor,
        borderRadius: moderateScale(40),
        top: moderateScale(-40),
        borderWidth: moderateScale(3),
        borderColor: '#DDDDDD',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgResponsive: {
        width: '60%',
        height: '60%',
    },
    formContentContainer: {
        marginTop: '15%',
        width: '95%',
        height: '80%',
    },
    twoItemsContainer: {
        width: '100%',
        height: '20%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    halfContainer: {
        width: '45%',
        height: '80%',
    },
    labelContainer: {
        width: '100%',
        height: '40%',
    },
    inputContainer: {
        width: '100%',
        height: '60%',
        borderRadius: moderateScale(3),
        backgroundColor: colors.backgroudGray,
    },
    label: {
        fontFamily: fontStyles.PoppinsRegular,
        color: colors.darkGrayText,
        fontSize: moderateScale(14),
    },
    oneItemContainer: {
        width: '100%',
        height: '20%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    fullContainer: {
        width: '95%',
        height: '80%',
    },
    addContainer: {
        width: width*.9,
        height: height * 0.15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addBtn: {
        width: '80%',
        height: '45%',
        backgroundColor: colors.brownColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: moderateScale(4),
    },
    addStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        color: colors.whiteColor,
    },
    
};
