import { moderateScale } from '../../../utils/scaling'
import { fontStyles } from '../../../utils/fontStyles'
import { Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window')

/* StyleSheet
============================================================================= */
export default {
    flex: {
        flex: 1
    },
    profileContainer: {
        width: '100%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    profileSubContainer: {
        width: '90%',
        height: '90%'
    },
    topProfileContent: {
        width: '100%',
        height: '10%',
        marginBottom:'2%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    topProfileIconContainer: {
        width: '10%',
        height: '50%'
    },
    topProfileTextContainer: {
        width: '50%',
        height: '70%',
        marginLeft: '2%',
        justifyContent: 'center'
    },
    topProfileTextStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(16)
    },
    imgResponsive: {
        flex: 1,
        width: undefined,
        height: undefined
    },
    imgResponsive3: {
        flex: 1,
        width: undefined,
        height: undefined,
        backgroundColor: '#F7F7F7'
    },
    profieCenterContainer: {
        width: '100%',
        height: '90%',
        borderRadius: moderateScale(8)
    },
    profileCenterContainerTop: {
        width: '100%',
        height: '15%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    signOutContainer: {
        width: '8%',
        height: '60%',
        marginLeft: '5%'
    },
    editContainer: {
        width: '8%',
        height: '60%',
        marginRight: '5%'
    },
    profileImageContainer: {
        width: '100%',
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    profileImage: {
        width: width*.24,
        height: height*.12,
        borderRadius: width*.12,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: moderateScale(3),
        borderColor: '#DDDDDD'
    },
    imgResponsive2: {
        width: '70%',
        height: '70%'
    },
    nameContainer: {
        width: '100%',
        height: '10%',
        alignItems: 'center'
    },
    nameStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(16)
    },
    placeContainer: {
        width: '100%',
        height: '8%',
        alignItems: 'center' 
    },
    placeStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(12) 
    },
    addressContainer: {
        flex:1,
        alignItems: 'center',
        marginBottom: '3%',
        justifyContent: 'flex-end'
    },
    addressIcon: {
        width: '15%',
        height: '50%'
    }
}