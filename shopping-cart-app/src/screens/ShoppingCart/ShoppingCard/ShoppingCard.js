import React, { useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { TextDefault } from '../../../components'
import { colors, scale, alignment } from '../../../utils';

const images = {
    shop_2_collage_2: require('../../../assets/images/MainLanding/shop-2-collage-2.png'),
    belt: require('../../../assets/images/ProductListing/belt.png')
}

function ShoppingCard(props) {
    const [liked, setLiked] = useState(false)
    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <View style={styles.imgContainer}>
                    <Image
                        source={images[props.item.image]}
                        style={styles.imgResponsive}
                        resizeMode="cover"
                    />
                </View>
                <View style={styles.itemContainer}>
                    <View style={styles.itemDetailContainer}>
                        <TextDefault textColor={colors.fontMainColor} numberOfLines={1} H5>
                            {props.item.name}
                        </TextDefault>
                        <TextDefault textColor={colors.fontBrown} numberOfLines={1} small>
                            {props.item.category}
                        </TextDefault>
                    </View>
                    <View style={styles.quantityContainer}>
                        <TextDefault textColor={colors.fontSecondColor} H4>
                            {props.item.size}
                        </TextDefault>
                        <View style={styles.quantitySelContainer}>
                            <TouchableOpacity
                                activeOpacity={0}
                                style={styles.quantityIconStyle}>
                                <Ionicons name="ios-arrow-back" size={scale(20)} color={colors.fontSecondColor} />
                            </TouchableOpacity>
                            <TextDefault textColor={colors.fontSecondColor} H5>
                                {props.item.quantity}
                            </TextDefault>
                            <TouchableOpacity
                                activeOpacity={0}
                                style={[styles.quantityIconStyle, { paddingRight: 0 }]}>
                                <Ionicons name="ios-arrow-forward" size={scale(20)} color={colors.fontSecondColor} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.bottomContainer}>
                        <TouchableOpacity
                            activeOpacity={0}
                            onPress={() => setLiked(!liked)}
                            style={styles.likeContainer}>
                            <Ionicons name={liked ? "ios-heart" : "ios-heart-empty"} size={scale(20)} color={colors.fontSecondColor} />
                            <TextDefault style={{ ...alignment.MLxSmall }} textColor={colors.fontSecondColor} small>
                                {'Save'}
                            </TextDefault>
                        </TouchableOpacity>
                        <View style={styles.priceContainer}>
                            <TextDefault textColor={colors.google} lineOver>
                                {'$'}{props.item.prev_price}
                            </TextDefault>
                            <TextDefault style={{ ...alignment.MLxSmall }} textColor={colors.blueColor} H5 bold>
                                {'$'}{props.item.new_price}
                            </TextDefault>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}
export default ShoppingCard;