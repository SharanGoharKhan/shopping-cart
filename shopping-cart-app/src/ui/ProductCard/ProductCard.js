import React from 'react'
import {
    Text, View, Image, TouchableOpacity
} from 'react-native'
import styles from './styles'

const icons = {
    shop_1_collage_4: require('../../assets/images/MainLanding/shop_1_collage_4.png'),
    recommended_2: require('../../assets/images/MainLanding/recommended_2.png'),
    recommend_1: require('../../assets/images/MainLanding/recommend_1.png'),
}

function ProductCard(props) {
    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => props.navigationObj.navigate('ProductListing')}
            style={[styles.cardContainer,props.styles]}>
            <View style={styles.topCardContainer}>
                <View style={styles.cardImageContainer}>
                    <Image
                        source={icons[props.item.img]}
                        resizeMode="cover"
                        style={styles.imgResponsive}
                    />
                </View>
                {!props.item.tag == '' ? <View style={styles.imgTextContainer}>
                    <Text style={styles.imgTextStyle}>{props.item.tag}</Text>
                </View> : null}
            </View>
            <View style={styles.botCardContainer}>
                <View style={styles.botSubCardContainer}>
                    <Text numberOfLines={1} style={styles.botCardTextStyle}>{props.item.title}</Text>
                    <Text numberOfLines={1} style={styles.botCardTextStyle}>{props.item.category}</Text>
                    <View style={styles.botIconContainer}>
                        <View style={styles.botPriceContainer}>
                            <Text style={[styles.botPriceStyle, props.item.tag ? { textDecorationLine: 'line-through' } : null]}>{props.item.price} PKR</Text>
                            {!props.item.tag == '' ? <Text style={styles.botPriceStyle}>{props.item.price} PKR</Text> : null}
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ProductCard;