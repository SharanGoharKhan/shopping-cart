import { moderateScale } from '../../utils/scaling'
import { colors } from '../../utils/colors'
import { fontStyles } from '../../utils/fontStyles';

import {StatusBar} from 'react-native'

export default{
    container:{
           zIndex:2
    },
    main_container:{
        flexDirection: 'row',zIndex:2,
        backgroundColor: 'rgba(100,100,20,0.2)'
    },
    text:{
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: moderateScale(16),
        
    },
    animated_container:{
        backgroundColor: colors.secondaryWhiteColor,
        position: 'absolute',
        top: '100%',
        width: '100%',
        zIndex:3
    }
}