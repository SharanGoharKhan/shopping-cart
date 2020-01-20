import { Dimensions } from 'react-native';
import { verticalScale } from '../../../utils/scaling';
import { fontStyles } from '../../../utils/fontStyles';
const { height, width } = Dimensions.get('window');

export default {
    cardItemsContainer: {
        width: '95%',
        height: height * 0.3,
        alignSelf: 'flex-end',
    },
    cardItemsTextContainer: {
        width: '100%',
        height: '15%',
        justifyContent: 'center',
    },
    cardItemsTextStyles: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(16),
    },
    scrollViewContainer: {
        width: '100%',
        height: '85%',
        flexDirection: 'row',
    },
    cardContainer: {
        width: width * 0.5,
        height: height * 0.25,
        marginRight: verticalScale(20),
        flexDirection: 'column',
        borderRadius: verticalScale(5),
        borderColor: 'white',
        borderWidth: verticalScale(3),
    },
    cardTopContainer: {
        width: '100%',
        height: '80%',
    },
    cardTopSubContainer: {
        width: '100%',
        height: '100%',
        flexWrap: 'wrap',
        position: 'relative',
    },
    w50h50: {
        width: '50%',
        height: '50%',
    },
    imgResponsive: {
        flex: 1,
        width: undefined,
        height: undefined,
        opacity: 1,
    },
    centerImgContainer: {
        width: width * 0.18,
        height: height * 0.09,
        position: 'absolute',
        top: '25%',
        left: '30%',
        borderRadius: width * 0.1,
    },
    centerImgStyle: {
        width: width * 0.18,
        height: height * 0.09,
        borderColor: 'white',
        borderWidth: verticalScale(2),
        borderRadius: width * 0.09,
    },
    bottomContainer: {
        width: '100%',
        height: '20%',
        backgroundColor: 'white',
    },
    bottomSubContainer: {
        width: '90%',
        height: '100%',
        flexDirection: 'column',
        justifyContent:'center',
        marginLeft: '5%',
    },
    bottomTextStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(10),
        lineHeight: verticalScale(11),
    },


};
