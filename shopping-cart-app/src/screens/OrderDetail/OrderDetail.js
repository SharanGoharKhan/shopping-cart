import React, { useContext, useEffect } from 'react';
import {
    View, Text, Image, TouchableOpacity, ScrollView
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './styles';
import BottomTab from '../../components/BottomTab/BottomTab';
import { BackHeader } from '../../components/Headers/Headers';
import { SafeAreaView } from 'react-native-safe-area-context';
import UserContext from '../../context/User'
import { Spinner, TextError } from '../../components'
import ConfigurationContext from '../../context/Configuration'

function OrderDetail(props) {
    const navigation = useNavigation()
    const route = useRoute()
    const id = route.params._id ?? null
    console.log('id',id)
    const cart = route.params.clearCart ?? false
    const { orders, clearCart, loadingOrders, errorOrders } = useContext(
        UserContext
    )
    const configuration = useContext(ConfigurationContext)
    const order = orders.find(o => o._id === id)
    console.log('orders',JSON.stringify(orders.map(({_id})=>_id)))
    useEffect(() => {
        return () => {
            if (cart) {
                clear()
            }
        }
    }, [cart])
    async function clear() {
        await clearCart()
    }
    
    if(loadingOrders || !order) return  <Spinner />
    if(errorOrders) return <TextError text={errorOrders}/>
    return (
        <SafeAreaView style={[styles.flex, styles.safeAreaStyle]}>
            <View style={[styles.flex, styles.mainContainer]}>
                <BackHeader
                    title={order.orderId}
                    backPressed={() => navigation.goBack()} />
                <View style={styles.line}></View>
                <ScrollView>
                    {order.items.length && order.items.map(data => {
                        return (<View key={data._id} style={styles.cardContainer}>
                            <View style={styles.card}>
                                <View style={styles.cardLeftContainer}>
                                    <Image
                                        source={{ uri: data.image ?? 'https://res.cloudinary.com/ecommero/image/upload/v1597658445/products/su6dg1ufmtfuvrjbhgtj.png' }}
                                        style={styles.imgResponsive}
                                        resizeMode="cover"
                                    />
                                </View>
                                <View style={styles.cardRightContainer}>
                                    <Text style={[styles.productTitleStyle, styles.marginTop5]}>{data.product}</Text>
                                    {/* <Text style={styles.productDescriptionStyle}>Courier received the order.</Text> */}
                                    <View style={styles.amountContainer}>
                                        <View style={styles.quantityContainer}>
                                            <Text style={styles.productTitleStyle}>x{data.quantity}</Text>
                                        </View>
                                        <View style={styles.priceContainer}>
                                            <Text style={styles.productTitleStyle}>{configuration.currencySymbol} {data.price * data.quantity}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>)
                    })}
                    <View style={styles.line}></View>
                    <View style={styles.deliverContainer}>
                        <View style={styles.deliverSubContainer}>
                            <Text style={styles.titleStyle}>Deliver to</Text>
                            <Text style={styles.contactStyle}>{order.user.name}</Text>
                            <Text style={styles.contactStyle}>{order.user.email}</Text>
                            <Text style={styles.contactStyle}>{order.user.phone}</Text>
                            <Text style={styles.addressStyle}>{order.deliveryAddress.region}</Text>
                            <Text style={styles.addressStyle}>{order.deliveryAddress.city}</Text>
                            <Text style={styles.addressStyle}>{order.deliveryAddress.apartment}, {order.deliveryAddress.building}</Text>
                            {!!order.deliveryAddress.details && <Text style={styles.addressStyle}>{order.deliveryAddress.details}</Text>}
                        </View>
                    </View>
                    <View style={styles.line}></View>
                    <View style={styles.paymentContainer}>
                        <View style={styles.paymentSubContainer}>
                            <Text style={styles.titleStyle}>Payment</Text>
                            <View style={styles.twoItems}>
                                <Text style={styles.contactStyle}>Payment Method</Text>
                                <Text style={styles.addressStyle}>{order.paymentMethod}</Text>
                            </View>
                            <View style={styles.twoItems}>
                                <Text style={styles.contactStyle}>Delivery</Text>
                                <Text style={styles.addressStyle}>{configuration.currencySymbol} {configuration.deliveryCharges}</Text>
                            </View>
                            <View style={styles.twoItems}>
                                <Text style={styles.contactStyle}>Sub Total</Text>
                                <Text style={styles.addressStyle}>{configuration.currencySymbol} {order.orderAmount - configuration.deliveryCharges}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.line}></View>
                    <View style={styles.totalContainer}>
                        <View style={styles.totalSubContainer}>
                            <View style={styles.twoItems}>
                                <Text style={styles.addressStyle}>Total</Text>
                                <Text style={styles.addressStyle}>{configuration.currencySymbol} {order.orderAmount}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.trackOrderContainer}>
                        <View style={styles.trackOrderSubContainer}>
                            <TouchableOpacity
                                activeOpacity={0}
                                onPress={() => navigation.navigate('TrackOrder', { _id: id })}
                                style={styles.trackStyle}
                            >
                                <Text style={styles.trackStyleText}>Track Order</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <BottomTab />
        </SafeAreaView>
    )
}

export default OrderDetail;