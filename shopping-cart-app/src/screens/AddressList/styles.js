import { moderateScale } from '../../utils/scaling'
import { colors } from '../../utils/colors'
import { fontStyles } from '../../utils/fontStyles';

/* StyleSheet
============================================================================= */
export default {
    container: {
        height: '100%',
        width: '100%',
        alignItems:'center'
    },
    body:{
        // adjust body height in order to accomodate footer
        height: '80%', 
        width: '100%',
        alignItems: 'center',
        backgroundColor: colors.backgroudGray

    },
    // header
    header:{
        height: '8%', 
        width: '100%',
        backgroundColor: colors.whiteColor,
        borderBottomWidth: moderateScale(1),
        borderColor: colors.grayLinesColor,
        alignItems: 'center',
    },
    headerRow:{
        height: '100%', 
        width:'90%',
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center'
    },
    headerText:{
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(16),
        color: colors.blackText
    },
    headerBtnText:{
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(11),
        color: colors.greenTextColor
    },
    // main
    main:{
        height: '80%', 
        width: '95%',
        paddingTop: moderateScale(10)
    },
    mainScroll:{
        height: '100%', 
        width: '100%',
    },
     // footer
     footer:{
        height: '10%', 
        width: '100%',
        justifyContent: 'center'
    }
}