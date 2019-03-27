import React from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native'
import styles from './styles'
import { fontStyles } from '../../utils/fontStyles'
import CardItem from './CardItem/CardItem'
const { height, width } = Dimensions.get('window')
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
                <View style={styles.headerContainer}>
                    <View style={styles.headerSubContainer}>
                        <View style={styles.headerTextContainer}>
                            <Text style={styles.headerText}>Arts & Crafts</Text>
                        </View>
                        <TouchableOpacity style={styles.headerImg}>
                            <Image
                                source={require('../../assets/images/ProductListing/settings.png')}
                                resizeMode="contain"
                                style={styles.imgResponsive}
                            />
                        </TouchableOpacity>
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
                    <CardItem />
                </ScrollView>
                {/* Footer starts */}
                <View style={{ width: '100%', height: height * .07, flexDirection: 'row', backgroundColor: 'white' }}>
                    <TouchableOpacity style={{ width: '25%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: '40%', height: '40%' }}>
                            <Image source={require('../../assets/images/footer/home.png')}
                                style={{ flex: 1, width: undefined, height: undefined }}
                                resizeMode="contain"
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: '25%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: '40%', height: '40%' }}>
                            <Image source={require('../../assets/images/footer/search.png')}
                                style={{ flex: 1, width: undefined, height: undefined }}
                                resizeMode="contain"
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: '25%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: '40%', height: '40%', position: 'relative' }}>
                            <Image source={require('../../assets/images/footer/profile.png')}
                                style={{ flex: 1, width: undefined, height: undefined }}
                                resizeMode="contain"
                            />
                            <View style={{ width: 8, height: 8, position: 'absolute', right: 0, top: 0, backgroundColor: '#EE9826', borderRadius: 4 }}>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: '25%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: '50%', height: '40%', position: 'relative' }}>
                            <Image source={require('../../assets/images/footer/shopping.png')}
                                style={{ flex: 1, width: undefined, height: undefined }}
                                resizeMode="contain"
                            />
                            <View style={{ width: '40%', height: '50%', position: 'absolute', right: 0, top: 0, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontFamily: fontStyles.PoppinsRegular, color: '#6178DE', fontSize: 8 }}>x5</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                {/* Footer ends */}
            </View>
        )
    }
}
/* Export
============================================================================= */
export default ProductListing