import { Dimensions, Platform, StatusBar, StyleSheet } from 'react-native';
import { alignment, colors, scale } from '../../utils';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    safeAreaStyle: {
        backgroundColor: colors.headerbackground,
        marginTop: Platform.OS === 'ios' ? 0 : -(StatusBar.currentHeight)
    },
    grayBackground: {
        backgroundColor: colors.backgroudGray,
        marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    },
    headerText: {
        height: scale(80),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.lightHorizontalLine
    },
    categoryContainer: {
        flexGrow: 1,
        paddingLeft: width * 0.05,
        paddingRight: width * 0.05,
        ...alignment.MTlarge
    },
    cardStyle: {
        marginRight: width * 0.1,
        height: scale(130),
        width: width * 0.4,
        ...alignment.MBlarge
    },

})
export default styles