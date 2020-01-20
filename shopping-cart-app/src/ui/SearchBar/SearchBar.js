import React from 'react';
import {
    View, Image, TextInput, TouchableOpacity,
} from 'react-native';
import styles from './styles';
import { colors } from '../../utils/colors';

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

export default SearchBar;
