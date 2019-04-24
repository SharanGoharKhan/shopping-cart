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
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    headerContainerText: {
        marginBottom: '1%',
        marginLeft: '5%',
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(18),
    },
    line: {
        width: '100%',
        height: moderateScale(1),
        backgroundColor: colors.grayLinesColor
    },
    backImg: {
        marginBottom: '3%',
        marginLeft: '5%',
    },
    profileContainer: {
        height: height * 0.1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    profileContentContainer: {
        marginLeft: '5%',
        width: '30%',
        height: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    imgFixed: {
        width: moderateScale(40),
        height: moderateScale(40),
    },
    profileTitlStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        color: '#4A4A4A',
        fontSize: moderateScale(12),
    },
    profileSubTitleStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(14),
    },
    dotsContainer: {
        width: '30%',
        height: '80%',
        marginRight: '5%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    dot: {
        width: moderateScale(4),
        height: moderateScale(4),
        marginLeft: moderateScale(1),
        borderRadius: moderateScale(2),
        backgroundColor: colors.brownColor,
    },
    cardContainer: {
        backgroundColor: colors.backgroudGray,
        width: '100%',
        height: height * 0.2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        backgroundColor: colors.whiteColor,
        width: '90%',
        height: '80%',
        flexDirection: 'row',
        borderRadius: moderateScale(8),
        borderTopLeftRadius: moderateScale(8),
        borderBottomLeftRadius: moderateScale(8),
    },
    cardLeftContainer: {
        width: '35%',
        height: '100%',
        borderTopLeftRadius: moderateScale(8),
        borderBottomLeftRadius: moderateScale(8),
    },
    cardRightContainer: {
        marginLeft: '3%',
        width: '60%',
        height: '100%',
    },
    imgResponsive: {
        flex: 1,
        width: undefined,
        height: undefined,
        borderTopLeftRadius: moderateScale(8),
        borderBottomLeftRadius: moderateScale(8),
    },
    marginTop5: {
        marginTop: '5%',
    },
    timelineContainer: {
        backgroundColor: colors.backgroudGray,
        paddingTop: moderateScale(10),
        flex: 1,
    },
};
