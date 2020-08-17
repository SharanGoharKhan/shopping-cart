import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import { TextDefault } from '../../components'
import { colors } from '../../utils'
import { useNavigation } from '@react-navigation/native'

function ProductCard(props) {
    const navigation = useNavigation()
    console.log(props)
    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => navigation.navigate('ProductDescription', { productId: props._id })}
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
                    <TextDefault textColor={colors.fontBlue}>
                        ${props.price.toFixed(2)}
                    </TextDefault>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ProductCard;