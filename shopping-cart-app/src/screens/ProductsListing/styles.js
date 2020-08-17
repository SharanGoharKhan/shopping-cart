import { scale } from '../../utils/scaling';
import { Platform, StatusBar, Dimensions, StyleSheet } from 'react-native';
import { alignment, colors } from '../../utils';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    safeAreaStyle: {
        backgroundColor: colors.headerbackground
    },
    container: {
        marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
        backgroundColor: colors.themeBackground
    },
    categoryContainer: {
        flexGrow: 1,
        paddingLeft: width * 0.05,
        paddingRight: width * 0.05,
        ...alignment.MTlarge
    },
    productCard: {
        marginRight: width * 0.1,
        height: scale(200),
        width: width * 0.4,
        ...alignment.MBlarge
    },
})
export default styles