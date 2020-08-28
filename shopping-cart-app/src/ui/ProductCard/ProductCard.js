import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import { TextDefault } from '../../components'
import { colors, scale } from '../../utils'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

function ProductCard(props) {
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => navigation.navigate('ProductDescription', { product: props })}
            style={[styles.cardContainer, props.styles]}>
            <View style={styles.topCardContainer}>
                <Image
                    source={{ uri: props.image[0] }}
                    defaultSource={require('../../assets/images/formBackground.png')}
                    resizeMode="cover"
                    style={styles.imgResponsive}
                />
            </View>
            <View style={styles.botCardContainer}>
                <View style={styles.botSubCardContainer}>
                    <View>
                        <TextDefault numberOfLines={1} textColor={colors.fontMainColor}>
                            {props.title}
                        </TextDefault>
                        <TextDefault numberOfLines={1} textColor={colors.fontSecondColor} small>
                            {props.subCategory.title}
                        </TextDefault>
                    </View>
                    <View style={styles.priceContainer}>
                        <TextDefault style={{ maxWidth: '70%' }} numberOfLines={1} textColor={colors.fontBlue}>
                            ${props.price.toFixed(2)}
                        </TextDefault>
                        <View style={[styles.aboutRestaurant]}>
                            <Ionicons name="md-star" size={scale(11)} color="#4165b9" />
                            <TextDefault
                                textColor={colors.fontSecondColor}
                                style={{ marginLeft: 2 }}
                                bolder>
                                4.4
                            </TextDefault>
                            <TextDefault
                                textColor={colors.fontSecondColor}
                                style={{ marginLeft: 2 }}
                                small>
                                (2)
                </TextDefault>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ProductCard;