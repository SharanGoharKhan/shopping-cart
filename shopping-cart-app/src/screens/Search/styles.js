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
        alignSelf:'center', zIndex:0
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
        alignItems:'center'
    }, 
    header_text:{
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(16),
        paddingLeft: moderateScale(8)
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
    mixed_text:{
        flexDirection:'row',
        marginBottom: moderateScale(5)
    },
    text:{
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(12),
    },
    colored_text:{
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(12),
        color: colors.brownColor
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: moderateScale(15)
    },
    // footer
    footer:{
        height: '10%', width: '100%',
        backgroundColor: 'green',
        justifyContent: 'center', alignItems:'center'
    }

}