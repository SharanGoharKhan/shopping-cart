import { Dimensions, StyleSheet } from 'react-native';
import { alignment, colors } from '../../utils';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    safeAreaStyle: {
        backgroundColor: colors.headerbackground
    },
    container: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
    },
    body: {
        height: '95%',
        width: '100%',
        alignSelf: 'center'
    },

    // main
    main: {
        height: height * .8,
        width: '100%',
        marginLeft: 0,
        justifyContent: 'flex-start',
        alignItems: 'center',

    },
    searchBarContainer: {
        height: '10%',
        width: '93%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainBodyContainer: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        backgroundColor: colors.themeBackground,

    },
    mainBody: {
        width: '94%',
        height: '93%',
    },
    mixed_text: {
        width: '80%',
        ...alignment.PTxSmall,
        ...alignment.PBxSmall
    },
    main_scroller: {
        height: '93%',
    },
})
export default styles;