import { colors, scale, alignment } from '../../../utils';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: colors.container,
        borderRadius: scale(5),
        overflow: 'hidden',
        alignItems: 'center',
        ...alignment.MBmedium,
        ...alignment.PTmedium,
        ...alignment.PBmedium
    },
    headerRow: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    address: {
        ...alignment.MTmedium,
        ...alignment.MBsmall,
        ...alignment.PLxSmall,
        width: '90%',
        justifyContent: 'center',
    },
    btnContainer: {
        width: '90%',
        justifyContent: 'flex-start',
    },
    selectedBtn: {
        height: scale(40),
        width: '100%',
        backgroundColor: colors.themeBackground,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: scale(3),
    },
    unselectedButton: {
        height: scale(40),
        width: '100%',
        backgroundColor: colors.brownColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scale(3),
    },
    tickImage: {
        position: 'absolute',
        left: scale(20),
    },
});
export default styles