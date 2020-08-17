import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { colors } from '../../../utils';
import styles from './styles'
import { TextDefault } from '../../../components';

function VariationSection(props) {
    const selected = props.selected
    function onChange(item) {
        props.handleAttributes(props.variation._id, item)
    }
    return (
        <View>
            <TextDefault textColor={colors.fontSecondColor} bold>
                {props.variation.title}
            </TextDefault>
            <View style={styles.mainContainer}>
                {
                    props.variation.options.map((item, index) => (
                        <TouchableOpacity
                            key={item._id}
                            activeOpacity={0}
                            onPress={() => onChange(item)}
                            style={item._id === selected ? [styles.container, { borderColor: colors.blueColor }] : styles.container}>
                            <TextDefault textColor={item._id === selected ? colors.blueColor : colors.fontSecondColor}>
                                {item.title}
                            </TextDefault>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </View>
    )
}

export default VariationSection;