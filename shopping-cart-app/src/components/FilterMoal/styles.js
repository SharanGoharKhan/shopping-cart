import { StyleSheet, Dimensions } from 'react-native'
import { colors, alignment, scale, verticalScale } from '../../utils'
const { height } = Dimensions.get('window')

const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    mainContainer: {
        backgroundColor: colors.themeBackground
    },
    headerContainer: {
        width: '100%',
        height: height * 0.07,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: colors.horizontalLine
    },
    headerContents: {
        width: '90%',
        height: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    saleContainer: {
        width: '90%',
        alignSelf: 'center',
        ...alignment.MTlarge
    },
    itemContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        ...alignment.MTmedium,
    },
    priceBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        ...alignment.PTsmall,
        ...alignment.PBsmall
    },
    buttonContainer: {
        width: '100%',
        height: height * 0.06,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.buttonBackground
    },
    selectedBoolContainer: {
        width: '47%',
        height: verticalScale(30),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        backgroundColor: colors.buttonBackground,
        borderWidth: 1,
        borderColor: '#dde3e7'
    },
    unselectedBoolContainer: {
        width: '47%',
        height: verticalScale(30),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        backgroundColor: colors.container,
        borderWidth: 1,
        borderColor: '#dde3e7'
    },
    filterContainer: {
        alignItems: 'center'
    },
    trackStyle: {
        height: 4,
        borderRadius: 4,
        backgroundColor: colors.fontMainColor,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#dde3e7'
    },
    markerStyle: {
        width: scale(14),
        height: scale(14),
        backgroundColor: colors.themeBackground,
        shadowColor: 'rgba(0, 0, 0, 0.15)',
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: 9,
        shadowOpacity: 1,
        borderStyle: 'solid',
        borderWidth: 3,
        borderColor: colors.radioOuterColor
    },
    bottomContainer: {
        width: '90%',
        alignSelf: 'center',
        ...alignment.MTlarge
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        ...alignment.MTlarge
    },
    priceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
export default styles
