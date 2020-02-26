import { StatusBar, Platform } from 'react-native';
import { verticalScale, scale } from '../../utils/scaling';
import { colors } from '../../utils/colors';
import { fontStyles } from '../../utils/fontStyles';

export default {
    flex: {
        flex: 1
    },
    spacer: {
        marginTop: scale(10)
    },
    textStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: scale(13)
    },
    totalStyle: {
        color: colors.blueColor
    },
    summaryContainer: {
        marginTop: scale(30),
        width: '90%', 
        backgroundColor: colors.backgroudGray, 
        alignSelf: 'center', 
        padding: scale(10)
    },
    rowContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    lineStyle: {
        width: '99%', 
        height: 1, 
        backgroundColor: colors.grayLinesColor, 
        alignSelf: 'center'
    },
    btnContainer: {
        backgroundColor: colors.textBlueColor
    },
    btnText: {
        color: colors.whiteColor
    }
};