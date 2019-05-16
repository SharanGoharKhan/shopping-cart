import { Dimensions } from 'react-native';
import { verticalScale } from '../../utils/scaling';
import { fontStyles } from '../../utils/fontStyles';
const { height, width } = Dimensions.get('window');

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
    scrollViewStyle: {
        backgroundColor: '#EEEEEE',
    },
    bannerContainer: {
        width: '100%',
        height: height * 0.45
    },
    contentContainer: {
        width: '100%',
        height: height * 0.38,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentSubContainer: {
        width: '90%',
        height: '90%',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
};
