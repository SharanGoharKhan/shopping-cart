import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, ImageBackground, KeyboardAvoidingView, ScrollView, Platform, StatusBar } from 'react-native';
import styles from './styles';
import { verticalScale, colors, scale } from '../../utils';
import { TextDefault, Spinner } from '../../components'
import TextField from '../../ui/Textfield/Textfield';
import ForgotPassword from './ForgotPassword/ForgotPassword';
import { SafeAreaView } from 'react-native-safe-area-context';
import { EvilIcons } from '@expo/vector-icons';
import * as AppAuth from 'expo-app-auth'
import * as Facebook from 'expo-facebook'
import * as Google from 'expo-google-app-auth'
import getEnvVars from '../../../environment'
import { useNavigation } from '@react-navigation/native';
import * as AppleAuthentication from 'expo-apple-authentication'

const {
    IOS_CLIENT_ID_GOOGLE,
    ANDROID_CLIENT_ID_GOOGLE,
    FACEBOOK_APP_ID
} = getEnvVars()

function SignIn(props) {
    const navigation = useNavigation()
    const [modalVisible, setModalVisible] = useState(false)
    const [loginButton, loginButtonSetter] = useState(null)
    const [loading, setLoading] = useState(false)
    const [enableApple, setEnableApple] = useState(false)

    console.log(AppAuth.OAuthRedirect)

    useEffect(() => {
        checkIfSupportsAppleAuthentication()
    }, [])

    function showModal() {
        setModalVisible(true)
    }

    function hideModal() {
        setModalVisible(false)
    }

    async function checkIfSupportsAppleAuthentication() {
        setEnableApple(await AppleAuthentication.isAvailableAsync())
        console.log(enableApple)
    }

    async function _GoogleSignUp() {
        const { type, user } = await Google.logInAsync({
            iosClientId: IOS_CLIENT_ID_GOOGLE,
            androidClientId: ANDROID_CLIENT_ID_GOOGLE,
            iosStandaloneAppClientId: IOS_CLIENT_ID_GOOGLE,
            iosStandaloneAppClientId: ANDROID_CLIENT_ID_GOOGLE,
            redirectUrl: `${AppAuth.OAuthRedirect}:/oauth2redirect/google`,
            scopes: ['profile', 'email']
        })
        if (type === 'success')
            return user
    }

    async function _FacebookSignUp() {
        await Facebook.initializeAsync(FACEBOOK_APP_ID)
        const { type, token } = await Facebook.logInWithReadPermissionsAsync(
            FACEBOOK_APP_ID, {
            permissions: ['public_profile', 'email']
        })
        if (type === 'success') {
            const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=email,name`);
            const user = await response.json()
            console.log(token, user)
            return user
        }
    }


    function renderGoogle() {
        return (
            <View style={[styles.socialBtnsView, styles.googleBtn]}>
                {(loading && loginButton === 'Google') ?
                    <Spinner backColor="rgba(0,0,0,0.1)" spinnerColor={'#FFF'} />
                    : (
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPressIn={() => {
                                loginButtonSetter('Google')
                            }}
                            onPress={async () => {
                                const googleUser = await _GoogleSignUp()
                                navigation.navigate('MainLanding')
                            }

                            }
                            style={styles.socialBtn}>
                            <View style={styles.bgCircle}>
                                <EvilIcons name="sc-google-plus" size={scale(20)} color={colors.google} />
                            </View>
                            <TextDefault style={styles.fbText} textColor={colors.white} H5>
                                {'Google'}
                            </TextDefault>
                        </TouchableOpacity>
                    )}
            </View>
        )
    }

    function renderFacebook() {
        return (
            <View style={[styles.socialBtnsView, styles.facebookBtn]}>
                {(loading && loginButton === 'Facebook') ?
                    <Spinner backColor="rgba(0,0,0,0.1)" spinnerColor={'#FFF'} />
                    : (
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={async () => {
                                const user = await _FacebookSignUp()
                                navigation.navigate('MainLanding')
                            }}
                            style={styles.socialBtn}>
                            <View style={styles.bgCircle}>
                                <EvilIcons name="sc-facebook" size={scale(20)} color={colors.facebook} />
                            </View>
                            <TextDefault style={styles.fbText} textColor={colors.white} H5>
                                {'Facebook'}
                            </TextDefault>
                        </TouchableOpacity>
                    )}
            </View>
        )
    }
    function renderApple() {
        if (loading && loginButton === 'Apple') {
            return (
                <View style={[styles.socialBtnsView, styles.appleBtn]}>
                    <Spinner backColor="rgba(0,0,0,0.1)" spinnerColor={'#FFF'} />
                </View>
            )
        }
        return (
            <AppleAuthentication.AppleAuthenticationButton
                buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
                buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
                cornerRadius={3}
                style={styles.appleBtn}
                onPress={async () => {
                    try {
                        const credential = await AppleAuthentication.signInAsync({
                            requestedScopes: [
                                AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                                AppleAuthentication.AppleAuthenticationScope.EMAIL
                            ]
                        })
                        loginButtonSetter('Apple')
                    } catch (e) {
                        if (e.code === 'ERR_CANCELED') {
                            // handle that the user canceled the sign-in flow
                            loginButtonSetter(null)
                        } else {
                            // handle other errors
                            loginButtonSetter(null)
                        }
                    }

                }}
            />
        )

    }

    function rennderLogin() {
        return (
            <View style={styles.LoginBtn}>
                {(loading && loginButton === 'Login') ?
                    <Spinner backColor="rgba(0,0,0,0.1)" spinnerColor={'#FFF'} />
                    : (
                        <TouchableOpacity
                            style={styles.main_brown_btn}
                            activeOpacity={0.7}
                            onPress={() => navigation.navigate('noDrawer', { screen: 'MainLanding' })}>
                            <TextDefault textColor={colors.buttonText} H5>
                                {'Sign In'}
                            </TextDefault>
                        </TouchableOpacity>
                    )}
            </View>
        )
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
                                        {rennderLogin()}
                                        <TouchableOpacity
                                            activeOpacity={0.7}
                                            onPress={() => showModal()}>
                                            <TextDefault textColor={colors.google}>
                                                {'Forgot my password'}
                                            </TextDefault>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.bcSocialBox} >
                                        <View style={styles.bcSocialBtns}>
                                            {renderGoogle()}
                                            {renderFacebook()}
                                        </View>
                                        {enableApple && renderApple()}
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
                                        <TextDefault style={styles.ftUnderline} small onPress={() => navigation.navigate('SignUp')}>
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