import React from 'react';
import { TextInput, Text } from 'react-native';
import styles from './styles';

function TextField(props) {
  return (
    <>
      <TextInput
        style={[styles.input, props.style, props.errorText && styles.borderRed]}
        onChange={props.onChange}
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderTextColor}
      />
      {props.errorText && <Text style={styles.errorText}>{props.errorText}</Text>}
    </>
  );
};

export default TextField;
