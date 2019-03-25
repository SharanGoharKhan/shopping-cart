import { moderateScale } from '../../utils/scaling'
import { colors } from '../../utils/colors'
import { fontStyles } from '../../utils/fontStyles';

const mainBtnStyles = {
    backgroundColor:{
        backgroundColor: colors.brownColor,  height: moderateScale(50),
        borderRadius: moderateScale(3)
    },
    main_brown_btn:{
        alignItems:'center', justifyContent: 'center',
        width: '100%', height: '100%',
    },
    bb_text:{
        color: colors.secondaryWhiteColor,
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(16)
    }
}

const facebookStyles = {

}

const googleStyles = {

}
export {mainBtnStyles, facebookStyles, googleStyles}