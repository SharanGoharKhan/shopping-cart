import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';
import BottomTab from '../../components/BottomTab/BottomTab';
import Card from './Card/AddressCard';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import { colors, alignment } from '../../utils';
import { TextDefault } from '../../components';


/* Config/Constants
DATA for the address
============================================================================= */
const DATA = [
    {
        _id: "1", default: false, title: 'My Home', country: 'Pakistan', city: 'Islamabad', region: 'Federal', address: 'Block 4, Apartment 102', poBox: 'P.O Vox 65000', latitude: 33.6844, longitude: 73.0479
    },
    {
        _id: "2", default: true, title: 'My Work', country: 'Pakistan', city: 'Karachi', region: 'Sindh', address: 'Block 4350, Floor 1, Office 3', poBox: 'P.O Vox 65002', latitude: 24.8607, longitude: 74.3587
    },
];

function AddressList() {
    const navigation = useNavigation()
    const [isDefault, isDefaultSetter] = useState(DATA.find(element => element.default === true).id)

    function emptyView() {
        return (
            <View style={styles.emptyContainer}>
                <View style={styles.address}>
                    <TextDefault textColor={colors.fontMainColor} bold center H5 style={alignment.MBlarge}>
                        {'No Addresses!!'}
                    </TextDefault>
                    <TextDefault textColor={colors.fontMainColor} center small>
                        {"You don't have any address registered."}
                    </TextDefault>
                    <TextDefault textColor={colors.fontMainColor} center small>
                        {"Please add a new one."}
                    </TextDefault>
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity
                        activeOpacity={0}
                        style={styles.unselectedButton} onPress={() => navigation.navigate('NewAddress')}>
                        <TextDefault textColor={colors.buttonText} H5>
                            {'Add new address'}
                        </TextDefault>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
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
                                <Text style={styles.headerBtnText}>{'New Address'}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.body}>
                    <View style={styles.main}>
                        <FlatList
                            style={styles.flex}
                            data={DATA}
                            keyExtractor={(item) => item._id}
                            ListEmptyComponent={emptyView}
                            renderItem={({ item, index }) => (
                                <Card
                                    item={item}
                                    default={item.id === isDefault}
                                    defaultSetter={() => isDefaultSetter(item.id)}
                                />
                            )}
                        />
                    </View>
                </View>
                <BottomTab />
            </View>
        </SafeAreaView>
    );
}

export default AddressList;