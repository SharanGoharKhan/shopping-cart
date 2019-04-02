import { moderateScale } from '../../../utils/scaling'
import { colors } from '../../../utils/colors'
import { fontStyles } from '../../../utils/fontStyles';

/* StyleSheet
============================================================================= */
export default {
    container:{
        height: moderateScale(160), width: '100%',
        backgroundColor: colors.whiteColor,
        marginBottom: moderateScale(10),
        borderRadius: moderateScale(5),
        overflow: 'hidden',

        alignItems: 'center'

    },
    headerRow:{
        flexDirection: 'row',
        height: '25%', width: '90%', 
        justifyContent: 'space-between', alignItems:'center',
        //backgroundColor: 'rgba(100,0,50,.20)'
    },
    titleText:{
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(14),
        color: colors.brownColor
    },
    address:{
        height: '45%', width: '90%',
        justifyContent:'center',
        //backgroundColor: 'rgba(10,150,20,0.2)'
    },
    addressText:{
        fontSize : moderateScale(11),
        fontFamily: fontStyles.PoppinsRegular,
        lineHeight: moderateScale(15)
    },
    btnContainer:{
        height: '30%', width: '90%',
        justifyContent:'flex-start',
        //backgroundColor: 'rgba(10,59, 150, 0.2)'
    },
    selectedBtn:{
        height: moderateScale(40), width:'100%',
        backgroundColor: colors.backgroudGray,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: moderateScale(3)

    },
    selectedText:{
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(13)
    },
    unselectedButton:{
        height: moderateScale(40), width:'100%',
        backgroundColor: colors.brownColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: moderateScale(3)
    },
    unselectedText:{
        color: colors.whiteColor,
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(13)
    },
    tickImage:{
        height: moderateScale(16),
        width: moderateScale(16),
        position: 'absolute',
        left: moderateScale(20)
    }
}