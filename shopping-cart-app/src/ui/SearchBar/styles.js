import { moderateScale } from '../../utils/scaling'
import { colors } from '../../utils/colors'
import { fontStyles } from '../../utils/fontStyles';

export default {
    container:{
        backgroundColor: colors.backgroudGray,
        flexDirection: 'row', justifyContent: 'space-between', 
        alignItems:'center',
        width: '100%', height: moderateScale(32),
        borderRadius: moderateScale(5)
    },
    image:{
        height: moderateScale(17),
        width: moderateScale(17),
        marginRight: moderateScale(15)
    },
    textfield:{
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(13), paddingLeft: '3%',
        flex:1
    }
}