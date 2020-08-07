import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
import BottomTab from '../../components/BottomTab/BottomTab';
import Card from './Card/AddressCard';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';


/* Config/Constants
DATA for the address
============================================================================= */
const DATA = [
    {
        id: 1, default: false, title: 'My Home', country: 'Pakistan', city: 'Islamabad', region: 'Federal', address: 'Block 4, Apartment 102', poBox: 'P.O Vox 65000', latitude: 33.6844, longitude: 73.0479
    },
    {
        id: 2, default: true, title: 'My Work', country: 'Pakistan', city: 'Karachi', region: 'Sindh', address: 'Block 4350, Floor 1, Office 3', poBox: 'P.O Vox 65002', latitude: 24.8607, longitude: 74.3587
    },
];

function AddressList() {
    const navigation = useNavigation()
    const [isDefault, isDefaultSetter] = useState(DATA.find(element => element.default === true).id)
    return (
        <SafeAreaView style={[styles.flex, styles.safeAreaStyle]}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerRow}>
                        <TouchableOpacity
                            activeOpacity={0}
                            onPress={() => navigation.goBack()}
                            style={styles.backImg}>
                            <Ionicons name="ios-arrow-back" size={30} />
                        </TouchableOpacity>
                        <Text style={styles.headerText}>My Adresses</Text>
                        <View style={styles.headerBtn}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('NewAddress')}
                                activeOpacity={0}>
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
                                    item={item}
                                    key={index}
                                    default={item.id === isDefault}
                                    defaultSetter={() => isDefaultSetter(item.id)}
                                />
                            ))}
                        </ScrollView>
                    </View>

                </View>
                <BottomTab />
            </View>
        </SafeAreaView>
    );
}

export default AddressList;