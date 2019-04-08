import React from 'react';
import {
    View, Text, Image, TextInput, TouchableOpacity,
} from 'react-native';

import styles from './styles';
import { moderateScale } from '../../utils/scaling';
import { colors } from '../../utils/colors';


/* Config/Constants
============================================================================= */


/* =============================================================================
<SearchBar />
--------------------------------------------------------------------------------

Props:
  ?
    placeholderText: text for placeholder
============================================================================= */
class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
            <TextInput
                    style={styles.textfield}
                placeholder={this.props.placeholderText}
                    placeholderTextColor={colors.primaryBlackColor}
              />
                <TouchableOpacity onPress={this.props.onPress}>
                <Image
                      style={styles.image}
                      source={require('../../assets/icons/search.png')}
                    />
              </TouchableOpacity>
          </View>
        );
    }
}
/* Export
============================================================================= */
export default SearchBar;
