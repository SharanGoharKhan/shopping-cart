import { Dimensions, Platform, StyleSheet, StatusBar } from 'react-native';
import { verticalScale, scale } from '../../utils/scaling';
import { colors } from '../../utils/colors';
import { fontStyles } from '../../utils/fontStyles';
import { alignment } from '../../utils';
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
        marginTop: '15%',
        width: '90%',
        backgroundColor: colors.container,
        borderRadius: scale(8),
        position: 'relative',
    },
    profileImageContainer: {
        width: verticalScale(80),
        height: verticalScale(80),
        position: 'absolute',
        alignSelf: 'center',
        backgroundColor: colors.container,
        borderRadius: verticalScale(40),
        top: verticalScale(-40),
        borderWidth: verticalScale(3),
        borderColor: '#DDDDDD',
        justifyContent: 'center',
        alignItems: 'center',
    },
    formContentContainer: {
        width: '100%',
        marginTop: scale(50),
        alignItems: 'center',
        ...alignment.MBmedium,
    },
    twoItemsContainer: {
        width: '100%',
        height: scale(80),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        ...alignment.MBxSmall
    },
    halfContainer: {
        width: '45%',
        height: '80%'
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
        ...alignment.PxSmall
    },
    inputText: {
        textAlign: "left",
        ...alignment.PxSmall
    },
    label: {
        fontFamily: fontStyles.PoppinsRegular,
        color: colors.darkGrayText,
        fontSize: verticalScale(14),
    },
    oneItemContainer: {
        width: '100%',
        height: scale(80),
        flexDirection: 'row',
        justifyContent: 'center',
    },
    fullContainer: {
        width: '95%',
        height: '80%',
    },
    addContainer: {
        width: width * .9,
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

});
export default styles