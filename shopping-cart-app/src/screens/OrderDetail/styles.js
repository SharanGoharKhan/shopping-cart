import { Dimensions, StyleSheet } from 'react-native';
import { alignment, colors, scale, verticalScale, fontStyles } from '../../utils';
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
        backgroundColor: colors.backgroudGray,
        width: '100%',
        height: scale(90),
        justifyContent: 'center',
        alignItems: 'center',
        ...alignment.MTsmall
    },
    card: {
        backgroundColor: colors.whiteColor,
        width: '90%',
        height: '100%',
        flexDirection: 'row',
        borderRadius: verticalScale(8),
        borderTopLeftRadius: verticalScale(8),
        borderBottomLeftRadius: verticalScale(8),
    },
    cardLeftContainer: {
        width: '35%',
        height: '100%',
        borderTopLeftRadius: verticalScale(8),
        borderBottomLeftRadius: verticalScale(8),
    },
    cardRightContainer: {
        width: '60%',
        height: '100%',
        ...alignment.MLxSmall,
        justifyContent: "space-around",
    },
    imgResponsive: {
        flex: 1,
        width: undefined,
        height: undefined,
        borderTopLeftRadius: verticalScale(8),
        borderBottomLeftRadius: verticalScale(8),
    },
    marginTop5: {
        marginTop: '5%',
    },
    amountContainer: {
        width: '100%',
        height: '30%',
        flexDirection: 'row',
        marginTop: '10%',
        justifyContent: 'space-between',
    },
    quantityContainer: {
        width: '40%',
        height: '100%',
        justifyContent: 'center',
    },
    priceContainer: {
        width: '40%',
        height: '100%',
        justifyContent: 'center',
    },
    deliverContainer: {
        width: '100%',
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
        borderRadius: verticalScale(4),
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
    trackStyleText: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(16),
        color: colors.whiteColor,
    },
    actionContainer: {
        width: '40%',
        height: '25%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: verticalScale(4),
        backgroundColor: colors.textBlueColor,
    }
})
export default styles
