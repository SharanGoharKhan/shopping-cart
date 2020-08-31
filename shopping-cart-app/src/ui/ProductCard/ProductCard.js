import React, { useState } from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import { TextDefault } from '../../components'
import { colors, scale } from '../../utils'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

function ProductCard(props) {
    const navigation = useNavigation()
    const [liked, setLiked] = useState(false)
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
                        <View style={styles.priceContainer}>
                            <TextDefault style={{ maxWidth: '70%' }} numberOfLines={1} textColor={colors.fontSecondColor} small>
                                {props.subCategory.title}
                            </TextDefault>
                            <View style={styles.ratingContainer}>
                                <Ionicons name="md-star" size={scale(11)} color="#4165b9" />
                                <TextDefault
                                    textColor={colors.fontSecondColor}
                                    style={{ marginLeft: 2 }}>
                                    {props.reviewData.ratings}
                                </TextDefault>
                                <TextDefault
                                    textColor={colors.fontSecondColor}
                                    style={{ marginLeft: 2 }}
                                    small>
                                    {`( ${props.reviewData.total} )`}
                                </TextDefault>
                            </View>
                        </View>
                    </View>
                    <View style={styles.priceContainer}>
                        <TextDefault style={{ maxWidth: '75%' }} numberOfLines={1} textColor={colors.fontBlue}>
                            ${props.price.toFixed(2)}
                        </TextDefault>
                        <View style={[styles.aboutRestaurant]}>
                            <TouchableOpacity
                                activeOpacity={1}
                                onPress={() => setLiked(prev => !prev)}
                                style={styles.likeContainer}>
                                <Ionicons name={liked ? "ios-heart" : "ios-heart-empty"} size={scale(20)} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ProductCard;