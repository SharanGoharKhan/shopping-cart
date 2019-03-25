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
        height: '95%', width:'95%',
        alignSelf:'center',
        // backgroundColor: 'rgba(255,10,10,0.2)'
    },
    main_scroller:{
        //backgroundColor: 'blue',
        marginBottom: moderateScale(10)
    },

    //header
    header:{
        height: '10%', width:'95%',
        flexDirection: 'row',alignSelf:'center',
        alignItems:'center'
    }, 
    header_text:{
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(16),
        paddingLeft: moderateScale(8)
    },

    // main
    main:{
        height: '80%', width: '100%',alignItems:'center'
    },
    main_top:{
        height: '70%', width: '95%',
    },
    main_bot:{
        height: '30%', width: '100%', 
        alignItems: 'center', justifyContent: 'space-evenly',
        backgroundColor: colors.greyLinesColor,
        borderRadius: moderateScale(5)
    },
    subtotal_container:{
        width: '90%', 
        borderBottomWidth: moderateScale(1),
        borderBottomColor: colors.fontGreyColor,
        paddingBottom: moderateScale(5)
    },
    row:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text:{
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(12.5)
    },
    text_bold:{
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(13),
        fontWeight: '500'
    },
    text_blue:{
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(13),
        fontWeight: '500',
        color: colors.blueColor
    },
    total_container:{
        width: '90%', 
    },
    submit_container:{
        width: '90%'
    },

    // footer
    footer:{
        height: '10%', width: '100%',
        backgroundColor: 'green',
        justifyContent: 'center', alignItems:'center'
    }

}