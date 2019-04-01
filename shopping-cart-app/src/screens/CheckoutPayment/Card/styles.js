import { moderateScale } from '../../../utils/scaling'
import { colors } from '../../../utils/colors'
import { fontStyles } from '../../../utils/fontStyles';
export default {
    outline:{
        height: '90%', width:'100%',

        alignSelf: 'center',
        alignItems: 'center', justifyContent:'center',
        borderColor: colors.textBlueColor,
        borderRadius: moderateScale(12),
        borderWidth: moderateScale(5)
    },
    container:{
        //backgbackgroundColor: 'rgba(150,50,50,0.2)',
        height: '95%', width:'97.33%',
        alignItems: 'center', 

        borderWidth: moderateScale(1),
        borderColor: colors.grayLinesColor,
        borderRadius: moderateScale(7),
        overflow: 'hidden'
    },
    topContainer:{
        height: '50%', 
        width: '90%',
        //backgroundColor:'rgba(150,0,150,0.4)',
        justifyContent: 'flex-end'
    },
    simCardImage:{
        height: moderateScale(30),
        width: moderateScale(36),
        marginBottom: moderateScale(8)
    },
    visaImage:{
        height: moderateScale(14),
        width: moderateScale(45)
    },
    botContainer:{
        height: '50%', 
        width: '90%',
        //backgroundColor:'rgba(150,150,0,0.4)',
        justifyContent: 'space-evenly'
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    creditCardNumber:{
        width: '75%',
        //backgroundColor: 'green'
    },
    ccText:{
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(12),

    },
    expiryContainer:{
        flexDirection: 'row',
        //backgroundColor: 'purple'
    },
    expiryText:{
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(9),
        lineHeight: moderateScale(11)
    },
    expiryNumberText:{
        letterSpacing: moderateScale(1),
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(10.5),
        marginLeft: moderateScale(5)
    },
    expiryMonthYear:{
        justifyContent: 'center',
    },
    cardOwnerName:{
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(13)
    }

}