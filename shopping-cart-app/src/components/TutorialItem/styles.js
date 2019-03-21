import { moderateScale } from '../../utils/scaling'
import { fontStyles } from '../../utils/fontStyles'
import { colors } from '../../utils/colors'
import { Dimensions } from 'react-native'
const {height, width} = Dimensions.get('window')

/* StyleSheet
============================================================================= */
export default {
    container:{
        flex:1,
        flexDirection:'column',
        height: height,
        width: width,
        alignItems:'center'
    },
    container_top:{
        height: '54%'
    },
    container_bot:{
        height: '35%',
        justifyContent:'center',
        alignItems:"center"
    },
    heading_container:{
        fontFamily: fontStyles.PoppinsRegular, 
        width: width*.80,
        marginTop: height*.052,
        paddingLeft: '8%'
    },
    heading_container_s1:{
        color: colors.fontBlackColor,        
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(26),
        fontStyle: 'italic',

    },
    heading_container_s2:{
        color: colors.fontBlackColor,        
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(36),
        fontWeight: '400',

        lineHeight:height*.07,
    },

    decription:{
        color:colors.fontBlackColor,        
        textAlign: 'center',
        width: width*.80,
        fontFamily:fontStyles.PoppinsRegular,
        fontSize: moderateScale(17),

    },
    main_btn:{
        marginTop: height*.04,
        height: height*.08,
        width: width*0.60,
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 5,
        backgroundColor: '#ff550a'
        
    },
    main_btn_text:{
      fontFamily: fontStyles.PoppinsRegular,
      fontSize: moderateScale(22),
      color: "#ffffff"
    },
    image: {
        width: width*.95,
        height: height*.365,
    },
    backgroundGradient:{
        position: 'absolute',
        zIndex:-1,
        height: '40%',
        width
    }
}