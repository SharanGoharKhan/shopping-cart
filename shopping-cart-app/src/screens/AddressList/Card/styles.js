import { colors, scale, verticalScale } from '../../../utils';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: verticalScale(160),
        width: '100%',
        backgroundColor: colors.whiteColor,
        marginBottom: verticalScale(10),
        borderRadius: verticalScale(5),
        overflow: 'hidden',
        alignItems: 'center',
    },
    headerRow: {
        flexDirection: 'row',
        height: '25%',
        width: '90%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    address: {
        height: '45%',
        width: '90%',
        justifyContent: 'center',
    },
    btnContainer: {
        height: '30%',
        width: '90%',
        justifyContent: 'flex-start',
    },
    selectedBtn: {
        height: verticalScale(40),
        width: '100%',
        backgroundColor: colors.themeBackground,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: verticalScale(3),
    },
    unselectedButton: {
        height: verticalScale(40),
        width: '100%',
        backgroundColor: colors.brownColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: verticalScale(3),
    },
    tickImage: {
        position: 'absolute',
        left: scale(20),
    },
});
export default styles