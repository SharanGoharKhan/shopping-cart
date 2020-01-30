import { fontStyles } from '../../utils/fontStyles';
import { scale } from '../../utils/scaling';
import { colors } from '../../utils/colors';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window')

export default {
    container: {
        width: width,
        height: height * .07,
        backgroundColor: colors.whiteColor,
        justifyContent: 'center',
        alignItems: 'center'
    },
    subContainer: {
        width: '90%',
        height: '80%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerText: {
        flex: 1,
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: scale(18),
        marginLeft: scale(20),
    },
    titleContainer: {
        flexDirection: 'row', 
        width: '70%'
    },
    iconStyle: {
        width: scale(20),
        height: scale(20)
    },
    rightTitle: {
        fontFamily: fontStyles.PoppinsRegular, 
        fontSize: scale(14)
    },
}