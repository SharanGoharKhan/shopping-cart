import { Dimensions, StyleSheet } from 'react-native';
import { alignment, colors, scale, verticalScale } from '../../utils';
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    safeAreaStyle: {
        backgroundColor: colors.headerbackground
    },
    itemContainer: {
        backgroundColor: colors.backgroudGray,
    },
    line: {
        width: '100%',
        height: StyleSheet.hairlineWidth,
        backgroundColor: colors.medHorizontalLine,
        ...alignment.MTxSmall,
        ...alignment.MBxSmall
    },
    cardContainer: {
        backgroundColor: colors.themeBackground,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        ...alignment.MTxSmall,
        ...alignment.MBxSmall
    },
    card: {
        backgroundColor: colors.container,
        width: '90%',
        flexDirection: 'row',
        borderRadius: scale(8)
    },
    cardLeftContainer: {
        width: '35%',
        borderTopLeftRadius: verticalScale(8),
        borderBottomLeftRadius: verticalScale(8),
    },
    cardRightContainer: {
        width: '60%',
        justifyContent: "space-around",
        ...alignment.MLxSmall,
        ...alignment.PTxSmall,
        ...alignment.PBxSmall
    },
    imgResponsive: {
        flex: 1,
        width: undefined,
        height: undefined,
        borderTopLeftRadius: verticalScale(8),
        borderBottomLeftRadius: verticalScale(8),
    },
    amountContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        ...alignment.MTxSmall,
        ...alignment.MBxSmall
    },
    quantityContainer: {
        width: '40%',
        justifyContent: 'center',
    },
    priceContainer: {
        width: '40%',
        justifyContent: 'center',
    },
    deliverContainer: {
        backgroundColor: colors.backgroudGray,
        justifyContent: 'center',
        ...alignment.PTlarge,
        ...alignment.PBlarge
    },
    deliverSubContainer: {
        width: '100%',
        ...alignment.MLmedium,
        ...alignment.MRmedium
    },
    paymentContainer: {
        backgroundColor: colors.backgroudGray,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        ...alignment.PTlarge,
        ...alignment.PBlarge
    },
    paymentSubContainer: {
        width: '90%',
    },
    twoItems: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    totalContainer: {
        backgroundColor: colors.backgroudGray,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        ...alignment.PTlarge,
        ...alignment.PBlarge
    },
    totalSubContainer: {
        width: '90%',
        justifyContent: 'center',
    },
    trackOrderContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.backgroudGray,
        ...alignment.PTlarge,
        ...alignment.PBlarge
    },
    trackOrderSubContainer: {
        width: '90%',
        backgroundColor: colors.whiteColor,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: scale(4),
        height: scale(80)
    },
    trackStyle: {
        width: '90%',
        height: "60%",
        backgroundColor: colors.blueButton,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: verticalScale(4),
    },
    actionContainer: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: "center",
        borderRadius: scale(4),
        backgroundColor: colors.textBlueColor,
        ...alignment.MTxSmall
    }
})
export default styles
