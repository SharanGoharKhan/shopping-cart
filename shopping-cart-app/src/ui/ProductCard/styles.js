import { scale } from "../../utils/scaling";
import { fontStyles } from "../../utils/fontStyles";
import { colors } from "../../utils/colors";

export default {
    cardContainer: {
        width: '100%',
        height: '100%',
    },
    topCardContainer: {
        width: '100%',
        height: '70%'
    },
    cardImageContainer: {
        width: '100%',
        height: '100%',
        position: 'relative'
    },
    imgResponsive: {
        flex: 1,
        width: undefined,
        height: undefined,
    },
    imgTextContainer: {
        width: '30%',
        height: '15%',
        position: 'absolute',
        top: '8%',
        left: '8%',
        backgroundColor: '#6178DE',
        borderRadius: scale(4),
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgTextStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        color: colors.whiteColor,
        fontSize: scale(10)
    },
    botCardContainer: {
        width: '100%',
        height: '30%',
        backgroundColor: colors.whiteColor
    },
    botSubCardContainer: {
        width: '90%',
        height: '100%',
        flexDirection: 'column',
        marginLeft: '3%',
        marginTop: '3%'
    },
    botCardTextStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: scale(12),
    },
    botIconContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    botPriceContainer: {
        flexDirection:'row',
        width: '60%',
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    botPriceStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        color: '#6178DE',
        fontSize: scale(14)
    },
}