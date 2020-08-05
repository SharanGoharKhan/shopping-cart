import { Dimensions, Platform, StatusBar, StyleSheet } from 'react-native';
import { colors, scale, verticalScale, textStyles, alignment } from '../../utils';
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    mainContainer: {
        marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    },
    formMainContainer: {
        flex: 1,
        backgroundColor: colors.themeBackground,
        alignItems: 'center',
    },
    formContainer: {
        width: '90%',
        backgroundColor: colors.container,
        borderRadius: scale(8),
        alignItems: 'center',
    },
    imgResponsive: {
        width: '60%',
        height: '60%',
    },
    formContentContainer: {
        ...alignment.MTmedium,
        width: '95%',
    },
    twoItemsContainer: {
        width: '100%',
        height: scale(70),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    halfContainer: {
        width: '45%',
        height: '90%',
    },
    labelContainer: {
        width: '100%',
        height: '40%',
    },
    inputContainer: {
        width: '100%',
        height: '60%',
        borderRadius: scale(3),
        justifyContent: 'center',
        backgroundColor: colors.themeBackground,
    },
    oneItemContainer: {
        width: '100%',
        height: scale(80),
        flexDirection: 'row',
        justifyContent: 'center',
    },
    fullContainer: {
        width: '95%',
        height: '90%',
    },
    addContainer: {
        width,
        height: height * 0.15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addBtn: {
        width: '80%',
        height: '45%',
        backgroundColor: colors.buttonBackground,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scale(4),
    },
    nameAddressContainer: {
        ...alignment.MTmedium,
        width: '85%',
        height: height * 0.1,
    },
    nameAddressLabel: {
        width: '100%',
        height: '30%',
    },
    nameAddressInput: {
        width: '60%',
        height: '70%',
    },
    addressInputStyle: {
        ...textStyles.Regular,
        ...textStyles.H2,
        color: colors.fontBrown
    },
    titleBorder: {
        borderBottomWidth: scale(1),
        borderBottomColor: colors.horizontalLine,
    },
    inputText: {
        textAlign: "left",
        color: colors.fontMainColor,
        ...alignment.PxSmall,
        ...alignment.PLsmall
    },
    error: {
        borderWidth: scale(1),
        borderColor: colors.errorColor,
        borderRadius: scale(3)
    }
})
export default styles