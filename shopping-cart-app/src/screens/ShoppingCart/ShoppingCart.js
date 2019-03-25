import React from 'react'
import { View, Text,Image ,StatusBar, ScrollView  } from 'react-native'

import styles from './styles'
import { moderateScale } from '../../utils/scaling';

import BlueBtn from '../../ui/Buttons/BlueBtn'
import FullCard from '../../ui/Cards/FullCard/FullCard'

/* Config/Constants
============================================================================= */
const DATA = [1,2,3,4]

/* =============================================================================
<ShoppingCart />
--------------------------------------------------------------------------------

Props:
  ?

============================================================================= */
class ShoppingCart extends React.Component {
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
                            <Text style={styles.header_text}>Shopping Cart</Text>
                    </View>
                    <View style={styles.main}>
                        <View style={styles.main_top}>
                            <ScrollView style={styles.main_scroller}>
                                {DATA.map((item,i)=><FullCard key={i}/>)}
                            </ScrollView>
                        </View>
                        <View style={styles.main_bot}>
                            <View style={styles.subtotal_container}>
                                <View style={styles.row}>
                                    <Text style={styles.text}>Sub Total</Text>
                                    <Text style={styles.text}>149 KWD</Text>
                                </View>
                                <View style={styles.row}>
                                    <Text style={styles.text}>Delivery</Text>
                                    <Text style={styles.text}>1 KWD</Text>
                                </View>
                            </View>
                            <View style={styles.total_container}>
                                <View style={styles.row}>
                                    <Text style={styles.text_bold}>Total</Text>
                                    <Text style={styles.text_blue}>150 KWD</Text>
                                </View>
                            </View>
                            <View style={styles.submit_container}>
                                <BlueBtn text="Proceed"/>
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
export default ShoppingCart