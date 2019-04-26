import React from 'react';
import {
    View, Text, Image, TouchableOpacity, ScrollView, StatusBar, Platform
} from 'react-native';
import styles from './styles';
import BottomTab from '../../components/BottomTab/BottomTab';
import { SafeAreaView } from 'react-navigation';
/* Config/Constants
============================================================================= */


/* =============================================================================
<OrderDetail />
--------------------------------------------------------------------------------

Props:
  ?

============================================================================= */
class OrderDetail extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.flex}>
                <StatusBar backgroundColor="transparent" barStyle={Platform.OS == 'ios' ? "dark-content" : "light-content"} hidden={false} translucent={false} />
                <ScrollView>
                    <View style={styles.headerContainer}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.goBack()}
                            style={styles.backImg}>
                            <Image
                                source={require('../../assets/icons/back.png')}
                                resizeMode="contain"
                                style={{
                                    width: 16,
                                    height: 17
                                }}
                            />
                        </TouchableOpacity>
                        <Text style={styles.headerContainerText}>Order No. 10352</Text>
                    </View>
                    <View style={styles.line}></View>
                    <View style={styles.profileContainer}>
                        <View style={styles.profileContentContainer}>
                            <Image
                                source={require('../../assets/images/MainLanding/shop-1-avatar.png')}
                                style={styles.imgFixed}
                            />
                            <View>
                                <Text style={styles.profileTitlStyle}>Orders to</Text>
                                <Text style={styles.profileSubTitleStyle}>ViVo H&T</Text>
                            </View>

                        </View>
                        <TouchableOpacity style={styles.dotsContainer}>
                            <View style={styles.dot} />
                            <View style={styles.dot} />
                            <View style={styles.dot} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.line}></View>
                    <View style={styles.cardContainer}>
                        <View style={styles.card}>
                            <View style={styles.cardLeftContainer}>
                                <Image
                                    source={require('../../assets/images/OrderDetail/basket.png')}
                                    style={styles.imgResponsive}
                                    resizeMode="cover"
                                />
                            </View>
                            <View style={styles.cardRightContainer}>
                                <Text style={[styles.productTitleStyle, styles.marginTop5]}>Leather Crossbody MID...</Text>
                                <Text style={styles.productDescriptionStyle}>Courier received the order.</Text>
                                <View style={styles.amountContainer}>
                                    <View style={styles.quantityContainer}>
                                        <Text style={styles.productTitleStyle}>x1</Text>
                                    </View>
                                    <View style={styles.priceContainer}>
                                        <Text style={styles.productTitleStyle}>35 PKR</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.line}></View>
                    <View style={styles.deliverContainer}>
                        <View style={styles.deliverSubContainer}>
                            <Text style={styles.titleStyle}>Deliver to</Text>
                            <Text style={styles.contactStyle}>Sharan Khan</Text>
                            <Text style={styles.contactStyle}>sharan.gohar@gmail.com</Text>
                            <Text style={styles.contactStyle}>+92 3339461270</Text>
                            <Text style={styles.addressStyle}>Pakistan</Text>
                            <Text style={styles.addressStyle}>Islamabad, Pakistan</Text>
                            <Text style={styles.addressStyle}>Block 4, Apartment 102</Text>
                            <Text style={styles.addressStyle}>P.O.Box 6500</Text>
                        </View>
                    </View>
                    <View style={styles.line}></View>
                    <View style={styles.paymentContainer}>
                        <View style={styles.paymentSubContainer}>
                            <Text style={styles.titleStyle}>Payment</Text>
                            <View style={styles.twoItems}>
                                <Text style={styles.contactStyle}>Payment Method</Text>
                                <Text style={styles.addressStyle}>Credit Card</Text>
                            </View>
                            <View style={styles.twoItems}>
                                <Text style={styles.contactStyle}>Delivery</Text>
                                <Text style={styles.addressStyle}>2 PKR</Text>
                            </View>
                            <View style={styles.twoItems}>
                                <Text style={styles.contactStyle}>Sub Total</Text>
                                <Text style={styles.addressStyle}>35 PKR</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.line}></View>
                    <View style={styles.totalContainer}>
                        <View style={styles.totalSubContainer}>
                            <View style={styles.twoItems}>
                                <Text style={styles.addressStyle}>Total</Text>
                                <Text style={styles.addressStyle}>38 PKR</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.trackOrderContainer}>
                        <View style={styles.trackOrderSubContainer}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('TrackOrder')}
                                style={styles.trackStyle}
                            >
                                <Text style={styles.trackStyleText}>Track Order</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                <BottomTab
                    navigationObj={this.props.navigation}
                />
            </SafeAreaView>
        );
    }
}
/* Export
============================================================================= */
export default OrderDetail;
