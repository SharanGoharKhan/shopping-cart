import React from 'react';
import { View, TextInput, KeyboardAvoidingView, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BottomTab, TextDefault, BackHeader } from '../../components'
import { SimpleLineIcons } from '@expo/vector-icons';
import { scale, colors } from '../../utils';

function EditingProfile(props) {
    return (
        <SafeAreaView style={[styles.flex, styles.safeAreaStyle]}>
            <View style={[styles.flex, styles.mainContainer]}>
                <BackHeader
                    title="Editing Profile"
                    backPressed={() => props.navigation.goBack()} />
                <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={styles.formMainContainer}>
                        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : null} keyboardVerticalOffset={100}>
                            <View style={styles.formContainer}>
                                <View style={styles.profileImageContainer}>
                                    <SimpleLineIcons name="user" size={scale(40)} color={colors.fontBrown} />
                                </View>
                                <View style={styles.formContentContainer}>
                                    <View style={styles.twoItemsContainer}>
                                        <View style={styles.halfContainer}>
                                            <View style={styles.labelContainer}>
                                                <TextDefault textColor={colors.fontThirdColor} H5>
                                                    {'First Name'}
                                                </TextDefault>
                                            </View>
                                            <View style={styles.inputContainer}>
                                                <TextInput
                                                    style={[styles.flex, styles.inputText]}
                                                    placeholder="Sharan"
                                                    placeholderTextColor="black"
                                                />
                                            </View>
                                        </View>
                                        <View style={styles.halfContainer}>
                                            <View style={styles.labelContainer}>
                                                <TextDefault textColor={colors.fontThirdColor} H5>
                                                    {'Last Name'}
                                                </TextDefault>
                                            </View>
                                            <View style={styles.inputContainer}>
                                                <TextInput
                                                    style={[styles.flex, styles.inputText]}
                                                    placeholder="Khan"
                                                    placeholderTextColor="black"
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
                                                    style={[styles.flex, styles.inputText]}
                                                    placeholder="sharan.gohar@gmail.com"
                                                    placeholderTextColor="black"
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
                                            <View style={styles.inputContainer}>
                                                <TextInput
                                                    style={[styles.flex, styles.inputText]}
                                                    placeholder="+92 3339461270"
                                                    placeholderTextColor="black"
                                                />
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.addContainer}>
                                        <TouchableOpacity
                                            activeOpacity={0}
                                            onPress={() => props.navigation.navigate('ProfileDashboard')}
                                            style={styles.addBtn}
                                        >
                                            <TextDefault textColor={colors.buttonText} H5 bold>
                                                {'Save'}
                                            </TextDefault>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </KeyboardAvoidingView>
                    </View>
                </ScrollView>
                <BottomTab />
            </View>
        </SafeAreaView>
    );
}

export default EditingProfile;
