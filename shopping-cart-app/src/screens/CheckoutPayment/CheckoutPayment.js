import React from 'react'
import { View, Text, Image, TextInput, StatusBar, TouchableOpacity } from 'react-native'

import SwiperFlatList from 'react-native-swiper-flatlist';

import BlueBtn from '../../ui/Buttons/BlueBtn'
import BlueAlternateBtn from '../../ui/Buttons/BlueAlternateBtn'

import ViewCard from './Card/ViewCard'

import styles from './styles'
import { moderateScale } from '../../utils/scaling';
import { colors } from '../../utils/colors';

/* Config/Constants
============================================================================= */
const DATA= [
    {cardNumber:'1234123412344567', expiry:{month:11, year:22}, cardHolderName: 'John M. Smith' },
    {cardNumber:'1234123412344212', expiry:{month:18, year:25}, cardHolderName: 'Kevin M. Louise' },
]

/* =============================================================================
<CheckoutPayment />
--------------------------------------------------------------------------------

Props:
  ?

============================================================================= */


class CheckoutPayment extends React.Component {

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
                            source={require('../../assets/icons/creditcard.png')}
                            style={{
                                height:moderateScale(15),
                                width:moderateScale(19)
                            }}
                            />
                            <Text style={styles.header_text}>Payment</Text>
                    </View>
                    <View style={styles.main}>
                        <View style={styles.mainTop}>
                            <View style={styles.mainTopHeadline}>
                                <Text style={styles.headlineText}>Choose one of your saved card(s)</Text>
                            </View>
                            <View style={styles.cardContainer}>
                                <SwiperFlatList  
                                    paginationDefaultColor={colors.grayLinesColor}
                                    paginationActiveColor='#000'
                                    paginationStyleItem={styles.paginationItem}
                                    autoplayLoop 
                                    showPagination>
                                        {
                                            DATA.map((item, index)=>(
                                                <TouchableOpacity 
                                                    key={index}
                                                    activeOpacity={1}
                                                    style={styles.card}
                                                    onPress={()=>this['child_'+index].toggleActive()}>
                                                    <ViewCard 
                                                        onRef={ref => (this['child_'+index] = ref)}/>
                                                 </TouchableOpacity>
                                            ))    
                                        }
                                </SwiperFlatList>
                            </View>
                            <View style={styles.manualBtnContainer}>
                                <Text style={styles.manBtnContText}>Or</Text>
                                <BlueAlternateBtn 
                                    containerStyles={{marginTop: moderateScale(5)}}
                                    text="Enter Credit Card Manually"/>
                            </View>

                 
                        </View>
                        <View style={styles.mainBot}>
                            <View style={styles.subtotalContainer}>
                                <View style={styles.row}>
                                    <Text style={styles.text}>Card Number</Text>
                                    <Text style={styles.text}>{'\u002A'}{'\u002A'}{'\u002A'}{'\u002A'} {'\u002A'}{'\u002A'}{'\u002A'}{'\u002A'} {'\u002A'}{'\u002A'}{'\u002A'}{'\u002A'} 4567</Text>
                                </View>
                                <View style={styles.row}>
                                    <Text style={styles.text}>CVV</Text>
                                    <View style={styles.cvvContainer}>
                                        <TextInput 
                                            maxLength={3}
                                            keyboardType='numeric'
                                            style={styles.cvvInput} 
                                            placeholder="CVV"/>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.totalContainer}>
                                <View style={styles.row}>
                                    <Text style={styles.textBold}>Total</Text>
                                    <Text style={styles.textBlue}>192 KWD</Text>
                                </View>
                            </View>
                            <View style={styles.submitContainer}>
                                <BlueBtn
                                onPress={() => this.props.navigation.navigate('MainLanding')}
                                text="Pay"/>
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
}
/* Export
============================================================================= */
export default CheckoutPayment