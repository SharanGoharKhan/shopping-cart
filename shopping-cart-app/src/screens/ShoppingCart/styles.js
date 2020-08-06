import { StatusBar, Platform, StyleSheet } from 'react-native';;
import { fontStyles, colors, scale, alignment } from '../../utils';

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    mainContainer: {
        backgroundColor: colors.themeBackground,
        marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    },
    subContainer: {
        flexGrow: 1,
        ...alignment.Psmall
    },
    spacer: {
        marginTop: scale(10)
    },
    textStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: scale(13)
    },
    totalStyle: {
        color: colors.blueColor
    },
    priceBox: {
        width: '100%',
        ...alignment.Psmall
    },
    summaryContainer: {
        width: '100%',
        backgroundColor: colors.containerDark,
        alignSelf: 'center',
        padding: scale(10),
        justifyContent: "flex-end",
        borderRadius: scale(10)
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    lineStyle: {
        width: '99%',
        height: 1,
        backgroundColor: colors.horizontalLine,
        alignSelf: 'center'
    },
    btnContainer: {
        backgroundColor: colors.textBlueColor
    },
    btnText: {
        color: colors.whiteColor
    },
});
export default styles