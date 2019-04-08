import React from 'react'
import { Text, TouchableOpacity} from 'react-native'

import styles from './styles'
/* =============================================================================
<CardCategory />
--------------------------------------------------------------------------------

Props:
  ?
  text: text content of the card
============================================================================= */
const CardCategory = (props) =>{
    return(
        <TouchableOpacity
        onPress={props.onPress}
        style={[styles.container]}>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    )
}
/* Export
============================================================================= */
export default CardCategory