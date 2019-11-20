import { verticalScale, scale } from '../../../utils/scaling';
import { colors } from '../../../utils/colors';
import { fontStyles } from '../../../utils/fontStyles';

export default {
    container :{
        backgroundColor : '#FFF',
    },
    mainHeading:{
        backgroundColor: '#fff',
        padding:30,
    },
    mainText:{
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(16),
        color: colors.darkGrayText,
    },
    body:{
        backgroundColor: colors.backgroudGray,
        height: '100%',
        width:'100%',
        padding: '5%',
    },
    bodyText:{
        backgroundColor: '#FFF',
        justifyContent:'center',
        borderRadius:scale(10),
    },
    bodyHeading:{
        justifyContent:'center',
        alignItems:'center',
        paddingTop:scale(30),
        paddingBottom:scale(30),
    },
    headingText:{
        fontFamily :fontStyles.PoppinsRegular,
        fontSize:scale(16),
        fontWeight:'600',
        opacity:0.9,
    },
    bodyContent:{
        justifyContent:'center',
        alignItems:'center',
        padding:scale(15),
        paddingBottom:scale(30),
    },
    contenView:{
        paddingBottom:15,
        paddingTop:0,
    },
    contentText:{
        fontSize:scale(12),
        opacity:0.7,
    },
    numberContainer:{
        width:'100%',
        paddingTop:scale(10),
        paddingBottom:scale(10),
        borderWidth:1,
        borderColor:'#eeeeee',
        borderRadius:scale(10),
        borderStyle:'solid',
        flexDirection:'row',
    },
    numberContainerLeft:{
        width:'80%'
    },
    numberContainerRight:{
        width:'20%',
        alignItems:'center',
        justifyContent:'center',
    },
    mobileNumber:{
        textAlign:"center",
        justifyContent:"center",
        alignItems:'center',
        fontSize:scale(12),
        letterSpacing:2,
    },
    changeLink:{
        color:'blue',
        fontSize:scale(10),
    },
    codeContainer:{
        marginTop:scale(20),
        width:'100%',
    },
    codeText:{
        fontSize:scale(12),
        textAlign:'left',        
    },
    codeInput:{
        marginTop:scale(10),
        justifyContent:"center",
        alignItems:'center',
    },
    codeOTP:{
        backgroundColor:colors.backgroudGray,
        textAlign:'center',
        width:'100%',
        borderRadius:scale(10),
        fontSize:scale(12),
        paddingTop:scale(10),
        paddingBottom:scale(10),
    },
    buttonList:{
        marginTop:scale(10),
        padding:scale(20),
    },
    buttonValidateContainer:{
        backgroundColor:colors.brownColor,
        borderRadius: verticalScale(3),
        height: verticalScale(40),
        //width:'100%',
    },
    buttonValidate:{
        width:'100%',
        height:'100%',
        alignItems: 'center',
        justifyContent: 'center',
        // borderRadius:15,
        // paddingTop:15,
        // paddingBottom:10,
    },
    buttonValidateText:{
        color:colors.secondaryWhiteColor,
        textAlign:'center',
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: scale(16),
    },
    buttonNewCode:{
        marginTop:scale(20),
    },
    newLink:{
        alignItems:'center',
        justifyContent:'center',
    },
    newLinktext:{
        color:'blue',
        fontSize:scale(10),
    },
}