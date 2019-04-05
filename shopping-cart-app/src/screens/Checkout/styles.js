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
        height: '95%', width:'90%',
        alignSelf:'center',
        // backgroundColor: 'rgba(255,10,10,0.2)'
    },
    main_scroller:{
        //backgroundColor: 'blue',
        marginBottom: moderateScale(10)
    },

    //header
    header:{
        height: '10%', width:'100%',
        flexDirection: 'row',alignSelf:'center',
        alignItems:'center', 
    }, 
    header_text:{
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(16),
        paddingLeft: moderateScale(8)
    },

    // main
    main:{
        height: '80%', width: '100%',alignItems:'center'
        //,backgroundColor:'red'
    },
    simpleRow:{
        flexDirection: 'row', alignItems: 'center'
    },
    main_top:{
        height: '70%', width: '100%',
        //backgroundColor: 'rgba(100,100,100,0.4)'
    },
    main_bot:{
        height: '30%', width: '100%',
       // backgroundColor: 'pink'
    },
    orders:{
        height: '40%', width: '100%',
        //backgroundColor: 'rgba(100,0,0,0.2)',
        borderBottomWidth: moderateScale(1),
        borderColor: colors.grayLinesColor,
        borderStyle: "dashed"
    },
    items:{
        height: moderateScale(115), width:'100%',
        paddingTop: moderateScale(3)
    },
    itemBoldText:{
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(13),
        fontWeight:'500'
    },
    itemBlueText:{
        color: colors.textBlueColor,
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(13),
        fontWeight:'500'
    },

    goldenText:{
        color: colors.brownColor,
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(13),
    },
    addressSmallText:{
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(11),
        color: colors.fontGreyColor
    },
    addressBoldText:{
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(11),
        fontWeight:'500'
    },
    deliveryDate:{
        paddingTop: moderateScale(5),
        color: colors.textBlueColor,
        fontSize: moderateScale(11),
        fontFamily: fontStyles.PoppinsRegular,
        paddingLeft: moderateScale(5),
    },
    padding:{
        paddingTop: moderateScale(6),
        paddingBottom: moderateScale(2)
    },
    address:{
        height: '60%', width: '100%',
        paddingTop: moderateScale(20),
        //backgroundColor: 'rgba(0,0,100,0.2)'
    },
    addressDetail:{
        paddingTop: moderateScale(5)
    },
    borderBottom:{
        borderBottomWidth: moderateScale(1),
        borderColor: colors.grayLinesColor,
        borderStyle: "dashed",
        paddingBottom: moderateScale(15)
    },
    main_bot:{
        height: '30%', width: '100%', 
        alignItems: 'center', justifyContent: 'space-evenly',
        backgroundColor: colors.backgroudGray,
        borderRadius: moderateScale(5)
    },
    subtotal_container:{
        width: '90%', 
        borderBottomWidth: moderateScale(1),
        borderBottomColor: colors.grayLinesColor,
        paddingBottom: moderateScale(5)
    },
    listItem:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: moderateScale(3),
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
        color: colors.textBlueColor
    },
    total_container:{
        width: '90%', 
    },
    submit_container:{
        width: '90%'
    },
   // footer
   footer:{
        height: '12%', 
        width: '120%',
        alignSelf:'center',
        justifyContent: 'flex-end', 
        alignItems:'center'
    }
}