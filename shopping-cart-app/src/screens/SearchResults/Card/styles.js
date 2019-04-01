import { moderateScale } from '../../../utils/scaling'
import { colors } from '../../../utils/colors'
import { fontStyles } from '../../../utils/fontStyles';


// We can use Dimensions module and use percentage from it as well; a decent usecase
export default {
    container:{
        width: '100%', height: moderateScale(90),
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
        backgroundColor:colors.secondaryWhiteColor,
        height: '100%', width: '65%',
        justifyContent:'center', alignItems:'center',
        borderTopRightRadius: moderateScale(3),
        borderBottomRightRadius: moderateScale(3)
    },
    ratingContainer:{
        flexDirection: 'row'
    },
    votesCount:{
        //backgroundColor:'yellow',
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(8),
        paddingTop: moderateScale(3),
        paddingLeft: moderateScale(3)
    },   
    badge:{
        backgroundColor: 'purple', color: 'white', 
            width: '30%' , position:'absolute', textAlign:'center', lineHeight: moderateScale(18),
            fontFamily: fontStyles.PoppinsRegular, fontSize:moderateScale(11) , borderRadius: moderateScale(3),
            zIndex:1, elevation:1, top: 10, left:10
    },
    rightside:{
        height: '80%',
        width: '85%',
        justifyContent: 'space-between',
        //backgroundColor:'pink'
    },

    row:{
        flexDirection: 'row'
    },
    rightside_top:{
        //backgroundColor:'green',
        alignItems :'flex-start'
    },
    rightside_bot:{
        //backgroundColor: 'blue'
    },
    special_row:{
        //backgroundColor:'pink',
        width:'100%',
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
        fontWeight: '500',
        lineHeight: moderateScale(13)

    },
    product:{
        width: '95%',
        fontFamily: fontStyles.PoppinsRegular,
        color: colors.primaryBlackColor,
        fontSize: moderateScale(13),
        lineHeight: moderateScale(14.5)
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
        alignSelf: 'flex-start'
    },
    prevPriceText:{
        color: colors.googleRedColor,
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(9),
        lineHeight: moderateScale(10),
        alignSelf: 'flex-start',
        paddingBottom: 0,
        marginBottom:0

    }
}