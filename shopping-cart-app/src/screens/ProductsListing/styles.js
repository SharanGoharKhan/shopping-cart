import { scale } from '../../utils/scaling';
import { Platform, StatusBar } from 'react-native';

export default {
    flex: {
        flex: 1,
    },
    safeAreaStyle: {
        backgroundColor: colors.headerbackground
    },
    container: {
        marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    },
    productCard: {
        marginLeft: '5%',
        width: '42%',
        height: scale(225),
        marginTop: scale(10),
        marginBottom: scale(20)
    },
};