import React from 'react'
import { View, Text, Image, TextInput  } from 'react-native'

import styles from './styles'
import { moderateScale } from '../../utils/scaling';
import { colors } from '../../utils/colors';


/* Config/Constants
============================================================================= */


/* =============================================================================
<SearchBar />
--------------------------------------------------------------------------------

Props:
  ?

============================================================================= */
class SearchBar extends React.Component {
    constructor(props){
        super(props)
    }

    render() {

        return (
            <View style={styles.container}>
                <TextInput 
                    style={styles.textfield}
                    placeholder="What are you looking for?"
                    placeholderTextColor={colors.primaryBlackColor}/>
                <Image 
                    style={styles.image}
                    source = {require('../../assets/icons/search.png')}
                    />
            </View>
        )
    }
}
/* Export
============================================================================= */
export default SearchBar