import React from 'react';
import { View, TextInput } from 'react-native';
import { colors } from '../../utils/colors';

import Styles from './styles';
/* Config/Constants
============================================================================= */

/* =============================================================================
<TextField />
A TextInput covered by a white background View, greyish border, black text. has 100% width and mod scale 38 height.
--------------------------------------------------------------------------------

Props:
  ?
  onChange Event: send the function to be called for onChange event
  placeHolderText: send the Text for placeholder
  placeHolderColor: sent the Color for placeholder
  containerStyle: allows user to override the container style
============================================================================= */
const TextField = (props) => {
    const placeholderColor = props.placeholderColor ? props.placeholderColor : colors.primaryBlackColor;
    return (
        <View style={[Styles.input_view, props.containerStyle]}>
        <TextInput
                onChange={props.onChange}
                style={Styles.input}
                placeholderTextColor={placeholderColor}
                placeholder={props.placeholderText}
          />
      </View>
    );
};
/* Export
============================================================================= */
export default TextField;
