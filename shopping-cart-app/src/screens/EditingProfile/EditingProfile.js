import React from 'react';
import {
    View, Text, Image, TextInput, KeyboardAvoidingView, TouchableOpacity, ScrollView
} from 'react-native';
import styles from './styles';
import BottomTab from '../../components/BottomTab/BottomTab';
import { verticalScale } from '../../utils/scaling';

function EditingProfile(props) {
    return (
        <View style={styles.flex}>
            <View style={styles.headerContainer}>
                <TouchableOpacity
                    onPress={() => props.navigation.goBack()}
                    style={styles.backImg}>
                    <Image
                        source={require('../../assets/icons/back.png')}
                        resizeMode="contain"
                        style={{
                            width: verticalScale(16),
                            height: verticalScale(17)
                        }}
                    />
                </TouchableOpacity>
                <Text style={styles.headerContainerText}>Editing Profile</Text>
            </View>
            <ScrollView>
                <View style={styles.formMainContainer}>
                    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
                        <View style={styles.formContainer}>
                            <View style={styles.profileImageContainer}>
                                <Image
                                    source={require('../../assets/images/mainMenu/menu_avatar.png')}
                                    style={styles.imgResponsive}
                                    resizeMode="contain"
                                />
                            </View>
                            <View style={styles.formContentContainer}>
                                <View style={styles.twoItemsContainer}>
                                    <View style={styles.halfContainer}>
                                        <View style={styles.labelContainer}>
                                            <Text style={styles.label}>First Name</Text>
                                        </View>
                                        <View style={styles.inputContainer}>
                                            <TextInput
                                                placeholder="Sharan"
                                                placeholderTextColor="black"
                                            />
                                        </View>
                                    </View>
                                    <View style={styles.halfContainer}>
                                        <View style={styles.labelContainer}>
                                            <Text style={styles.label}>Last Name</Text>
                                        </View>
                                        <View style={styles.inputContainer}>
                                            <TextInput
                                                placeholder="Khan"
                                                placeholderTextColor="black"
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.oneItemContainer}>
                                    <View style={styles.fullContainer}>
                                        <View style={styles.labelContainer}>
                                            <Text style={styles.label}>Email</Text>
                                        </View>
                                        <View style={styles.inputContainer}>
                                            <TextInput
                                                placeholder="sharan.gohar@gmail.com"
                                                placeholderTextColor="black"
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.oneItemContainer}>
                                    <View style={styles.fullContainer}>
                                        <View style={styles.labelContainer}>
                                            <Text style={styles.label}>Phone Number</Text>
                                        </View>
                                        <View style={styles.inputContainer}>
                                            <TextInput
                                                placeholder="+92 3339461270"
                                                placeholderTextColor="black"
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.twoItemsContainer}>
                                    <View style={styles.halfContainer}>
                                        <View style={styles.labelContainer}>
                                            <Text style={styles.label}>Date of Birth</Text>
                                        </View>
                                        <View style={styles.inputContainer}>
                                            <TextInput
                                                placeholder="16-06-1993"
                                                placeholderTextColor="black"
                                            />
                                        </View>
                                    </View>
                                    <View style={styles.halfContainer}>
                                        <View style={styles.labelContainer}>
                                            <Text style={styles.label}>Gender</Text>
                                        </View>
                                        <View style={styles.inputContainer}>
                                            <TextInput
                                                placeholder="Male"
                                                placeholderTextColor="black"
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.addContainer}>
                                    <TouchableOpacity
                                        onPress={() => props.navigation.navigate('ProfileDashboard')}
                                        style={styles.addBtn}
                                    >
                                        <Text style={styles.addStyle}>Save</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </ScrollView>
            <BottomTab
                navigationObj={props.navigation}
            />
        </View>
    );
}

export default EditingProfile;