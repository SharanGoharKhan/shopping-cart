import { StatusBar, Dimensions } from 'react-native';
import { verticalScale, scale, colors } from '../../utils';
const { width, height } = Dimensions.get('window');

export default {
    flex: {
        flex: 1,
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
        height: StatusBar.currentHeight,
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
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: colors.themeBackground,
    },
    mainBody: {
        width: '100%',
        paddingLeft: '3%',
        paddingRight: '3%',
    },
    mixed_text: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: verticalScale(20),
        width: '95%',
        marginTop: scale(5),
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: verticalScale(15),
    },
    // footer
    footer: {
        backgroundColor: colors.themeBackground,
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

};
