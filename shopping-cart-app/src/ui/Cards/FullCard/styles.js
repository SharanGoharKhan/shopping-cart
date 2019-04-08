import { moderateScale } from '../../../utils/scaling'
import { colors } from '../../../utils/colors'
import { fontStyles } from '../../../utils/fontStyles';


// We can use Dimensions module and use percentage from it as well; a decent usecase
export default {
    container:{
        width: '100%', height: moderateScale(85),
        marginBottom: moderateScale(15),
        borderRadius: moderateScale(3),
        borderWidth: moderateScale(1),
        borderColor: colors.backgroudGray,
        flexDirection: 'row'
    },
    leftside:{
        height: '100%',
        width: '35%'
    },
    thumbnail:{
        height:'100%',
        width:'100%',
        borderTopLeftRadius: moderateScale(3),
        borderBottomLeftRadius: moderateScale(3),
    },
    rightside_container:{
        height: '100%', 
        width: '65%',
        justifyContent:'center', 
        alignItems:'center', 
        paddingBottom: moderateScale(5)
    },
    rightside:{
        height: '80%',
        width: '85%',
        justifyContent: 'space-between'
    },

    row:{
        flexDirection: 'row'
    },
    rightside_top:{

    },
    rightside_bot:{

    },
    special_row:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    qty:{
        fontFamily: fontStyles.PoppinsRegular,
        color: colors.primaryBlackColor,
        fontSize: moderateScale(13),
        fontWeight: '500'
    },
    amount:{
        fontFamily: fontStyles.PoppinsRegular,
        color: colors.textBlueColor,
        fontSize: moderateScale(13),
        fontWeight: '500'
    },
    product:{
        fontFamily: fontStyles.PoppinsRegular,
        color: colors.primaryBlackColor,
        fontSize: moderateScale(13),
        fontWeight: '500'
    },
    by:{
        fontFamily: fontStyles.PoppinsRegular,
        color: colors.primaryBlackColor,
        fontSize: moderateScale(11),
    },
    brand:{
        fontFamily: fontStyles.PoppinsRegular,
        color: colors.brownColor,
        fontSize: moderateScale(11),
    },
    prevPrice:{
        alignSelf: 'flex-end'
    },
    prevPriceText:{
        color: colors.googleRedColor,
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(9)
    }
}