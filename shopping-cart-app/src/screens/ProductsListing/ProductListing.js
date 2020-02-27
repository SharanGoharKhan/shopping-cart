import React from 'react';
import {
    View, Text, ScrollView, Image, TouchableOpacity
} from 'react-native';
import styles from './styles';
import CardItem from './CardItem/CardItem';
import BottomTab from '../../components/BottomTab/BottomTab';
import { SafeAreaView } from 'react-navigation';

function ProductListing(props) {
    return (
        <SafeAreaView forceInset={{top:'never',bottom:'always'}} style={styles.flex} >
            <View style={styles.flex}>
                <View style={styles.headerContainer}>
                    <View style={styles.headerSubContainer}>
                        <View style={styles.backCnt}>
                            <TouchableOpacity
                                onPress={() => props.navigation.goBack()}
                                style={styles.backImg}>
                                <Image
                                    source={require('../../assets/icons/back.png')}
                                    resizeMode="contain"
                                    style={styles.imgResponsive}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.headerTextContainer}>
                            <Text style={styles.headerText}>Arts & Crafts</Text>
                        </View>
                        <View style={styles.headerIconContainer}>
                            <TouchableOpacity style={styles.headerImg}>
                                <Image
                                    source={require('../../assets/images/ProductListing/listView.png')}
                                    resizeMode="contain"
                                    style={styles.imgResponsive}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.headerImg}>
                                <Image
                                    source={require('../../assets/images/ProductListing/settings.png')}
                                    resizeMode="contain"
                                    style={styles.imgResponsive}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <ScrollView style={styles.scrollViewStyle}>
                    <View style={styles.bannerContainer}>
                        <Image
                            source={require('../../assets/images/ProductListing/banner.png')}
                            resizeMode="cover"
                            style={styles.imgResponsive}
                        />
                    </View>
                    <CardItem
                        navigationObj={props.navigation}
                    />
                </ScrollView>
                <BottomTab
                    navigationObj={props.navigation}
                />
            </View>
        </SafeAreaView>
    );
}

export default ProductListing;
