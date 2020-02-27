import React from 'react';
import {
    View, Text, Image, TouchableOpacity, ScrollView
} from 'react-native';
import styles from './styles';
import BottomTab from '../../components/BottomTab/BottomTab';
import Card from './Card/AddressCard';
import { verticalScale } from '../../utils/scaling';
import { SafeAreaView } from 'react-navigation';


/* Config/Constants
DATA for the address
============================================================================= */
const DATA = [
    {
        title: 'My Home', country: 'Pakistan', city: 'Islamabad', address: 'Block 4, Apartment 102', poBox: 'P.O Vox 65000',
    },
    {
        title: 'My Work', country: 'Pakistan', city: 'Karachi', address: 'Block 4350, Floor 1, Office 3', poBox: 'P.O Vox 65002',
    },
];

function AddressList(props) {
    return (
        <SafeAreaView forceInset={{ top: "never", bottom: "always" }} style={{ flex: 1}}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerRow}>
                        <TouchableOpacity
                            onPress={() => props.navigation.goBack()}
                            style={styles.backImg}>
                            <Image
                                source={require('../../assets/icons/back.png')}
                                resizeMode="contain"
                                style={{
                                    width: verticalScale(16),
                                    height: verticalScale(17),
                                    marginRight: verticalScale(20)
                                }}
                            />
                        </TouchableOpacity>
                        <Text style={styles.headerText}>My Adresses</Text>
                        <View style={styles.headerBtn}>
                            <TouchableOpacity>
                                <Text style={styles.headerBtnText}>New Address</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.body}>
                    <View style={styles.main}>
                        <ScrollView style={styles.mainScroll}>
                            {DATA.map((item, index) => (
                                <Card
                                    navigationObj={props.navigation}
                                    title={item.title}
                                    country={item.country}
                                    city={item.city}
                                    address={item.address}
                                    poBox={item.poBox}
                                    key={index}
                                />
                            ))}
                        </ScrollView>
                    </View>

                </View>
                <BottomTab
                    navigationObj={props.navigation}
                />

            </View>
        </SafeAreaView>
    );
}

export default AddressList;