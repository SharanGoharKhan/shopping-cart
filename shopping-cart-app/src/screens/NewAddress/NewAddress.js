import React, { useState } from 'react';
import { View, TextInput, KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackHeader, BottomTab, TextDefault, } from '../../components';
import { colors } from '../../utils';
import { useNavigation, useRoute } from '@react-navigation/native';
import MainBtn from '../../ui/Buttons/MainBtn'

function NewAddress() {
    const navigation = useNavigation()
    const route = useRoute()
    const [title, titleSetter] = useState('')
    const [city, citySetter] = useState('')
    const [regionName, regionNameSetter] = useState('')
    const [additional, additionalSetter] = useState('')
    const [aptNumber, aptNumberSetter] = useState('')
    const [building, buildingSetter] = useState('')
    const [titleError, titleErrorSetter] = useState('')
    const [cityError, cityErrorSetter] = useState('')
    const [regionNameError, regionNameErrorSetter] = useState('')
    const [additionalError, additionalErrorSetter] = useState('')
    const [aptNumberError, aptNumberErrorSetter] = useState('')
    const [buildingError, buildingErrorSetter] = useState('')

    function validate() {
        const titleError = !title.trim().length ? 'Error' : ''
        const cityError = !city.trim().length ? 'Error' : ''
        const regionError = !regionName.trim().length ? 'Error' : ''
        const additionalError = !additional.trim().length ? 'Error' : ''
        const aptNumberError = !aptNumber.trim().length ? 'Error' : ''
        const buildingError = !building.trim().length ? 'Error' : ''


        titleErrorSetter(titleError)
        cityErrorSetter(cityError)
        regionNameErrorSetter(regionError)
        additionalErrorSetter(additionalError)
        aptNumberErrorSetter(aptNumberError)
        buildingErrorSetter(buildingError)
        console.log(!aptNumberError.length, !buildingError.length)
        return !titleError.length && !cityError.length && !regionError.length && !additionalError.length && !aptNumberError.length && !buildingError.length
    }
    function clearFields() {
        titleErrorSetter('')
        cityErrorSetter('')
        regionNameErrorSetter('')
        additionalErrorSetter('')
        aptNumberErrorSetter('')
        buildingErrorSetter('')
    }

    return (
        <SafeAreaView style={[styles.flex, styles.safeAreaStyle]}>
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
                                                    style={[styles.flex, styles.inputText, aptNumberError.length > 0 && styles.error]}
                                                    placeholder="01"
                                                    placeholderTextColor={colors.fontPlaceholder}
                                                    onChangeText={(text) => aptNumberSetter(text)}
                                                    onBlur={() => {
                                                        aptNumberErrorSetter(
                                                            !aptNumber.trim().length
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
                                                    {'Building/Villa Name'}
                                                </TextDefault>
                                            </View>
                                            <View style={styles.inputContainer}>
                                                <TextInput
                                                    style={[styles.flex, styles.inputText, buildingError.length > 0 && styles.error]}
                                                    placeholder="Block 4"
                                                    placeholderTextColor={colors.fontPlaceholder}
                                                    onChangeText={(text) => buildingSetter(text)}
                                                    onBlur={() => {
                                                        buildingErrorSetter(
                                                            !building.trim().length
                                                                ? 'Error'
                                                                : ''
                                                        )
                                                    }}
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
                                <MainBtn
                                    text="Add new address"
                                    style={{ width: '80%' }}
                                    onPress={() => {
                                        if (validate()) {
                                            navigation.navigate('AddressList')
                                        }
                                    }}
                                />
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