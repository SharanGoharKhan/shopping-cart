import { StatusBar, Platform } from 'react-native';;
import { fontStyles, colors, scale } from '../../utils';

export default {
    flex: {
        flex: 1,
    },
    mainContainer: {
        backgroundColor: colors.themeBackground,
        marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
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
    summaryContainer: {
        marginTop: scale(30),
        width: '90%',
        backgroundColor: colors.containerDark,
        alignSelf: 'center',
        padding: scale(10),
        justifyContent: 'flex-end'
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
};