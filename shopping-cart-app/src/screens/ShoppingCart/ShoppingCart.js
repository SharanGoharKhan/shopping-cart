import React from 'react';
import {
    View, Text, Image, ScrollView
} from 'react-native';
import styles from './styles';
import { verticalScale } from '../../utils/scaling';
import BlueBtn from '../../ui/Buttons/BlueBtn';
import FullCard from '../../ui/Cards/FullCard/FullCard';
import BottomTab from '../../components/BottomTab/BottomTab';

/* Config/Constants
============================================================================= */
const DATA = [
    {
        name: 'Leather Crossbody MID Premium',
        brand: 'EQ Custom Leather',
        quantity: 3,
        prev_price: null,
        new_price: 120,
        image: require('../../assets/images/MainLanding/shop-2-collage-2.png'),
    },
    {
        name: "Photography's belt & hooch",
        brand: 'EQ Custom Leather',
        quantity: 1,
        prev_price: 39,
        new_price: 29,
        image: require('../../assets/images/ProductListing/belt.png'),
    },
];

function ShoppingCart(props) {
    return (
        <React.Fragment>
            <View style={styles.flex}>
                <View style={styles.container}>
                    <View style={styles.body}>
                        <View style={styles.header}>
                            <Image
                                source={require('../../assets/icons/shoppingBag.png')}
                                style={{
                                    height: verticalScale(17),
                                    width: verticalScale(16),
                                }}
                            />
                            <Text style={styles.header_text}>Shopping Cart</Text>
                        </View>
                        <View style={styles.main}>
                            <View style={styles.main_top}>
                                <ScrollView style={styles.main_scroller}>
                                    {DATA.map((item, i) => (
                                        <FullCard
                                            productImage={item.image}
                                            productName={item.name}
                                            productBrand={item.brand}
                                            productQuantity={item.quantity}
                                            productPreviousPrice={item.prev_price}
                                            productNewPrice={item.new_price}
                                            key={i}
                                        />
                                    ))}
                                </ScrollView>
                            </View>
                            <View style={styles.main_bot}>
                                <View style={styles.subtotal_container}>
                                    <View style={styles.row}>
                                        <Text style={styles.text}>Sub Total</Text>
                                        <Text style={styles.text}>149 PKR</Text>
                                    </View>
                                    <View style={styles.row}>
                                        <Text style={styles.text}>Delivery</Text>
                                        <Text style={styles.text}>1 PKR</Text>
                                    </View>
                                </View>
                                <View style={styles.total_container}>
                                    <View style={styles.row}>
                                        <Text style={styles.text_bold}>Total</Text>
                                        <Text style={styles.text_blue}>150 PKR</Text>
                                    </View>
                                </View>
                                <View style={styles.submit_container}>
                                    <BlueBtn
                                        onPress={() => props.navigation.navigate('Checkout')}
                                        text="Proceed"
                                    />
                                </View>

                            </View>
                        </View>
                        <View style={styles.footer}>
                        </View>
                    </View>
                </View>
            </View>
            <BottomTab
                navigationObj={props.navigation}
            />
        </React.Fragment>
    );
}
export default ShoppingCart;
