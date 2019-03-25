import React from 'react'
import {View, TouchableOpacity, Text} from 'react-native'

import {mainBtnStyles as styles} from './styles'
/* Config/Constants
============================================================================= */

/* =============================================================================
<TextField />
A TextInput covered by a white background View, greyish border, black text. has 100% width and mod scale 38 height.
--------------------------------------------------------------------------------

Props:
  ?
  onPress Event: send the function to be called for onPress event
  text: send the Text for button
============================================================================= */
const MainBtn = (props) =>{
    return(
        <View style={styles.backgroundColor}>
            <TouchableOpacity 
                onPress={props.onPress}
                style={styles.main_brown_btn}>
                    <Text style={styles.bb_text}> {props.text} </Text>
            </TouchableOpacity>
        </View>
    )
}
/* Export
============================================================================= */
export default MainBtn