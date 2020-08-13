import React, { useContext, useState } from 'react';
import { View, TextInput, KeyboardAvoidingView, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BottomTab, TextDefault, BackHeader, FlashMessage } from '../../components'
import { SimpleLineIcons } from '@expo/vector-icons';
import { scale, colors } from '../../utils';
import { useNavigation, useRoute } from '@react-navigation/native';
import UserContext from '../../context/User';
import MainBtn from '../../ui/Buttons/MainBtn';
import { updateUser } from '../../apollo/server';
import { gql, useMutation } from '@apollo/client';

const UPDATEUSER = gql`${updateUser}`

function EditingProfile(props) {
    const route = useRoute()
    const [name, nameSetter] = useState(route.params?.name ?? '')
    const email = route.params?.email ?? ''
    const [phone, phoneSetter] = useState(route.params?.phone ?? '')
    const [nameError, nameErrorSetter] = useState(null)
    const [phoneError, phoneErrorSetter] = useState(null)
    const navigation = useNavigation()
    const { profile } = useContext(UserContext)
    const [mutate, { loading: loadingMutation }] = useMutation(UPDATEUSER, { onCompleted, onError })

    function onCompleted({ updateUser }) {
        if (updateUser) {
            FlashMessage({ message: "User's Info Updated", type: 'success' })
        }
    }
    function onError(error) {
        try {
            FlashMessage({ message: error.message, type: 'warning' })
        } catch (err) { }
    }

    function phoneValiation() {
        let result = true
        phoneErrorSetter(null)
        const num = phone.trim().replace('.', '')
        if (num.length < 11 || num.length > 15 || isNaN(num)) {
            phoneErrorSetter('Minimum 11 and maximum 15 characters allowed')
            result = false
        }
        return result
    }
    function nameValidation() {
        let result = true
        nameErrorSetter(null)
        const nameRegex = /([a-zA-Z]{3,30}\s*)+/
        if (!nameRegex.test(name)) {
            nameErrorSetter('Full name is required')
            result = false
        }
        return result
    }

    function validate() {
        const phoneResult = phoneValiation()
        const nameResult = nameValidation()
        return phoneResult && nameResult
    }

    return (
        <SafeAreaView style={[styles.flex, styles.safeAreaStyle]}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={[styles.flex, { marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight }]}>
                <BackHeader
                    title="Editing Profile"
                    backPressed={() => props.navigation.goBack()} />
                <ScrollView
                    style={styles.flex}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={[styles.formMainContainer]}>
                        <View style={styles.formContainer}>
                            <View style={styles.profileImageContainer}>
                                <SimpleLineIcons name="user" size={scale(40)} color={colors.fontBrown} />
                            </View>
                            <View style={styles.formContentContainer}>
                                <View style={styles.oneItemContainer}>
                                    <View style={styles.fullContainer}>
                                        <View style={styles.labelContainer}>
                                            <TextDefault textColor={colors.fontThirdColor} H5>
                                                {'Full Name'}
                                            </TextDefault>
                                        </View>
                                        <View style={[styles.inputContainer, !!nameError && styles.error]}>
                                            <TextInput
                                                value={name}
                                                style={[styles.flex, styles.inputText]}
                                                placeholder="e.g Saad"
                                                placeholderTextColor={colors.fontPlaceholder}
                                                onChangeText={(text) => nameSetter(text)}
                                                onBlur={nameValidation}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.oneItemContainer}>
                                    <View style={styles.fullContainer}>
                                        <View style={styles.labelContainer}>
                                            <TextDefault textColor={colors.fontThirdColor} H5>
                                                {'Email'}
                                            </TextDefault>
                                        </View>
                                        <View style={styles.inputContainer}>
                                            <TextInput
                                                style={[styles.flex, styles.disableInput]}
                                                defaultValue={email}
                                                editable={false}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.oneItemContainer}>
                                    <View style={styles.fullContainer}>
                                        <View style={styles.labelContainer}>
                                            <TextDefault textColor={colors.fontThirdColor} H5>
                                                {'Phone Number'}
                                            </TextDefault>
                                        </View>
                                        <View style={[styles.inputContainer, !!phoneError && styles.error]}>
                                            <TextInput
                                                style={[styles.flex, styles.inputText]}
                                                value={phone}
                                                keyboardType={'phone-pad'}
                                                placeholder="+92 3339461270"
                                                placeholderTextColor={colors.fontPlaceholder}
                                                onChangeText={(text) => phoneSetter(text)}
                                                onBlur={phoneValiation}
                                            />
                                        </View>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.addContainer}>
                                <MainBtn
                                    loading={loadingMutation}
                                    style={{ width: '80%' }}
                                    onPress={async () => {
                                        if (validate()) {
                                            mutate({
                                                variables: {
                                                    name: name,
                                                    phone: phone
                                                }
                                            })
                                        }
                                    }}
                                    text="Save"
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
            <BottomTab />
        </SafeAreaView>
    );
}

export default EditingProfile;
