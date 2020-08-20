import React, { useContext, useEffect } from 'react';
import { View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './styles';
import { BackHeader, BottomTab, Spinner, TextDefault } from '../../components';
import { SafeAreaView } from 'react-native-safe-area-context';
import UserContext from '../../context/User'
import ConfigurationContext from '../../context/Configuration'
import { colors, alignment } from '../../utils';

function OrderDetail(props) {
    const navigation = useNavigation()
    const route = useRoute()
    const id = route.params._id ?? null
    const cart = route.params.clearCart ?? false
    const { orders, clearCart, loadingOrders } = useContext(
        UserContext
    )
    const configuration = useContext(ConfigurationContext)
    const order = orders.find(o => o._id === id)
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
    return (
        <SafeAreaView style={[styles.flex, styles.safeAreaStyle]}>
            <View style={styles.flex}>
                <BackHeader
                    title={order ? order.orderId ?? 'Order Detail' : 'Order Detail'}
                    backPressed={() => navigation.goBack()} />
                {loadingOrders ? <Spinner /> :
                    <ScrollView style={[styles.itemContainer, styles.flex]}>
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
                                        <TextDefault textColor={colors.fontMainColor} H5>
                                            {data.product}
                                        </TextDefault>
                                        <View style={styles.amountContainer}>
                                            <View style={styles.quantityContainer}>
                                                <TextDefault textColor={colors.fontMainColor} H5>
                                                    x{data.quantity}
                                                </TextDefault>
                                            </View>
                                            <View style={styles.priceContainer}>
                                                <TextDefault textColor={colors.fontMainColor} H5 right style={alignment.PRxSmall}>
                                                    {configuration.currencySymbol} {data.price * data.quantity}
                                                </TextDefault>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>)
                        })}
                        <View style={styles.line} />
                        <View style={styles.deliverContainer}>
                            <View style={styles.deliverSubContainer}>
                                <TextDefault textColor={colors.fontBrown} H4 style={alignment.PBxSmall}>
                                    {'Deliver to'}
                                </TextDefault>
                                <TextDefault textColor={colors.fontThirdColor}>
                                    {order.user.name}
                                </TextDefault>
                                <TextDefault textColor={colors.fontThirdColor}>
                                    {order.user.email}
                                </TextDefault>
                                <TextDefault textColor={colors.fontThirdColor}>
                                    {order.user.phone}
                                </TextDefault>
                                <View style={styles.line} />
                                < TextDefault textColor={colors.fontSecondColor}>
                                    {order.deliveryAddress.region}
                                </TextDefault>
                                <TextDefault textColor={colors.fontSecondColor}>
                                    {order.deliveryAddress.city}
                                </TextDefault>
                                <TextDefault textColor={colors.fontSecondColor}>
                                    {order.deliveryAddress.apartment}, {order.deliveryAddress.building}
                                </TextDefault>
                                {!!order.deliveryAddress.details &&
                                    <TextDefault textColor={colors.fontSecondColor}>
                                        {order.deliveryAddress.details}
                                    </TextDefault>}
                            </View>
                        </View>
                        <View style={styles.line}></View>
                        <View style={styles.paymentContainer}>
                            <View style={styles.paymentSubContainer}>
                                <TextDefault textColor={colors.fontBrown} H4>
                                    {'Payment'}
                                </TextDefault>
                                <View style={styles.twoItems}>
                                    <TextDefault textColor={colors.fontThirdColor}>{'Payment Method'}</TextDefault>
                                    <TextDefault textColor={colors.fontMainColor}>{order.paymentMethod}</TextDefault>
                                </View>
                                <View style={styles.twoItems}>
                                    <TextDefault textColor={colors.fontThirdColor}>{'Delivery'}</TextDefault>
                                    <TextDefault textColor={colors.fontMainColor}>{configuration.currencySymbol} {configuration.deliveryCharges}</TextDefault>
                                </View>
                                <View style={styles.twoItems}>
                                    <TextDefault textColor={colors.fontThirdColor}>{'Sub Total'}</TextDefault>
                                    <TextDefault textColor={colors.fontMainColor}>{configuration.currencySymbol} {order.orderAmount - configuration.deliveryCharges}</TextDefault>
                                </View>
                            </View>
                        </View>
                        <View style={styles.line}></View>
                        <View style={styles.totalContainer}>
                            <View style={styles.totalSubContainer}>
                                <View style={styles.twoItems}>
                                    <TextDefault textColor={colors.fontMainColor} H4>{'Total'}</TextDefault>
                                    <TextDefault textColor={colors.fontMainColor} H4>{configuration.currencySymbol} {order.orderAmount}</TextDefault>
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
                                    <TextDefault textColor={colors.buttonText} H4>
                                        {'Track Order'}
                                    </TextDefault>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                }
            </View>
            <BottomTab
                screen='HOME' />
        </SafeAreaView>
    )
}

export default OrderDetail;