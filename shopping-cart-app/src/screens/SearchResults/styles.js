import { StatusBar, Dimensions, Platform, StyleSheet } from 'react-native';
import { verticalScale, alignment, colors } from '../../utils';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    safeAreaStyle: {
        backgroundColor: colors.headerbackground
    },
    mainContainer: {
        marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    },
    container: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
    },
    statusbarImage: {
        height: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
        backgroundColor: 'black',
    },
    body: {
        height: '95%',
        width: '100%',
        alignSelf: 'center',
    },
    main_scroller: {
        marginBottom: verticalScale(10),
    },

    // header
    header: {
        height: height * .08,
        width: '95%',
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center'

    },

    // main
    main: {
        height: height * .8,
        width: '100%',
        marginLeft: 0,
        justifyContent: 'center',
        alignItems: 'center',

    },
    searchBarContainer: {
        height: '10%',
        width: '93%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainBodyContainer: {
        height: '90%',
        width: '100%',
        alignItems: 'center',
        backgroundColor: colors.themeBackground,

    },
    mainBody: {
        width: '93%',
        height: '93%',
    },
    mixed_text: {
        width: '80%',
    },
    main_scroller: {
        height: '93%',
    },
    // footer
    footer: {
        backgroundColor: colors.themeBackground,
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    filter: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        width: '100%',
        ...alignment.PLsmall,
        ...alignment.PRsmall,
    },
    filterButton: {
        width: '20%',
        height: '100%',
        alignItems: 'flex-end',
        ...alignment.PLsmall,
        ...alignment.PTmedium,
        ...alignment.PBmedium,
    }
})
export default styles;