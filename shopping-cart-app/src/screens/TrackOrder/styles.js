import { Dimensions } from 'react-native';
import { verticalScale, scale } from '../../utils/scaling';
import { colors } from '../../utils/colors';
import { fontStyles } from '../../utils/fontStyles';

const { height, width } = Dimensions.get('window');

export default {
    flex: {
        flex: 1,
    },
    headerContainer: {
        width: '100%',
        height: '8%',
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    headerContainerText: {
        marginBottom: '1%',
        marginLeft: '5%',
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(18),
    },
    line: {
        width: '100%',
        height: verticalScale(1),
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
        width: verticalScale(30),
        height: verticalScale(30),
    },
    profileTitlStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        color: '#4A4A4A',
        fontSize: verticalScale(12),
    },
    profileSubTitleStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(14),
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
        width: verticalScale(4),
        height: verticalScale(4),
        marginLeft: verticalScale(1),
        borderRadius: verticalScale(2),
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
        borderRadius: verticalScale(8),
        borderTopLeftRadius: verticalScale(8),
        borderBottomLeftRadius: verticalScale(8),
    },
    cardLeftContainer: {
        width: '35%',
        height: '100%',
        borderTopLeftRadius: verticalScale(8),
        borderBottomLeftRadius: verticalScale(8),
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
        borderTopLeftRadius: verticalScale(8),
        borderBottomLeftRadius: verticalScale(8),
    },
    marginTop5: {
        marginTop: '5%',
    },
    timelineContainer: {
        backgroundColor: colors.backgroudGray,
        paddingTop: verticalScale(10),
        flex: 1,
    },
};