import React from 'react'
import { Text, View, Image, ScrollView } from 'react-native'
import styles from './styles'
/* Config/Constants
============================================================================= */
/* =============================================================================
<cardMultipleItems />
--------------------------------------------------------------------------------

Props:
 ?
============================================================================= */

const cardMultipleItems = () => (

    <View style={styles.cardItemsContainer}>
        <View style={styles.cardItemsTextCOntainer}>
            <Text style={styles.cardItemsTextStyles}>Shops we like</Text>
        </View>
        <View style={styles.scrollViewContainer}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.cardContainer}>
                    <View style={styles.cardTopContainer}>
                        <View style={styles.cardTopSubContainer}>
                            <View style={styles.w50h50}>
                                <Image
                                    source={require('../../../assets/images/MainLanding/shop-1-collage-1.png')}
                                    resizeMode="cover"
                                    style={styles.imgResponsive}
                                />
                            </View>
                            <View style={styles.w50h50}>
                                <Image
                                    source={require('../../../assets/images/MainLanding/shop-1-collage-2.png')}
                                    resizeMode="cover"
                                    style={styles.imgResponsive}
                                />
                            </View>
                            <View style={styles.w50h50}>
                                <Image
                                    source={require('../../../assets/images/MainLanding/shop-1-collage-3.png')}
                                    resizeMode="cover"
                                    style={styles.imgResponsive}
                                />
                            </View>
                            <View style={styles.w50h50}>
                                <Image
                                    source={require('../../../assets/images/MainLanding/shop-1-collage-4.png')}
                                    resizeMode="cover"
                                    style={styles.imgResponsive}
                                />
                            </View>
                            <View style={styles.centerImgContainer}>
                                <Image
                                    source={require('../../../assets/images/MainLanding/shop-1-avatar.png')}
                                    resizeMode="cover"
                                    style={styles.centerImgStyle}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.bottomContainer}>
                        <View style={styles.bottomSubContainer}>
                            <Text style={styles.bottomTextStyle}>Pink Tulip Loom</Text>
                            <Text style={styles.bottomTextStyle}>Crochet</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.cardContainer}>
                    <View style={styles.cardTopContainer}>
                        <View style={styles.cardTopSubContainer}>
                            <View style={styles.w50h50}>
                                <Image
                                    source={require('../../../assets/images/MainLanding/shop-2-collage-1.png')}
                                    resizeMode="cover"
                                    style={styles.imgResponsive}
                                />
                            </View>
                            <View style={styles.w50h50}>
                                <Image
                                    source={require('../../../assets/images/MainLanding/shop-2-collage-2.png')}
                                    resizeMode="cover"
                                    style={styles.imgResponsive}
                                />
                            </View>
                            <View style={styles.w50h50}>
                                <Image
                                    source={require('../../../assets/images/MainLanding/shop-2-collage-3.png')}
                                    resizeMode="cover"
                                    style={styles.imgResponsive}
                                />
                            </View>
                            <View style={styles.w50h50}>
                                <Image
                                    source={require('../../../assets/images/MainLanding/shop-2-collage-4.png')}
                                    resizeMode="cover"
                                    style={styles.imgResponsive}
                                />
                            </View>
                            <View style={styles.centerImgContainer}>
                                <Image
                                    source={require('../../../assets/images/MainLanding/shop-2-avatar.png')}
                                    resizeMode="cover"
                                    style={styles.centerImgStyle}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.bottomContainer}>
                        <View style={styles.bottomSubContainer}>
                            <Text style={styles.bottomTextStyle}>EQ Custom Leather Bag</Text>
                            <Text style={styles.bottomTextStyle}>Leather</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.cardContainer}>
                    <View style={styles.cardTopContainer}>
                        <View style={styles.cardTopSubContainer}>
                            <View style={styles.w50h50}>
                                <Image
                                    source={require('../../../assets/images/MainLanding/shop-1-collage-1.png')}
                                    resizeMode="cover"
                                    style={styles.imgResponsive}
                                />
                            </View>
                            <View style={styles.w50h50}>
                                <Image
                                    source={require('../../../assets/images/MainLanding/shop-1-collage-2.png')}
                                    resizeMode="cover"
                                    style={styles.imgResponsive}
                                />
                            </View>
                            <View style={styles.w50h50}>
                                <Image
                                    source={require('../../../assets/images/MainLanding/shop-1-collage-3.png')}
                                    resizeMode="cover"
                                    style={styles.imgResponsive}
                                />
                            </View>
                            <View style={styles.w50h50}>
                                <Image
                                    source={require('../../../assets/images/MainLanding/shop-1-collage-4.png')}
                                    resizeMode="cover"
                                    style={styles.imgResponsive}
                                />
                            </View>
                            <View style={styles.centerImgContainer}>
                                <Image
                                    source={require('../../../assets/images/MainLanding/shop-1-avatar.png')}
                                    resizeMode="cover"
                                    style={styles.centerImgStyle}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.bottomContainer}>
                        <View style={styles.bottomSubContainer}>
                            <Text style={styles.bottomTextStyle}>Pink Tulip Loom</Text>
                            <Text style={styles.bottomTextStyle}>Crochet</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    </View>
)
/* Export
============================================================================= */
export default cardMultipleItems;

