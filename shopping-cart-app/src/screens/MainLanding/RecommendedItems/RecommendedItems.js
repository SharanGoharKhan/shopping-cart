import React from 'react';
import {
    Text, View, Image, ScrollView, TouchableOpacity,
} from 'react-native';
import styles from './styles';

const itemData = [
    {
        title: 'EQ | Custom Leather',
        category: 'Bags',
        price: '34',
        image: require('../../../assets/images/MainLanding/recommend-1.png'),
    },
    {
        title: 'Southdown Spinning',
        category: 'Fibre',
        price: '7.5',
        image: require('../../../assets/images/MainLanding/shop-1-collage-4.png'),
    },
    {
        title: 'Bunny hill,goods',
        category: 'kids interior',
        price: '19',
        image: require('../../../assets/images/MainLanding/recommended-2.png'),
    },
];

const recommendedItems = props => (

    <View style={styles.popularItemsContainer}>
        <View style={styles.popularItemsContainerText}>
            <Text style={styles.popularItemsContainerTextStyle}>Recommended for you</Text>
        </View>
        <View style={styles.scrollViewContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                    itemData.map((item, ind) => (
                        <TouchableOpacity
                            onPress={() => props.navigationObj.navigate('ProductListing')}
                            key={ind} style={styles.cardContainer}
                        >
                            <View style={styles.topCardContainer}>
                                <View style={styles.cardImageContainer}>
                                    <Image
                                        source={item.image}
                                        resizeMode="cover"
                                        style={styles.imgResponsive}
                                    />
                                </View>
                            </View>
                            <View style={styles.botCardContainer}>
                                <View style={styles.botSubCardContainer}>
                                    <Text style={styles.botCardTextStyle}>{item.title}</Text>
                                    <Text style={styles.botCardTextStyle}>{item.category}</Text>
                                    <View style={styles.botIconContainer}>
                                        <View style={styles.botPriceContainer}>
                                            <Text style={styles.botPriceStyle}>{item.price}{' '}PKR</Text>
                                        </View>
                                        <View style={styles.botIconCartContainer}>
                                            <View style={styles.botIconCartSubContainer}>
                                                <Image
                                                    source={require('../../../assets/images/MainLanding/shopping_cart.png')}
                                                    resizeMode="contain"
                                                    style={styles.imgResponsive}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
        </View>
    </View>
);

export default recommendedItems;
