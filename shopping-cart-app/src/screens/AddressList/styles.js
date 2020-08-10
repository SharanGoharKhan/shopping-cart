import { verticalScale, scale, colors, fontStyles, alignment } from '../../utils';
import { StatusBar, Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    safeAreaStyle: {
        backgroundColor: colors.headerbackground
    },
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    },
    body: {
        // adjust body height in order to accomodate footer
        height: '85%',
        width: '100%',
        alignItems: 'center',
        backgroundColor: colors.backgroudGray,

    },
    backImg: {
        width: '15%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    // header
    header: {
        height: '8%',
        width: '100%',
        backgroundColor: colors.whiteColor,
        borderBottomWidth: verticalScale(1),
        borderColor: colors.grayLinesColor,
        alignItems: 'center',
    },
    headerRow: {
        height: '100%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerText: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(16),
        color: colors.blackText,
        width: '60%',
    },
    headerBtn: {
        width: '30%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    headerBtnText: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(11),
        color: colors.greenTextColor,
    },
    // main
    main: {
        height: '100%',
        width: '95%',
        paddingTop: verticalScale(10),
    },
    mainScroll: {
        height: '100%',
        width: '100%',
    },
    //Empty View
    emptyContainer: {
        width: '100%',
        backgroundColor: colors.container,
        borderRadius: scale(5),
        alignItems: 'center',
        ...alignment.MBmedium,
        ...alignment.PTmedium,
        ...alignment.PBmedium
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
    unselectedButton: {
        height: scale(40),
        width: '100%',
        backgroundColor: colors.brownColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scale(3),
    },
})
export default styles