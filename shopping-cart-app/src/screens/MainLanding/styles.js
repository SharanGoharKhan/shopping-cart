import { Dimensions, Platform, StatusBar, StyleSheet } from 'react-native';
import { alignment, fontStyles, colors, scale, verticalScale } from '../../utils';
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    safeAreaStyle: {
        backgroundColor: colors.headerbackground
    },
    leftIconPadding: {
        ...alignment.PLsmall,
        ...alignment.PRlarge
    },
    scrollViewStyle: {
        marginTop: verticalScale(20),
        backgroundColor: colors.themeBackground,
    },
    grayBackground: {
        backgroundColor: colors.backgroudGray,
        marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    },
    caroselContainer: {
        width: '100%',
        height: height * 0.3,
        position: 'relative',
    },
    caroselStyle: {
        width,
        height: height * 0.3,
    },
    menuDrawerContainer: {
        position: 'absolute',
        top: '10%',
        left: '2%',
    },
    imgResponsive: {
        flex: 1,
        width: undefined,
        height: undefined,
    },
    headingText: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: scale(16)
    },
    itemCardContainer: {
        width: scale(200),
        height: scale(225),
        marginTop: scale(10),
        marginRight: scale(20),
        borderRadius: scale(5),
        borderColor: colors.whiteColor,
        borderWidth: scale(4)
    },
    categoryContainer: {
        width: '90%',
        alignSelf: 'center',
        marginTop: scale(20),
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    titleSpacer: {
        marginLeft: '5%',
        marginTop: scale(30)
    },
    productCard: {
        marginLeft: '5%',
        width: '42%',
        height: scale(225),
        marginTop: scale(10),
        marginBottom: scale(20)
    }
})
export default styles