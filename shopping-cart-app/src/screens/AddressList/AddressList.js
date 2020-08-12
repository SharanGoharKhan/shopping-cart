import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';
import BottomTab from '../../components/BottomTab/BottomTab';
import Card from './Card/AddressCard';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import { colors, alignment } from '../../utils';
import { TextDefault } from '../../components';
import UserContext from '../../context/User'


/* Config/Constants
DATA for the address
============================================================================= */


function AddressList() {
    const navigation = useNavigation()
    const { profile } = useContext(UserContext)
    console.log(profile.addresses)
    const [isDefault, isDefaultSetter] = useState(
        profile.addresses.length ? profile.addresses.find(address => address.selected === true)._id : null
        )
        

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
                    <Text>{JSON.stringify(profile.address)}</Text>
                    <View style={styles.main}>
                        <FlatList
                            style={styles.flex}
                            data={profile.addresses}
                            keyExtractor={(item) => item._id.toString()}
                            ListEmptyComponent={emptyView}
                            renderItem={({ item, index }) => (
                                <Card
                                    item={item}
                                    default={item._id === isDefault}
                                    defaultSetter={() => isDefaultSetter(item._id)}
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