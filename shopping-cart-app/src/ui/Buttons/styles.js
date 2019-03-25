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
    btn_text:{
        color: colors.secondaryWhiteColor,
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(16)
    }
}

const alternateBtn ={
    backgroundColor:{
        backgroundColor: colors.secondaryWhiteColor,  height: moderateScale(50),
        borderRadius: moderateScale(3), borderWidth: moderateScale(1),borderColor: colors.primaryBlackColor
    },
    main_alt_btn:{
        alignItems:'center', justifyContent: 'center',
        width: '100%', height: '100%'
    },
    btn_text:{
        color: colors.brownColor,
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(16), fontWeight: '500'
    }
}

const blueBtn = {
    backgroundColor:{
        backgroundColor: colors.blueColor,  height: moderateScale(46),
        borderRadius: moderateScale(3)
    },
    main_blue_btn:{
        alignItems:'center', justifyContent: 'center',
        width: '100%', height: '100%',
    },
    btn_text:{
        color: colors.secondaryWhiteColor,
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(16)
    }
}

const facebookStyles = {

}

const googleStyles = {

}
export {alternateBtn, mainBtnStyles, blueBtn, facebookStyles, googleStyles}