import React, { useState } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import styles from './styles';
import { BackHeader, BottomTab, CheckoutReceipt } from '../../components';
import ShoppingCard from './ShoppingCard/ShoppingCard';
import BlueBtn from '../../ui/Buttons/BlueBtn';
import { CARTDATA } from '../../utils/mockData';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

function ShoppingCart(props) {
    const [modalVisible, setModalVisible] = useState(false)
    const navigation = useNavigation()

    function showModal() {
        setModalVisible(true)
    }

    function hideModal() {
        setModalVisible(false)
    }

    function PriceContainer() {
        return (
            <View style={styles.priceBox}>
                <View style={styles.summaryContainer}>
                    <View style={styles.rowContainer}>
                        <Text style={styles.textStyle}>Sub Total</Text>
                        <Text style={styles.textStyle}>$149</Text>
                    </View>
                    <View style={styles.spacer} />
                    <View style={styles.rowContainer}>
                        <Text style={styles.textStyle}>Delivery</Text>
                        <Text style={styles.textStyle}>$1</Text>
                    </View>
                    <View style={styles.spacer} />
                    <View style={styles.lineStyle} />
                    <View style={styles.spacer} />
                    <View style={styles.rowContainer}>
                        <Text style={styles.textStyle}>Total</Text>
                        <Text style={[styles.textStyle, styles.totalStyle]}>$150</Text>
                    </View>
                    <View style={styles.spacer} />
                    {/* <Button
                        containerStyle={styles.btnContainer}
                        textStyle={styles.btnText}
                        onPress={() => props.navigation.navigate('Checkout')}
                        text="Proceed" /> */}
                    <BlueBtn
                        onPress={() => showModal()}
                        text="Proceed"
                    />
                </View>
            </View>
        )
    }
    return (
        <SafeAreaView style={[styles.flex, styles.safeAreaStyle]}>
            <View style={[styles.flex, styles.mainContainer]}>
                <BackHeader
                    title="Cart"
                    backPressed={() => navigation.goBack()} />
                <View style={{ flex: 1, justifyContent: "space-between" }}>
                    <FlatList
                        data={CARTDATA}
                        style={styles.flex}
                        keyExtractor={item => item._id}
                        contentContainerStyle={styles.subContainer}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, index }) => (
                            <ShoppingCard
                                key={item._id}
                                item={item}
                            />
                        )
                        }

                    />
                    <PriceContainer />
                </View>
                <CheckoutReceipt
                    modalVisible={modalVisible}
                    hideModal={hideModal}
                />
                <BottomTab />
            </View>
        </SafeAreaView>
    );
}
export default ShoppingCart;