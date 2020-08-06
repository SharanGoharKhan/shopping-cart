import React, { useState, useEffect } from 'react';
import { View, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';
import { verticalScale, colors, alignment, scale } from '../../utils';
import BlueBtn from '../../ui/Buttons/BlueBtn';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackHeader, BottomTab, TextDefault } from '../../components';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'

/* Config/Constants
============================================================================= */
const DATA = [
    { name: 'Leather Crossbody MID Bag', amount: 3, price: 120 },
    { name: 'Ves Bread Storage', amount: 1, price: 35 },
];
const COD_PAYMENT = {
    payment: 'COD',
    label: 'COD',
    index: 2,
    icon: require('../../assets/images/cashIcon.png')
}

function Checkout() {
    const navigation = useNavigation()
    const route = useRoute()
    const [paymentMethod, setPaymentMethod] = useState(null)
    const payObj = route.params ? route.params.PayObject : null

    useEffect(() => {
        setPaymentMethod(payObj || COD_PAYMENT)
    }, [payObj])

    function renderItem(item, index) {
        return (
            <View key={index} style={styles.listItem}>
                <View style={styles.simpleRow}>
                    <TextDefault textColor={colors.fontSecondColor}>
                        {item.amount}x{' '}
                    </TextDefault>
                    <TextDefault textColor={colors.fontSecondColor}>
                        {item.name}
                    </TextDefault>
                </View>
                <TextDefault textColor={colors.fontBlue}>
                    {item.price}{' '}PKR
                </TextDefault>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.flex}>
            <View style={[styles.flex, styles.mainContainer]}>
                <BackHeader
                    title="Summary"
                    backPressed={() => navigation.goBack()} />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={styles.flex}
                    contentContainerStyle={styles.container}
                >

                    <View style={styles.body}>
                        <View style={styles.main_top}>
                            <View style={[styles.orders, styles.line]}>
                                <View style={styles.row}>
                                    <TextDefault textColor={colors.fontBrown} H5>
                                        {'My Orders'}
                                    </TextDefault>
                                    <TouchableOpacity
                                        activeOpacity={0}
                                        onPress={() => console.log('Pressed Edit')}>
                                        <Image
                                            source={require('../../assets/icons/edit.png')}
                                            style={{
                                                height: verticalScale(16),
                                                width: verticalScale(16),
                                            }}
                                        />
                                    </TouchableOpacity>
                                </View>
                                <View style={[styles.simpleRow, styles.padding]}>
                                    <Image
                                        source={require('../../assets/icons/delivery.png')}
                                        style={{
                                            height: verticalScale(13),
                                            width: verticalScale(25),
                                        }}
                                    />
                                    <TextDefault textColor={colors.fontBlue} style={styles.deliveryDate} >
                                        {' Delivery Date: 2/10/2019'}
                                    </TextDefault>
                                </View>
                                <View style={styles.items}>
                                    <ScrollView showsVerticalScrollIndicator={false}>
                                        {DATA.map((item, index) => renderItem(item, index))}
                                    </ScrollView>
                                </View>
                            </View>

                            <View style={[styles.address, styles.line]}>
                                <TextDefault textColor={colors.fontBrown} H5>
                                    {'Deliver to'}
                                </TextDefault>
                                <View style={styles.addressDetail}>
                                    <TextDefault textColor={colors.fontSecondColor}>
                                        Sharan Khan
                                    </TextDefault>
                                    <TextDefault textColor={colors.fontSecondColor}>
                                        sharan.gohar@gmail.com
                                    </TextDefault>
                                    <TextDefault textColor={colors.fontSecondColor}>
                                        +92 3339461270
                                    </TextDefault>
                                </View>
                                <View style={styles.borderBottom}>
                                    <View style={styles.row}>
                                        <TextDefault textColor={colors.fontMainColor}>
                                            Pakistan
                                        </TextDefault>
                                        <TouchableOpacity
                                            activeOpacity={0}
                                            onPress={() => navigation.navigate('AddressList')}>
                                            <Image
                                                source={require('../../assets/icons/edit.png')}
                                                style={{
                                                    height: verticalScale(16),
                                                    width: verticalScale(16),
                                                }}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    <TextDefault textColor={colors.fontMainColor}>
                                        Ali Sabah Alsaelem,
                                        </TextDefault>
                                    <TextDefault textColor={colors.fontMainColor}>
                                        Block 4, AParatment 102
                                        </TextDefault>
                                    <TextDefault textColor={colors.fontMainColor}>
                                        P.O Box 65000
                                        </TextDefault>
                                </View>
                            </View>
                            <View style={styles.dealContainer}>
                                <View style={[styles.floatView]}>
                                    <TextDefault
                                        textColor={colors.fontSecondColor}
                                        style={{ width: '70%' }}>
                                        {'Payment Method'}
                                    </TextDefault>
                                    <TouchableOpacity
                                        activeOpacity={0.7}
                                        style={styles.changeText}
                                        onPress={() => navigation.navigate('Payment', { payment: paymentMethod })}
                                    >
                                        <TextDefault
                                            textColor={colors.buttonBackground}
                                            right>
                                            {'Change'}
                                        </TextDefault>
                                    </TouchableOpacity>
                                </View>
                                {paymentMethod === null ? (
                                    <TouchableOpacity
                                        style={styles.floatView}
                                        onPress={() => navigation.navigate('Payment', { payment: paymentMethod })}>
                                        <AntDesign
                                            name="plus"
                                            size={scale(20)}
                                            color={colors.buttonBackground}
                                        />
                                        <TextDefault
                                            textColor={colors.buttonBackground}
                                            style={[alignment.PLsmall, { width: '70%' }]}>
                                            {'Payment Method'}
                                        </TextDefault>
                                    </TouchableOpacity>
                                ) : (
                                        <TouchableOpacity
                                            style={styles.floatView}
                                            onPress={() => navigation.navigate('Payment', { payment: paymentMethod })}>
                                            <View style={{ width: '10%' }}>
                                                <Image
                                                    resizeMode="cover"
                                                    style={styles.iconStyle}
                                                    source={paymentMethod.icon}
                                                />
                                            </View>
                                            <TextDefault
                                                textColor={colors.buttonBackground}
                                                style={[alignment.PLsmall, { width: '90%' }]}>
                                                {paymentMethod.label}
                                            </TextDefault>
                                        </TouchableOpacity>
                                    )
                                }
                            </View>
                        </View>

                        <View style={styles.main_bot}>
                            <View style={[styles.subtotal_container, styles.line]}>
                                <View style={styles.row}>
                                    <TextDefault textColor={colors.fontSecondColor} H5>
                                        {'Sub Total'}
                                    </TextDefault>
                                    <TextDefault textColor={colors.fontMainColor} H5>
                                        {'191 PKR'}
                                    </TextDefault>
                                </View>
                                <View style={styles.row}>
                                    <TextDefault textColor={colors.fontSecondColor} H5>
                                        {'Delivery'}
                                    </TextDefault>
                                    <TextDefault textColor={colors.fontMainColor} H5>
                                        {'1 PKR'}
                                    </TextDefault>
                                </View>
                            </View>
                            <View style={styles.total_container}>
                                <View style={styles.row}>
                                    <TextDefault textColor={colors.fontMainColor} H5 style={styles.text_bold}>
                                        {'Total'}
                                    </TextDefault>
                                    <TextDefault textColor={colors.fontBlue} H5 bold>
                                        {'192 PKR'}
                                    </TextDefault>
                                </View>
                            </View>
                            <View style={styles.submit_container}>
                                <BlueBtn
                                    onPress={() => navigation.navigate('CheckoutPayment')}
                                    text="Order Now"
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <BottomTab />
        </SafeAreaView>
    );
}

export default Checkout;
