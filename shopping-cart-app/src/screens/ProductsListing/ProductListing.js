import React from 'react';
import {
    View, Text, ScrollView, Image, TouchableOpacity, Platform, StatusBar
} from 'react-native';
import styles from './styles';
import CardItem from './CardItem/CardItem';
import BottomTab from '../../components/BottomTab/BottomTab';
/* Config/Constants
============================================================================= */


/* =============================================================================
<ProductListing />
--------------------------------------------------------------------------------

Props:
  ?

============================================================================= */
class ProductListing extends React.Component {
    render() {
        return (
            <View style={styles.flex}>
                <StatusBar backgroundColor="transparent" barStyle={Platform.OS == 'ios' ? "dark-content" : "light-content"} hidden={false} translucent={false} />
                <View style={styles.headerContainer}>
                    <View style={styles.headerSubContainer}>
                        <View style={styles.backCnt}>
                            <TouchableOpacity
                            onPress={()=> this.props.navigation.goBack()} 
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
                        navigationObj={this.props.navigation}
                    />
                </ScrollView>
                <BottomTab
                    navigationObj={this.props.navigation}
                />
            </View>
        );
    }
}
/* Export
============================================================================= */
export default ProductListing;
