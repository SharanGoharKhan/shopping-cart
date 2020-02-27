import { verticalScale } from '../../utils/scaling';
import { colors } from '../../utils/colors';
import { fontStyles } from '../../utils/fontStyles';

export default {
    container: {
        flex: 1,
    },
    profileContainer: {
        width: '100%',
        height: '30%',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileSubContainer: {
        width: '60%',
        height: '70%',
        marginTop: '15%',
        backgroundColor: '#F7F7F7',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: verticalScale(5),
    },
    profileImage: {
        width: verticalScale(60),
        height: verticalScale(60),
        borderRadius: verticalScale(30),
        borderWidth: verticalScale(2),
        borderColor: '#DDDDDD',
        backgroundColor: 'white',
        justifyContent:'center',
        alignItems: 'center'
    },
    imgResponsive3: {
        width: '50%',
        height: '50%',
    },
    imgResponsive: {
        flex: 1,
        width: undefined,
        height: undefined
    },
    profileTitle: {
        width: '100%',
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileTitleStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(14),
    },
    profilePlace: {
        width: '100%',
        height: '10%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profilePlaceStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(12),
    },
    middleContainer: {
        width: '100%',
        height: '60%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    middleSubContainer: {
        width: '60%',
        height: '80%',
    },
    navItemContainer: {
        width: '100%',
        height: '10%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    navItemStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(16),
    },
    navItemContainerImage: {
        width: '100%',
        height: '8%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    navItemImg: {
        height: '100%',
        width: '25%',
    },
    bottomContainer: {
        width: '100%',
        height: '10%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomSubContainer: {
        width: '80%',
        height: '80%',
        alignItems: 'center',
        flexDirection: 'row',
    },
    signoutContainerImg: {
        width: '15%',
        height: '50%',
    },
    signoutContainerText: {
        width: '65%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    signoutContainerStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(16),
        color: colors.pinkColor,
    },
};