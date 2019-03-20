import { moderateScale } from '../../utils/scaling'
import { colors } from '../../utils/colors'
import { fontStyles } from '../../utils/fontStyles';

/* StyleSheet
============================================================================= */
export default {
    flex: {
        flex:1
    },
    orderContainer: {
        height: '15%',
        width: '100%',
        alignItems: 'flex-end',
        borderBottomColor: colors.lightGrayColor,
        borderWidth: moderateScale(1)
    },
    orderSubContainer: {
        height: '100%',
        width: '95%',
        justifyContent: 'center'
    },
    orderSubContainerTitle: {
        height: '50%',
        width: '100%',
        justifyContent: 'flex-end'
    },
    orderSubContainerTitleText: {
        fontFamily: fontStyles.PoppinsBold,
        color: colors.primaryBlackColor,
        fontSize: moderateScale(16)
    },
    orderSubContainerDes: {
        height: '30%',
        width: '100%',
    },
    orderSubContainerDesText: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(12),
        color: colors.fontGreyColor
    },
    foodItemsContainer: {
        height:'20%',
        width:'100%',
        alignItems:'flex-end',
        borderBottomColor:colors.lightGrayColor,
        borderWidth: moderateScale(1),
        justifyContent: 'center'
    },
    foodItemsSubContainer: {
        width:'95%',
        height: '90%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    leftContainer: {
        width: '25%',
        height: '100%',
    },
    smallText: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(12)
    },
    priceText: {
        fontSize: moderateScale(15),
        fontFamily: fontStyles.PoppinsRegular,
        color: colors.primaryOrangeColor
    },
    middleContainer: {
        width: '40%',
        height: '100%',
    },
    rightContainer: {
        width: '20%',
        height: '100%',
        alignItems: 'center'
    },
    timelineContainer: {
        height: '35%',
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'center',
        borderBottomColor:colors.lightGrayColor,
        borderWidth: moderateScale(1)

    },
    timelineSubContainer: {
        height: '90%',
        width: '95%'
    },
    ratingContainer: {
        backgroundColor: 'white',
        height: '10%',
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'center',
        borderBottomColor:colors.lightGrayColor,
        borderWidth: moderateScale(1)
    },
    ratingSubContainer: {
        height: '90%',
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    ratingStarsContainer: {
        justifyContent:'center',
        width: '60%',
        height: '100%',
        alignItems:'flex-start',
        marginLeft: '5%'

    },
    starsReviewContainer: {
        width: '35%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    starsReviewContainerText: {
        fontFamily: fontStyles.PoppinsBold,
        fontSize: moderateScale(12),
        color: colors.fontBlackColor
    }
}