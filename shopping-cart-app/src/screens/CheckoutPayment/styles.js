import { moderateScale } from '../../utils/scaling'
import { colors } from '../../utils/colors'
import { fontStyles } from '../../utils/fontStyles';

import {StatusBar, Dimensions} from 'react-native'
const { width, height } = Dimensions.get('window');

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
        flexDirection: 'row'
    },
    mainTop:{
        height: '65%', width: '100%',
        //backgroundColor: 'rgba(100,100,100,0.4)'
    },
    mainTopHeadline:{
        height: '10%',
        //backgroundColor:'indego',
        justifyContent: 'center'
    },
    headlineText:{
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(13),
    },
    cardContainer:{
        width: width*.90, 
        height: '65%', 
        //backbackgroundColor:'blue'
    },
    card:{
        width: width*.90,
        //backgroundColor:'pink',
    },
    manualBtnContainer:{
        height: '25%',
        width: '95%',
        //backgroundColor:'rgba(150,0,150,0.2)',
        alignSelf:'center'
    },
    manBtnContText:{
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(11),
    },
    paginationItem:{
        marginLeft:0,
        marginRight: moderateScale(3),
        height: moderateScale(7),
        width: moderateScale(8)
    },
    mainBot:{
        height: '30%', width: '100%',
       //backgroundColor: 'pink'
    },
    mainBot:{
        height: '35%', width: '100%', 
        alignItems: 'center', justifyContent: 'space-evenly',
        backgroundColor: colors.backgroudGray,
        borderRadius: moderateScale(5)
    },
    subtotalContainer:{
        width: '90%', 
        borderBottomWidth: moderateScale(1),
        borderBottomColor: colors.backgroudGray,
        paddingBottom: moderateScale(5)
    },
    cvvContainer:{
        borderBottomWidth: moderateScale(3),
        backgroundColor: colors.whiteColor,
        borderWidth: moderateScale(1),
        borderColor: colors.backgroudGray,
        height: moderateScale(25),
        width: moderateScale(40),
        justifyContent: 'center', alignItems:'center'

    },
    cvvInput:{
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(12.5),
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
    textBold:{
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(13),
        fontWeight: '500'
    },
    textBlue:{
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(13),
        fontWeight: '500',
        color: colors.blueColor
    },
    totalContainer:{
        width: '90%', 
    },
    submitContainer:{
        width: '90%'
    },
   // footer
   footer:{
        height: '10%', width: '100%',
        backgroundColor: 'green',
        justifyContent: 'center', alignItems:'center'
    }
}