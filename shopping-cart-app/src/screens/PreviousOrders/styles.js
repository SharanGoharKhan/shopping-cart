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
        height: height * 0.1,
        justifyContent: 'flex-end',
        borderColor: '#707070',
        borderWidth: moderateScale(1),
    },
    headerContainerText: {
        marginBottom: '1%',
        marginLeft: '5%',
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(18),
    },
    dateContainer: {
        height: height * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollViewContainer: {
        flex: 1,
    },
    mainCardContainer: {
        paddingTop: moderateScale(10),
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
    },
    lineContainer: {
        height: moderateScale(20),
        justifyContent: 'center',
    },
    lineSubContainer: {
        width: '100%',
        height: 1,
        backgroundColor: '#D8D8D8',
    },
    cardContainer: {
        width: '90%',
        backgroundColor: colors.whiteColor,
        height: height * 0.14,
        marginBottom: moderateScale(4),
        marginTop: moderateScale(4),
        borderRadius: moderateScale(8),
        flexDirection: 'row',
        borderWidth: moderateScale(1),
        borderColor: '#EEEEEE',
    },
    leftContainer: {
        width: '40%',
        height: '100%',
    },
    imgResponsive: {
        flex: 1,
        width: undefined,
        height: undefined,
    },
    roundedBorder: {
        borderRadius: moderateScale(8),
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
    },
    rightContainer: {
        marginLeft: '5%',
        width: '55%',
        height: '100%',
        justifyContent: 'center',
    },
    subRightContainer: {
        width: '95%',
        height: '90%',
    },
    titleContainer: {
        width: '100%',
        height: '30%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    titleStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(14),
    },
    rightArrowContainer: {
        width: '6%',
        height: '60%',
    },
    subTitleContainer: {
        width: '100%',
        height: '20%',
    },
    subTtitleStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(12),
        color: '#9B9B9B',
    },
    actionsContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    subActionsContainer: {
        width: '100%',
        height: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    statusStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(12),
        color: colors.blueColor,
    },
    actionContainer: {
        width: '40%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '5%',
        borderRadius: moderateScale(4),
        backgroundColor: colors.textBlueColor,
    },
    actionStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(12),
        color: colors.whiteColor,
    },
};
