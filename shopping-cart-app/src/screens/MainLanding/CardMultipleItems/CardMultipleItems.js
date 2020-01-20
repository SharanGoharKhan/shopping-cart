import React from 'react';
import {
    Text, View, Image, ScrollView, TouchableOpacity,
} from 'react-native';
import styles from './styles';

/* Config/Constants
============================================================================= */
cardData = [
    {
        imageTL: require('../../../assets/images/MainLanding/shop-1-collage-1.png'),
        imageTR: require('../../../assets/images/MainLanding/shop-1-collage-2.png'),
        imageBL: require('../../../assets/images/MainLanding/shop-1-collage-3.png'),
        imageBR: require('../../../assets/images/MainLanding/shop-1-collage-4.png'),
        imageC: require('../../../assets/images/MainLanding/shop-1-avatar.png'),
        title: 'Pink Tulip Loom',
        category: 'Crochet',
    },
    {
        imageTL: require('../../../assets/images/MainLanding/shop-2-collage-1.png'),
        imageTR: require('../../../assets/images/MainLanding/shop-2-collage-2.png'),
        imageBL: require('../../../assets/images/MainLanding/shop-2-collage-3.png'),
        imageBR: require('../../../assets/images/MainLanding/shop-2-collage-4.png'),
        imageC: require('../../../assets/images/MainLanding/shop-2-avatar.png'),
        title: 'EQ Custom Leather Bag',
        category: 'Leather',
    },
    {
        imageTL: require('../../../assets/images/MainLanding/shop-1-collage-1.png'),
        imageTR: require('../../../assets/images/MainLanding/shop-1-collage-2.png'),
        imageBL: require('../../../assets/images/MainLanding/shop-1-collage-3.png'),
        imageBR: require('../../../assets/images/MainLanding/shop-1-collage-4.png'),
        imageC: require('../../../assets/images/MainLanding/shop-1-avatar.png'),
        title: 'Pink Tulip Loom',
        category: 'Crochet',
    },
];

const cardMultipleItems = props => (

    <View style={styles.cardItemsContainer}>
        <View style={styles.cardItemsTextCOntainer}>
            <Text style={styles.cardItemsTextStyles}>Shops we like</Text>
        </View>
        <View style={styles.scrollViewContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                    cardData.map((card, ind) => (
                        <TouchableOpacity
                            onPress={() => props.navigationObj.navigate('ProductListing')}
                            key={ind} style={styles.cardContainer}
                        >
                            <View style={styles.cardTopContainer}>
                                <View style={styles.cardTopSubContainer}>
                                    <View style={styles.w50h50}>
                                        <Image
                                            source={card.imageTL}
                                            resizeMode="cover"
                                            style={styles.imgResponsive}
                                        />
                                    </View>
                                    <View style={styles.w50h50}>
                                        <Image
                                            source={card.imageTR}
                                            resizeMode="cover"
                                            style={styles.imgResponsive}
                                        />
                                    </View>
                                    <View style={styles.w50h50}>
                                        <Image
                                            source={card.imageBL}
                                            resizeMode="cover"
                                            style={styles.imgResponsive}
                                        />
                                    </View>
                                    <View style={styles.w50h50}>
                                        <Image
                                            source={card.imageBR}
                                            resizeMode="cover"
                                            style={styles.imgResponsive}
                                        />
                                    </View>
                                    <View style={styles.centerImgContainer}>
                                        <Image
                                            source={card.imageC}
                                            resizeMode="cover"
                                            style={styles.centerImgStyle}
                                        />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.bottomContainer}>
                                <View style={styles.bottomSubContainer}>
                                    <Text style={styles.bottomTextStyle}>{card.title}</Text>
                                    <Text style={styles.bottomTextStyle}>{card.category}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
        </View>
    </View>
);

export default cardMultipleItems;
