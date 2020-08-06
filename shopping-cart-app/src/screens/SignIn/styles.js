import { Dimensions, StyleSheet } from 'react-native';
import { alignment, colors, scale, verticalScale } from '../../utils';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    container: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    body: {
        height: height * .95,
        width: '95%',
        alignSelf: 'center',
    },
    bodyHeader: {
        height: '8%',
        width: '90%',
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
    },
    headerText: {
        ...alignment.PLsmall
    },
    bodyContainer: {
        width: '90%',
        height: '63%',
        alignSelf: 'center',
        backgroundColor: colors.themeBackground,
        borderRadius: scale(5),
    },
    bodyContainerBackground: {
        backgroundColor: colors.themeBackground,
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    bodyFooter: {
        width: '90%',
        height: '25%',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    footer: {
        height: '55%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderRadius: verticalScale(5),
        backgroundColor: colors.lightBrown,
        ...alignment.PLmedium
    },
    bcTexts: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '30%',
    },
    bcMain: {
        height: '45%',
        width: '90%',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    bcInputs: {
        width: '90%',
    },
    bcSocialBtns: {
        flexDirection: 'row',
        width: '90%',
        height: '25%',
        alignItems: 'center',
    },
    socialBtnsView: {
        width: '50%',
        justifyContent: 'center'
    },
    socialBtn: {
        flexDirection: 'row',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bgCircle: {
        justifyContent: "center",
        alignItems: 'center',
        width: scale(30),
        height: scale(30),
        backgroundColor: colors.container,
        borderRadius: scale(15),
        ...alignment.PxSmall

    },
    googleBtn: {
        height: scale(60),
        borderWidth: 0,
        borderRightWidth: 0,
        borderRadius: 3,
        borderColor: 'orange',
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        backgroundColor: colors.google,
    },
    facebookBtn: {
        height: scale(60),
        borderWidth: 0,
        borderLeftWidth: 0,
        borderRadius: 3,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        backgroundColor: colors.facebook,
    },
    fbText: {
        ...alignment.PLxSmall
    },
    ftUnderline: {
        textDecorationLine: 'underline',
    },
});
export default styles