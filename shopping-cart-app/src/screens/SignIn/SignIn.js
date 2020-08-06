import React, { useState } from 'react';
import { View, Image, TouchableOpacity, ImageBackground, KeyboardAvoidingView, ScrollView, Platform, StatusBar } from 'react-native';
import styles from './styles';
import { verticalScale, colors, scale } from '../../utils';
import { TextDefault } from '../../components'
import TextField from '../../ui/Textfield/Textfield';
import ForgotPassword from './ForgotPassword/ForgotPassword';
import MainBtn from '../../ui/Buttons/MainBtn';
import { SafeAreaView } from 'react-native-safe-area-context';
import { EvilIcons } from '@expo/vector-icons';

function SignIn(props) {
    const [modalVisible, setModalVisible] = useState(false)

    function showModal() {
        setModalVisible(true)
    }

    function hideModal() {
        setModalVisible(false)
    }

    return (
        <SafeAreaView style={styles.flex}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={[styles.flex, { marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight }]}>
                <ScrollView showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={styles.container}>
                        <ForgotPassword
                            modalVisible={modalVisible}
                            hideModal={hideModal}
                        />
                        <View style={styles.body}>
                            <View style={styles.bodyHeader}>
                                <Image
                                    source={require('../../assets/icons/avatar.png')}
                                    style={{
                                        height: verticalScale(18),
                                        width: verticalScale(16),
                                    }}
                                />
                                <TextDefault style={styles.headerText} textColor={colors.fontMainColor} H5>
                                    {'Sign In'}
                                </TextDefault>
                            </View>
                            <View style={styles.bodyContainer}>
                                <ImageBackground
                                    style={styles.bodyContainerBackground}
                                    source={require('../../assets/images/formBackground.png')}
                                >
                                    <View style={styles.bcTexts}>
                                        <TextDefault textColor={colors.fontMainColor} H3>
                                            {'Hello Guest!'}
                                        </TextDefault>
                                        <TextDefault textColor={colors.fontMainColor}>
                                            {'Sign In'}
                                        </TextDefault>
                                    </View>
                                    <View style={styles.bcMain}>
                                        <TextField
                                            placeholder="Username"
                                        />
                                        <TextField
                                            placeholder="Password"
                                        />
                                        <MainBtn
                                            onPress={() => props.navigation.navigate('MainLanding')}
                                            text="Sign In"
                                        />
                                        <TouchableOpacity
                                            activeOpacity={0.7}
                                            onPress={() => showModal()}>
                                            <TextDefault textColor={colors.google}>
                                                {'Forgot my password'}
                                            </TextDefault>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.bcSocialBtns}>
                                        <View style={[styles.socialBtnsView, styles.googleBtn]}>
                                            <TouchableOpacity
                                                activeOpacity={0.7}
                                                onPress={() => props.navigation.navigate('MainLanding')}
                                                style={styles.socialBtn}
                                            >
                                                <View style={styles.bgCircle}>
                                                    <EvilIcons name="sc-google-plus" size={scale(20)} color={colors.google} />
                                                </View>
                                                <TextDefault style={styles.fbText} textColor={colors.white} H5>
                                                    {'Google'}
                                                </TextDefault>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={[styles.socialBtnsView, styles.facebookBtn]}>
                                            <TouchableOpacity
                                                activeOpacity={0.7}
                                                onPress={() => props.navigation.navigate('noDrawer', { screen: 'MainLanding' })}
                                                style={styles.socialBtn}
                                            >
                                                <View style={styles.bgCircle}>
                                                    <EvilIcons name="sc-facebook" size={scale(20)} color={colors.facebook} />
                                                </View>
                                                <TextDefault style={styles.fbText} textColor={colors.white} H5>
                                                    {'Facebook'}
                                                </TextDefault>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </ImageBackground>
                            </View>
                            <View style={styles.bodyFooter}>
                                <View style={styles.footer}>
                                    <TextDefault textColor={colors.fontMainColor} small bold>
                                        {'Create New Account:'}
                                    </TextDefault>
                                    <TextDefault textColor={colors.fontMainColor} small>
                                        {'By creating a new account, you will become a valuable customer/buyer to Enatega by default. While registering, '}
                                        <TextDefault style={styles.ftUnderline} small onPress={() => props.navigation.navigate('SignUp')}>
                                            {'you can also choose to become a seller and open your own shop'}
                                        </TextDefault>
                                    </TextDefault>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView >
    );
}

export default SignIn;