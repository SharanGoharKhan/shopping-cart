import React from 'react';
import {
    View, Text, ScrollView} from 'react-native';
import styles from './styles';
import BottomTab from '../../components/BottomTab/BottomTab';
import { BackHeader } from '../../components/Headers/Headers';
import ShoppingCard from './ShoppingCard/ShoppingCard';
import Button from '../../ui/Buttons/Button';
import { CARTDATA } from '../../utils/mockData';

function ShoppingCart(props) {
    return (
        <View style={styles.flex}>
            <BackHeader
                title="Cart"
                backPressed={() => props.navigation.goBack()} />
            <ScrollView
                showsVerticalScrollIndicator={false}>
                {CARTDATA.map((item, index) =>
                    <ShoppingCard
                        key={index}
                        item={item}
                    />
                )}
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
                    <Button
                        containerStyle={styles.btnContainer}
                        textStyle={styles.btnText}
                        onPress={()=>props.navigation.navigate('Checkout')}
                        text="Proceed" />
                </View>
            </ScrollView>
            <BottomTab 
            navigationObj={props.navigation}/>
        </View>
    );
}
export default ShoppingCart;