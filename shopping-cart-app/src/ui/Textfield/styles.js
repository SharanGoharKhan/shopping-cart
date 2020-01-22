import { scale } from '../../utils/scaling';
import { colors } from '../../utils/colors';
import { fontStyles } from '../../utils/fontStyles';

export default {
    input: {
        backgroundColor: colors.secondaryWhiteColor,
        borderRadius: 3,
        height: scale(38),
        borderWidth: 1,
        borderColor: colors.backgroudGray,
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: scale(12),
        paddingLeft: '3%',
    },
    errorText: {
        fontSize:scale(10),
        marginTop:scale(3),
        marginBottom:scale(3),
        fontFamily: fontStyles.PoppinsRegular,
        color: 'red'
    },
    borderRed: {
        borderColor:'red'
    }
};
