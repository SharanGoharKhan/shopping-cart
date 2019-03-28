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
        height: '95%', width:'100%',
        alignSelf:'center'
        //backgroundColor: 'rgba(255,10,10,0.2)'
    },
    main_scroller:{
        //backgroundColor: 'blue',
        marginBottom: moderateScale(10)
    },

    //header
    header:{
        height: '10%', width:'95%',
        flexDirection: 'row',alignSelf:'center',
        alignItems:'center',
        justifyContent: 'space-between'
    }, 
    header_text:{
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(16),
        paddingLeft: moderateScale(8)
    },
    headerLeft:{
        flexDirection: 'row',
        
    },

    // main
    main:{
        height: '80%', width: '100%', marginLeft:0
        ,
        justifyContent: 'center', alignItems: 'center'

    },
    searchBarContainer:{
        height: '10%', width: '93%',
        justifyContent: 'center', alignItems: 'center'
    },
    mainBodyContainer:{
        height:'90%', width:'100%',
        justifyContent: 'center', alignItems: 'center',
        backgroundColor: colors.greyLinesColor

    },
    mainBody:{
        width: '95%',
       marginTop:'25%',

    },
    
    // footer
    footer:{
        height: '10%', width: '100%',
        backgroundColor: 'green',
        justifyContent: 'center', alignItems:'center'
    }

}