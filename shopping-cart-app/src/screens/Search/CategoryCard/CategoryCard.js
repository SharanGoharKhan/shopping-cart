import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import { colors } from '../../../utils/colors'

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
        <TouchableOpacity style={[styles.container]}>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    )
}
/* Export
============================================================================= */
export default CardCategory