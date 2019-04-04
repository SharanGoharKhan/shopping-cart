import React from 'react'
import { Text,View, Image, ScrollView, TouchableOpacity } from 'react-native'
import styles from './styles'

/* Config/Constants
============================================================================= */

/* =============================================================================
<popularItems />
--------------------------------------------------------------------------------

Props:
    ?
============================================================================= */

const popularItems = (props) => (

    <View style={styles.popularItemsContainer}>
        <View style={styles.popularItemsContainerText}>
            <Text style={styles.popularItemsContainerTextStyle}>Popular</Text>
        </View>
        <View style={styles.scrollViewContainer}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <TouchableOpacity
                onPress={() => props.navigationObj.navigate('ProductListing')}
                style={styles.cardContainer}>
                    <View style={styles.topCardContainer}>
                        <View style={styles.cardImageContainer}>
                            <Image
                                source={require('../../../assets/images/MainLanding/shop-1-collage-4.png')}
                                resizeMode="cover"
                                style={styles.imgResponsive}
                            />
                        </View>
                        <View style={styles.imgTextContainer}>
                            <Text style={styles.imgTextStyle}>New</Text>
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
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => props.navigationObj.navigate('ProductListing')}
                style={styles.cardContainer}>
                    <View style={styles.topCardContainer}>
                        <View style={styles.cardImageContainer}>
                            <Image
                                source={require('../../../assets/images/MainLanding/recommended-2.png')}
                                resizeMode="cover"
                                style={styles.imgResponsive}
                            />
                        </View>
                        <View style={{ width: '30%', height: '15%', position: 'absolute', top: '8%', left: '8%', backgroundColor: '#6178DE', borderRadius: 3, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={styles.imgTextStyle}>50% Off</Text>
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
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => props.navigationObj.navigate('ProductListing')} 
                style={styles.cardContainer}>
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
                </TouchableOpacity>
            </ScrollView>
        </View>
    </View>
)
/* Export
============================================================================= */
export default popularItems;

