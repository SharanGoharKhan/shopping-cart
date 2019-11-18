import { Dimensions } from 'react-native';
import { verticalScale } from '../../../utils/scaling';
import { colors } from '../../../utils/colors';
import { fontStyles } from '../../../utils/fontStyles';
const { height, width } = Dimensions.get('window');


export default {
    modalContainer: {
        backgroundColor: colors.whiteColor,
        borderRadius: verticalScale(8),
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    modalContent: {
        width: '90%',
    },
    titleContainer: {
        width: '100%',
        marginTop:'5%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: 20,
    },
    subtitleStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: 16,
        color: colors.darkGrayText,
        textAlign:'center'
    },
    avatarModal: {
        width: verticalScale(70),
        height: verticalScale(70),
        marginTop:'5%',
    },
    bottomButtonImg:{
        width: 20,
        height:20,
    },
    bottomContainer:{
        marginTop:'5%',
        alignItems:'center', 
        justifyContent:'center',
    },
    bottomButton:{
        marginTop:5,
        textAlign: 'center',

    },
    imgResponsive: {
        flex: 1,
        width: undefined,
        height: undefined,
    },
};