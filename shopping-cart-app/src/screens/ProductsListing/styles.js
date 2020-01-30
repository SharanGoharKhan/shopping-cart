import { verticalScale, scale } from '../../utils/scaling';
import { fontStyles } from '../../utils/fontStyles';

export default {
    flex: {
        flex: 1,
    },
    headerContainer: {
        width: '100%',
        height: '8%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    headerSubContainer: {
        width: '95%',
        height: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headerIconContainer: {
        height: '100%', 
        width: '25%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    headerTextContainer: {
        width: '60%',
        height: '100%',
        justifyContent: 'center',
    },
    headerText: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(16),
    },
    backCnt: {
        width: '10%', 
        height: '100%',
        justifyContent:'center',
        alignItems:'center'
    },
    backImg: {
        width: '50%',
        height: '40%'
    },
    headerImg: {
        width: '30%',
        height: '40%'
    },
    imgResponsive: {
        flex: 1,
        width: undefined,
        height: undefined,
    },
    productCard: {
        marginLeft: '5%', 
        width: '42%', 
        height: scale(225), 
        marginTop: scale(10), 
        marginBottom: scale(20)
    }
};
