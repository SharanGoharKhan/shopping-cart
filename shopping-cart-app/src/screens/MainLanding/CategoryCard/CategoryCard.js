import React from 'react';
import {
    Text, TouchableOpacity, View, Image,
} from 'react-native';
import styles from './styles';

const icons = {
    watch: require('../../../assets/images/MainLanding/watch.png'),
    arts_and_crafts: require('../../../assets/images/MainLanding/arts_and_crafts.png'),
    event_ideas: require('../../../assets/images/MainLanding/event_ideas.png'),
    fashion: require('../../../assets/images/MainLanding/fashion.png'),
    drinks: require('../../../assets/images/MainLanding/drinks.png'),
    more: require('../../../assets/images/MainLanding/more.png')
}

function CategoryCard(props) {
    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => props.navigationObj.navigate('ProductListing')}
            style={styles.container}>
            <View style={styles.textViewContainer}>
                <Text numberOfLines={1} style={styles.textStyle}>{props.category.label}</Text>
            </View>
            <View style={styles.imgContainer}>
                <View style={styles.imgSubContainer}>
                    <Image
                        style={styles.imgResponsive}
                        source={icons[props.category.icon]}
                        resizeMode="contain"
                    />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default CategoryCard;
