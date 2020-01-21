import React from 'react';
import {
    Text, TouchableOpacity, View, Image,
} from 'react-native';
import styles from './styles';

function CardsSection(props) {
    return (
        <View style={styles.cardsContainer}>
            <View style={styles.rowContainer}>
                <TouchableOpacity
                    onPress={() => props.navigationObj.navigate('ProductListing')}
                    style={styles.cardBtnContainer}
                >
                    <View style={styles.textViewContainer}>
                        <Text style={styles.textStyle}>Accessories</Text>
                    </View>
                    <View style={styles.imgContainer}>
                        <View style={styles.imgSubContainer}>
                            <Image
                                style={styles.imgResponsive}
                                source={require('../../../assets/images/MainLanding/watch.png')}
                                resizeMode="contain"
                            />
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => props.navigationObj.navigate('ProductListing')}
                    style={styles.cardBtnContainer}
                >
                    <View style={styles.textViewContainer}>
                        <Text style={styles.textStyle}>Arts & Crafts</Text>
                    </View>
                    <View style={styles.imgContainer}>
                        <View style={styles.imgSubContainer}>
                            <Image
                                style={styles.imgResponsive}
                                source={require('../../../assets/images/MainLanding/arts_and_crafts.png')}
                                resizeMode="contain"
                            />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.rowContainer}>
                <TouchableOpacity
                    onPress={() => props.navigationObj.navigate('ProductListing')}
                    style={styles.cardBtnContainer}
                >
                    <View style={styles.textViewContainer}>
                        <Text style={styles.textStyle}>Event Ideas</Text>
                    </View>
                    <View style={styles.imgContainer}>
                        <View style={styles.imgSubContainer}>
                            <Image
                                style={styles.imgResponsive}
                                source={require('../../../assets/images/MainLanding/event_ideas.png')}
                                resizeMode="contain"
                            />
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => props.navigationObj.navigate('ProductListing')}
                    style={styles.cardBtnContainer}
                >
                    <View style={styles.textViewContainer}>
                        <Text style={styles.textStyle}>Fashions</Text>
                    </View>
                    <View style={styles.imgContainer}>
                        <View style={styles.imgSubContainer}>
                            <Image
                                style={styles.imgResponsive}
                                source={require('../../../assets/images/MainLanding/fashion.png')}
                                resizeMode="contain"
                            />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.rowContainer}>
                <TouchableOpacity
                    onPress={() => props.navigationObj.navigate('ProductListing')}
                    style={styles.cardBtnContainer}
                >
                    <View style={styles.textViewContainer}>
                        <Text style={styles.textStyle}>Food & Drinks</Text>
                    </View>
                    <View style={styles.imgContainer}>
                        <View style={styles.imgSubContainer}>
                            <Image
                                style={styles.imgResponsive}
                                source={require('../../../assets/images/MainLanding/drinks.png')}
                                resizeMode="contain"
                            />
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => props.navigationObj.navigate('ProductListing')}
                    style={styles.cardBtnContainer}
                >
                    <View style={styles.textViewContainer}>
                        <Text style={styles.textStyle}>More</Text>
                    </View>
                    <View style={styles.imgContainer}>
                        <View style={styles.imgSubContainer}>
                            <Image
                                style={styles.imgResponsive}
                                source={require('../../../assets/images/MainLanding/more.png')}
                                resizeMode="contain"
                            />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CardsSection;
