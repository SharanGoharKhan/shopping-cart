import React from 'react'
import { View, Text,Image ,StatusBar, ScrollView  } from 'react-native'

import styles from './styles'
import { moderateScale } from '../../utils/scaling';

import BlueBtn from '../../ui/Buttons/BlueBtn'

/* Config/Constants
============================================================================= */
const DATA= [
    {name: 'Leather Crossbody MID Bag', amount: 3, price: 120},
    {name: 'Ves Bread Storage', amount: 1, price: 35},
]

/* =============================================================================
<Checkout />
--------------------------------------------------------------------------------

Props:
  ?

============================================================================= */
class Checkout extends React.Component {

    renderItem(item, index){
        return(
            <View key={index} style={styles.listItem}>
                <View style={styles.simpleRow}>
                    <Text style={styles.itemBoldText}>{item.amount}x </Text>
                    <Text style={styles.itemBoldText}>{item.name}</Text>
                </View>
                <Text style={styles.itemBlueText}>
                    {item.price} KWD
                </Text>
            </View>
            
    )}

    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={'transparent'} barStyle = "light-content" hidden = {false}  translucent = {false}/>
                <View style={styles.statusBarImage}>
                    <Image
                        source={require('../../assets/images/statusbar.png')}
                        style={{
                            height: StatusBar.currentHeight,
                            width:'100%'
                        }}
                        />
                </View>
                <View style={styles.body}>
                    <View style={styles.header}>
                        <Image
                            source={require('../../assets/icons/shoppingBag.png')}
                            style={{
                                height:moderateScale(17),
                                width:moderateScale(16)
                            }}
                            />
                            <Text style={styles.header_text}>Summary</Text>
                    </View>
                    <View style={styles.main}>
                        <View style={styles.main_top}>
                            <View style={styles.orders}>
                                <View style={styles.row}>
                                    <Text style={styles.goldenText}>
                                        My Orders
                                    </Text>
                                    <Text >-ICO-</Text>
                                </View>
                                <View style={[styles.simpleRow, styles.padding]}>
                                    <Text style={styles.deliveryDate}>-ICO- </Text>
                                    <Text style={styles.deliveryDate}>
                                        Delivery Date: 2/10/2019
                                    </Text>
                                </View>
                                <View style={styles.items}>
                                    <ScrollView>
                                        {DATA.map((item, index)=>this.renderItem(item,index))}
                                    </ScrollView>
                                </View>
                            </View>
                            
                            <View style={styles.address}>
                                <Text style={styles.goldenText}>
                                        Deliver to
                                </Text>
                                <View style={styles.addressDetail}>
                                    <Text style={styles.addressSmallText}>
                                        Gahanim Aldosari
                                    </Text>
                                    <Text style={styles.addressSmallText}>
                                        ghanim@domain.com
                                    </Text>
                                    <Text style={styles.addressSmallText}>
                                        +965 5558300
                                    </Text>
                                </View>
                                <View style={styles.borderBottom}>
                                    <View style={styles.row}>
                                        <Text style={styles.addressBoldText}>Kuwait</Text>
                                        <Text>-ico-</Text>
                                    </View>
                                    <Text style={styles.addressBoldText}>Ali Sabah Alsaelem,</Text>
                                    <Text style={styles.addressBoldText}>Block 4, AParatment 102</Text>
                                    <Text style={styles.addressBoldText}>P.O Box 65000</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.main_bot}>
                            <View style={styles.subtotal_container}>
                                <View style={styles.row}>
                                    <Text style={styles.text}> Total</Text>
                                    <Text style={styles.text}>191 KWD</Text>
                                </View>
                                <View style={styles.row}>
                                    <Text style={styles.text}>Delivery</Text>
                                    <Text style={styles.text}>1 KWD</Text>
                                </View>
                            </View>
                            <View style={styles.total_container}>
                                <View style={styles.row}>
                                    <Text style={styles.text_bold}>Total</Text>
                                    <Text style={styles.text_blue}>192 KWD</Text>
                                </View>
                            </View>
                            <View style={styles.submit_container}>
                                <BlueBtn text="Pay"/>
                            </View>

                        </View>
                    </View>
                    <View style={styles.footer}>
                            <Text>Placeholder for menus</Text>
                    </View>
                </View>
               
            </View>
        )
    }
}
/* Export
============================================================================= */
export default Checkout