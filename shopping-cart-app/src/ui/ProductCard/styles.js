import { StyleSheet } from "react-native";
import { alignment, colors } from "../../utils";

const styles = StyleSheet.create({
    cardContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.medHorizontalLine,
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
    botCardContainer: {
        width: '100%',
        height: '30%',
        alignItems: "center",
        backgroundColor: colors.container,
        ...alignment.PTxSmall
    },
    botSubCardContainer: {
        width: '90%',
        height: '100%',
        justifyContent: 'space-between'
    }
})
export default styles