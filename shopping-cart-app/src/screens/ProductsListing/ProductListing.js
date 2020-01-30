import React from 'react';
import {
    View, Text, Image, TouchableOpacity, FlatList
} from 'react-native';
import styles from './styles';
import BottomTab from '../../components/BottomTab/BottomTab';
import { PRODUCTS } from '../../utils/mockData';
import ProductCard from '../../ui/ProductCard/ProductCard';

function ProductListing(props) {
    return (
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
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                data={PRODUCTS}
                renderItem={({ item }) => <ProductCard
                    styles={styles.productCard}
                    navigationObj={props.navigation}
                    item={item} />
                }
            />
            <BottomTab
                navigationObj={props.navigation}
            />
        </View>
    );
}

export default ProductListing;
