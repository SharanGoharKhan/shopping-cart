import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const CardCategory = props => (
  <TouchableOpacity
    onPress={props.onPress}
    style={[styles.container]}
  >
    <Text style={styles.text}>{props.text}</Text>
  </TouchableOpacity>
);

export default CardCategory;
