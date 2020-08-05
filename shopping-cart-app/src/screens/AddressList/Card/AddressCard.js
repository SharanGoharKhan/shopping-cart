import React from 'react';
import { View, TouchableOpacity, Image, } from 'react-native';
import styles from './styles';
import { verticalScale, colors, scale } from '../../../utils';
import { TextDefault } from '../../../components/Text';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

/* =============================================================================
<Card />
A component that displays address info.
--------------------------------------------------------------------------------
Props:
  ?
  name: Title of the address ie Home, Work
  country:
  city:
  address:
  poBox:
============================================================================= */

function Card(props) {
    const navigation = useNavigation()
    const isDefault = props.default
    const buttonJSX = isDefault ? renderSelectedButton() : renderUnselectedButton();

    function toggleActive() {
        props.defaultSetter()
    }

    function renderSelectedButton() {
        return (
            <TouchableOpacity
                activeOpacity={0}
                onPress={() => { toggleActive() }} style={styles.selectedBtn}>
                <View style={styles.tickImage}>
                    <MaterialIcons name="check" size={scale(25)} color={colors.selected} />
                </View>
                <TextDefault textColor={colors.fontMainColor} H5>{'My Default Address'}</TextDefault>
            </TouchableOpacity>
        );
    }

    function renderUnselectedButton() {
        return (
            <TouchableOpacity
                activeOpacity={0}
                style={styles.unselectedButton} onPress={() => { toggleActive(); }}>
                <TextDefault textColor={colors.buttonText} H5>
                    {'Mark it as Default Address'}
                </TextDefault>
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerRow}>
                <TextDefault textColor={colors.fontBrown} H4>
                    {' '}{props.item.title}
                </TextDefault>
                <TouchableOpacity
                    activeOpacity={0}
                    onPress={() => navigation.navigate('EditAddress', { ...props.item })}
                >
                    <Image
                        style={{ height: verticalScale(16), width: verticalScale(16) }}
                        source={require('../../../assets/icons/edit.png')}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.address}>
                <TextDefault textColor={colors.fontMainColor}>
                    {props.item.country}
                </TextDefault>
                <TextDefault textColor={colors.fontMainColor}>
                    {props.item.city}
                </TextDefault>
                <TextDefault textColor={colors.fontMainColor}>
                    {props.item.address}
                </TextDefault>
                <TextDefault textColor={colors.fontMainColor}>
                    {props.item.poBox}
                </TextDefault>
            </View>
            <View style={styles.btnContainer}>
                {buttonJSX}
            </View>
        </View>
    );
}

export default Card;