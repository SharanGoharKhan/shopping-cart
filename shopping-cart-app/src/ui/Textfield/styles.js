import { moderateScale } from '../../utils/scaling'
import { colors } from '../../utils/colors'
import { fontStyles } from '../../utils/fontStyles';

export default {
    input_view:{
        backgroundColor: colors.secondaryWhiteColor,
        borderRadius:3, height: moderateScale(38), justifyContent:'center',
        borderWidth:1, borderColor: colors.greyLinesColor
    },
    input:{
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(13), paddingLeft: '3%'
    }
}