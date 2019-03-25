import { moderateScale } from '../../utils/scaling'
import { colors } from '../../utils/colors'
import { fontStyles } from '../../utils/fontStyles';

import {StatusBar} from 'react-native'
/* StyleSheet
============================================================================= */
export default {
    container: {
        height: '100%',
        width: '100%',
        //backgroundColor: 'rgba(255,10,10,0.1)',
         alignSelf:'center', 
       // marginTop: '5%' // in order to avoid statusbar collision
    },
    statusbarImage:{
        height: StatusBar.currentHeight,
        backgroundColor:'black'
    },
    body:{
        // height is 93% so that there is bottom space left
        // according to design 
        height: '93%', width:'90%',
        alignSelf:'center',
        //backgroundColor: 'rgba(255,10,10,0.2)'
    },

    // Header
    header:{
        justifyContent: 'space-evenly',
        height: '20%', 
    },
    header_text:{
        paddingLeft: '5%',
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(16)
    },
    header_btn:{

    },

    // main
    main:{
        backgroundColor:colors.greyLinesColor,
        height: '80%', width: '100%',
        borderRadius: moderateScale(5)
    },
    body_container_background:{
        alignItems:'center',
        width:'100%', height:'100%'
    },
    
    main_top:{
        height: '20%', width: '90%',
        justifyContent: 'center', alignItems:'center'
    },
    h1_text:{
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(17.5),
        fontWeight: '500',
        letterSpacing: moderateScale(.5),
        marginTop: '5%'
    },
    h2_text:{
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(12),
    },
    main_mid:{
        height: '55%', width: '90%'
    },
    main_bot:{
        height: '25%', width: '90%',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    bot_btn_container:{
        width: '100%'
    },
    mixed_line:{
        flexDirection: 'row'
    },
    ft_text:{
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(10)
    },
    ft_text_underline:{
        textDecorationLine: 'underline'
    }

}