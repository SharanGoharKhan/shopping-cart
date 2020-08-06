import React, { useEffect, useState } from 'react';
import { View, TextInput, KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackHeader, BottomTab, TextDefault } from '../../components';
import { colors, alignment, scale } from '../../utils';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Location from 'expo-location'
import { MaterialIcons } from '@expo/vector-icons';

function NewAddress() {
    const navigation = useNavigation()
    const route = useRoute()
    const regionObj = route.params?.regionChange ?? null
    const [title, titleSetter] = useState('')
    const [city, citySetter] = useState('')
    const [regionName, regionNameSetter] = useState('')
    const [additional, additionalSetter] = useState('')
    const [titleError, titleErrorSetter] = useState('')
    const [cityError, cityErrorSetter] = useState('')
    const [regionError, regionErrorSetter] = useState('')
    const [regionNameError, regionNameErrorSetter] = useState('')
    const [additionalError, additionalErrorSetter] = useState('')

    useEffect(() => {
        if (regionObj !== null) regionChange(regionObj)
        return () => clearFields()
    }, [regionObj])

    function regionChange(region) {
        Location.reverseGeocodeAsync({ ...region })
            .then(data => {
                if (data.length) {
                    const location = data[0]
                    citySetter(location.city)
                    regionNameSetter(location.region)
                    let detail = location.street + ', ' + location.country
                    if (location.postalCode != null)
                        detail.concat(', ' + location.postalCode)
                    additionalSetter(detail)
                    // const keys = Object.keys(location)
                    // .map(key => location[key])
                    // .join(' ')
                    // setRegion(region)
                }
            })
            .catch(error => {
                console.log('Error : ', error)
            })
    }

    function validate() {
        const titleError = !title.trim().length ? 'Error' : ''
        const cityError = !city.trim().length ? 'Error' : ''
        const regionError = !regionName.trim().length ? 'Error' : ''
        const additionalError = !additional.trim().length ? 'Error' : ''
        const coordinateError = regionObj === null ? 'Error' : ''

        regionErrorSetter(coordinateError)
        titleErrorSetter(titleError)
        cityErrorSetter(cityError)
        regionNameErrorSetter(regionError)
        additionalErrorSetter(additionalError)
        return !titleError.length && !cityError.length && !regionError.length && !additionalError.length && !coordinateError.length
    }
    function clearFields() {
        regionErrorSetter('')
        titleErrorSetter('')
        cityErrorSetter('')
        regionNameErrorSetter('')
        additionalErrorSetter('')
    }

    return (
        <SafeAreaView style={styles.flex}>
            <View style={[styles.flex, styles.mainContainer]}>
                <BackHeader
                    title="New Address"
                    backPressed={() => navigation.goBack()} />
                <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : null} keyboardVerticalOffset={100}>
                    <View style={styles.formMainContainer}>
                        <View style={styles.nameAddressContainer}>
                            <View style={styles.nameAddressLabel}>
                                <TextDefault>
                                    {'Name of address'}
                                </TextDefault>
                            </View>
                            <View style={styles.nameAddressInput}>
                                <TextInput
                                    placeholder="My Home"
                                    placeholderTextColor={colors.fontPlaceholder}
                                    style={styles.addressInputStyle}
                                    style={[styles.addressInputStyle, titleError.length > 0 ? styles.error : styles.titleBorder]}
                                    onChangeText={(text) => titleSetter(text)}
                                    onBlur={() => {
                                        titleErrorSetter(
                                            !title.trim().length
                                                ? 'Error'
                                                : ''
                                        )
                                    }}
                                />
                            </View>
                        </View>
                        <ScrollView style={styles.flex} showsVerticalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center', flexGrow: 1 }}>
                            <View style={styles.formContainer}>
                                <View style={styles.formContentContainer}>
                                    <View style={styles.oneItemContainer}>
                                        <View style={styles.fullContainer}>
                                            <View style={styles.labelContainer}>
                                                <TextDefault textColor={colors.fontSecondColor} H5>
                                                    {'Pin your location on the map'}
                                                </TextDefault>
                                            </View>
                                            <TouchableOpacity
                                                activeOpacity={0}
                                                onPress={() => navigation.navigate('FullMap', { currentScreen: 'NewAddress' })}
                                                style={[styles.inputContainer, styles.row, regionError.length > 0 && styles.error]}
                                            >
                                                <TextDefault textColor={colors.fontPlaceholder} style={{ ...alignment.PLxSmall }}>
                                                    {regionObj !== null ? (parseFloat(regionObj.latitude).toFixed(2) + '°N, ' + parseFloat(regionObj.longitude).toFixed(2) + '°E') : '25°"N 55°E '}
                                                </TextDefault>
                                                <MaterialIcons name="location-on" size={scale(25)} color={colors.google} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={styles.twoItemsContainer}>
                                        <View style={styles.halfContainer}>
                                            <View style={styles.labelContainer}>
                                                <TextDefault textColor={colors.fontSecondColor} H5>
                                                    {'Region'}
                                                </TextDefault>
                                            </View>
                                            <View style={styles.inputContainer}>
                                                <TextInput
                                                    value={regionName}
                                                    style={[styles.flex, styles.inputText, regionNameError.length > 0 && styles.error]}
                                                    placeholder="Fedral"
                                                    placeholderTextColor={colors.fontPlaceholder}
                                                    onChangeText={(text) => regionNameSetter(text)}
                                                    onBlur={() => {
                                                        regionNameErrorSetter(
                                                            !regionName.trim().length
                                                                ? 'Error'
                                                                : ''
                                                        )
                                                    }}
                                                />
                                            </View>
                                        </View>
                                        <View style={styles.halfContainer}>
                                            <View style={styles.labelContainer}>
                                                <TextDefault textColor={colors.fontSecondColor} H5>
                                                    {'City'}
                                                </TextDefault>
                                            </View>
                                            <View style={styles.inputContainer}>
                                                <TextInput
                                                    value={city}
                                                    style={[styles.flex, styles.inputText, cityError.length > 0 && styles.error]}
                                                    placeholder="Islamabad"
                                                    placeholderTextColor={colors.fontPlaceholder}
                                                    onChangeText={(text) => citySetter(text)}
                                                    onBlur={() => {
                                                        cityErrorSetter(
                                                            !city.trim().length
                                                                ? 'Error'
                                                                : ''
                                                        )
                                                    }}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.twoItemsContainer}>
                                        <View style={styles.halfContainer}>
                                            <View style={styles.labelContainer}>
                                                <TextDefault textColor={colors.fontSecondColor} H5>
                                                    {'Apt/Villa Number'}
                                                </TextDefault>
                                            </View>
                                            <View style={styles.inputContainer}>
                                                <TextInput
                                                    style={[styles.flex, styles.inputText]}
                                                    placeholder="01"
                                                    placeholderTextColor={colors.fontPlaceholder}
                                                />
                                            </View>
                                        </View>
                                        <View style={styles.halfContainer}>
                                            <View style={styles.labelContainer}>
                                                <TextDefault textColor={colors.fontSecondColor} H5>
                                                    {'Building/Villa Name'}
                                                </TextDefault>
                                            </View>
                                            <View style={styles.inputContainer}>
                                                <TextInput
                                                    style={[styles.flex, styles.inputText]}
                                                    placeholder="Block 4"
                                                    placeholderTextColor={colors.fontPlaceholder}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.oneItemContainer}>
                                        <View style={styles.fullContainer}>
                                            <View style={styles.labelContainer}>
                                                <TextDefault textColor={colors.fontSecondColor} H5>
                                                    {'Additional Details'}
                                                </TextDefault>
                                            </View>
                                            <View style={styles.inputContainer}>
                                                <TextInput
                                                    value={additional}
                                                    style={[styles.flex, styles.inputText, additionalError.length > 0 && styles.error]}
                                                    placeholder="N/A"
                                                    placeholderTextColor={colors.fontPlaceholder}
                                                    onChangeText={(text) => additionalSetter(text)}
                                                    onBlur={() => {
                                                        additionalErrorSetter(
                                                            !additional.trim().length
                                                                ? 'Error'
                                                                : ''
                                                        )
                                                    }}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.addContainer}>
                                <TouchableOpacity
                                    activeOpacity={0}
                                    onPress={() => {
                                        if (validate()) {
                                            navigation.navigate('AddressList')
                                        }
                                    }}
                                    style={styles.addBtn}
                                >
                                    <TextDefault textColor={colors.buttonText} H5>
                                        {'Add new address'}
                                    </TextDefault>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </KeyboardAvoidingView>
                <BottomTab />
            </View >
        </SafeAreaView >
    );
}

export default NewAddress;