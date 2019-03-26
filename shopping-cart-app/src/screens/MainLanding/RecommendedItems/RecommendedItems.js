import React from 'react'
import { Text, View, Image, ScrollView } from 'react-native'
import styles from './styles'

/* Config/Constants
============================================================================= */

/* =============================================================================
<recommendedItems />
--------------------------------------------------------------------------------

Props:
    ?
============================================================================= */

const recommendedItems = () => (

    <View style={styles.popularItemsContainer}>
        <View style={styles.popularItemsContainerText}>
            <Text style={styles.popularItemsContainerTextStyle}>Recommended for you</Text>
        </View>
        <View style={styles.scrollViewContainer}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.cardContainer}>
                    <View style={styles.topCardContainer}>
                        <View style={styles.cardImageContainer}>
                            <Image
                                source={require('../../../assets/images/MainLanding/recommend-1.png')}
                                resizeMode="cover"
                                style={styles.imgResponsive}
                            />
                        </View>
                    </View>
                    <View style={styles.botCardContainer}>
                        <View style={styles.botSubCardContainer}>
                            <Text style={styles.botCardTextStyle}>EQ | Custom Leather</Text>
                            <Text style={styles.botCardTextStyle}>Bags</Text>
                            <View style={styles.botIconContainer}>
                                <View style={styles.botPriceContainer}>
                                    <Text style={styles.botPriceStyle}>34 KWD</Text>
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
                </View>
                <View style={styles.cardContainer}>
                    <View style={styles.topCardContainer}>
                        <View style={styles.cardImageContainer}>
                            <Image
                                source={require('../../../assets/images/MainLanding/shop-1-collage-4.png')}
                                resizeMode="cover"
                                style={styles.imgResponsive}
                            />
                        </View>
                    </View>
                    <View style={styles.botCardContainer}>
                        <View style={styles.botSubCardContainer}>
                            <Text style={styles.botCardTextStyle}>Southdown Spinning</Text>
                            <Text style={styles.botCardTextStyle}>Fibre</Text>
                            <View style={styles.botIconContainer}>
                                <View style={styles.botPriceContainer}>
                                    <Text style={styles.botPriceStyle}>7.5 KWD</Text>
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
                </View>
                <View style={styles.cardContainer}>
                    <View style={styles.topCardContainer}>
                        <View style={styles.cardImageContainer}>
                            <Image
                                source={require('../../../assets/images/MainLanding/recommended-2.png')}
                                resizeMode="cover"
                                style={styles.imgResponsive}
                            />
                        </View>
                    </View>
                    <View style={styles.botCardContainer}>
                        <View style={styles.botSubCardContainer}>
                            <Text style={styles.botCardTextStyle}>Bunny hill,goods for</Text>
                            <Text style={styles.botCardTextStyle}>kids interior</Text>
                            <View style={styles.botIconContainer}>
                                <View style={styles.botPriceContainer}>
                                    <Text style={styles.botPriceStyle}>19 KWD</Text>
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
                </View>
            </ScrollView>
        </View>
    </View>
)
/* Export
============================================================================= */
export default recommendedItems;

