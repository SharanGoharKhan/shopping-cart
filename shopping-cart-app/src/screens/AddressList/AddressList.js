import React from 'react'
import { View, Text,Image ,StatusBar, TouchableOpacity  } from 'react-native'

import styles from './styles'

import Card from './Card/AddressCard'
import { ScrollView } from 'react-native-gesture-handler';


/* Config/Constants
DATA for the address
============================================================================= */
const DATA = [
    { title: "My Home", country: "Kuwait", city: 'Aki Sabah Alsalem', address: "Block 4, Apartment 102", poBox: "P.O Vox 65000"},
    { title: "My Work", country: "Kuwait", city: 'Abu Faryan', address: "Block 4350, Floor 1, Office 3", poBox: "P.O Vox 65002"},
]
/* =============================================================================
<AddressList />
--------------------------------------------------------------------------------

Props:
  ?

============================================================================= */
class AddressList extends React.Component {
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
                <View style={styles.header}>
                    <View style={styles.headerRow}>
                        <Text style={styles.headerText}>My Adresses</Text>
                        <TouchableOpacity style={styles.headerBtn}>
                            <Text style={styles.headerBtnText}>New Address</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.body}>
                    <View style={styles.main}>
                        <ScrollView style={styles.mainScroll}>
                            {DATA.map((item, index)=><Card 
                                title= {item.title}
                                country= {item.country}
                                city= {item.city}
                                address= {item.address}
                                poBox= {item.poBox}
                                key={index}/>)}
                        </ScrollView>
                    </View>
                  
                </View>
                <View style={styles.footer}>
                        <Text>FOOTER PLACEHOLDER</Text>
                </View>
               
            </View>
        )
    }
}
/* Export
============================================================================= */
export default AddressList