import React, { useState, useEffect, useContext } from 'react';
import { View, Image, TouchableOpacity, ImageBackground, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import * as Permissions from 'expo-permissions'
import styles from './styles';
import { login } from '../../apollo/server'
import { Notifications } from 'expo'
import { verticalScale, colors, scale } from '../../utils';
import { TextDefault, Spinner } from '../../components'
import TextField from '../../ui/Textfield/Textfield';
import ForgotPassword from './ForgotPassword/ForgotPassword';
import { SafeAreaView } from 'react-native-safe-area-context';
import { EvilIcons } from '@expo/vector-icons';
import * as AppAuth from 'expo-app-auth'
import * as Google from 'expo-google-app-auth'
import getEnvVars from '../../../environment'
import { useNavigation } from '@react-navigation/native';
import * as AppleAuthentication from 'expo-apple-authentication'
import { useMutation, gql } from '@apollo/client'
import UserContext from '../../context/User'
import { FlashMessage } from '../../components/FlashMessage/FlashMessage'
import MainBtn from '../../ui/Buttons/MainBtn';

const {
    IOS_CLIENT_ID_GOOGLE,
    ANDROID_CLIENT_ID_GOOGLE,
} = getEnvVars()

const LOGIN = gql`
  ${login}
`

function SignIn(props) {
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState(null)
    const [passwordError, setPasswordError] = useState(null)
    const [modalVisible, setModalVisible] = useState(false)
    const [loginButton, loginButtonSetter] = useState(null)
    const [loading, setLoading] = useState(false)
    const [enableApple, setEnableApple] = useState(false)

    const { setTokenAsync } = useContext(UserContext)

    const [mutate] = useMutation(LOGIN, { onCompleted, onError })

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
    }

    function validateCredentials() {
        let result = true
        setEmailError(null)
        setPasswordError(null)
        console.log("email", email, 'password', password)
        if (!email) {
            setEmailError('Email is required')
            result = false
        } else {
            const emailRegex = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/
            const phoneRegex = /^[+]\d{6,15}$/
            if (emailRegex.test(email) !== true && phoneRegex.test(email) !== true) {
                setEmailError('Invalid Email/Phone')
                result = false
            }
        }
        if (!password) {
            setPasswordError('Password is required')
            result = false
        }
        return result
    }
    async function onCompleted(data) {
        // console.log('login: ', data)
        try {
            // const trackingOpts = {
            //     id: data.login.userId,
            //     usernameOrEmail: data.login.email
            // }
            // Analytics.identify(data.login.userId, trackingOpts)
            // Analytics.track(Analytics.events.USER_LOGGED_IN, trackingOpts)
            setTokenAsync(data.login.token)
            navigation.navigate('MainLanding')
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }
    }
    function onError(error) {
        try {
            console.log('graphql', error.message)
            FlashMessage({ message: error.message, type: "warning", position: 'top' })
            loginButtonSetter(null)
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }
    }

    async function mutateLogin(user) {
        try {
            setLoading(true)
            let notificationToken = null
            const { status: existingStatus } = await Permissions.getAsync(
                Permissions.NOTIFICATIONS
            )
            if (existingStatus === 'granted') {
                notificationToken = await Notifications.getExpoPushTokenAsync()
            }
            mutate({ variables: { ...user, notificationToken } })
        } catch (e) {
            console.log(e)
        } finally {
        }
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
                                if (googleUser) {
                                    const user = {
                                        phone: '',
                                        email: googleUser.email,
                                        password: '',
                                        name: googleUser.name,
                                        picture: googleUser.photoUrl,
                                        type: 'google'
                                    }
                                    mutateLogin(user)
                                }
                            }

                            }
                            style={styles.socialBtn}>
                            <View style={styles.bgCircle}>
                                <EvilIcons name="sc-google-plus" size={scale(20)} color={colors.google} />
                            </View>
                            <TextDefault style={styles.fbText} textColor={colors.white} H5>
                                {'Signin with Google'}
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
                    loginButtonSetter('Apple')
                    try {
                        const credential = await AppleAuthentication.signInAsync({
                            requestedScopes: [
                                AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                                AppleAuthentication.AppleAuthenticationScope.EMAIL
                            ]
                        })
                        if (credential) {
                            const user = {
                                appleId: credential.user,
                                phone: '',
                                email: credential.email,
                                password: '',
                                name:
                                    credential.fullName.givenName +
                                    ' ' +
                                    credential.fullName.familyName,
                                picture: '',
                                type: 'apple'
                            }
                            mutateLogin(user)
                        }

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
            <MainBtn
                loading={(loading && loginButton === 'Login')}
                onPress={async () => {
                    loginButtonSetter('Login')
                    const user = {
                        email: email,
                        password: password,
                        type: 'default'
                    }

                    if (validateCredentials()) {
                        mutateLogin(user)
                    }
                }}
                text="Sign In"
            />
        )
    }

    return (
        <SafeAreaView style={[styles.flex, styles.safeAreaStyle]}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.flex}>
                <ScrollView
                    style={styles.flex}
                    showsVerticalScrollIndicator={false}
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
                                            error={!!emailError}
                                            placeholder="Email"
                                            onChange={event => {
                                                setEmail(event.nativeEvent.text.toLowerCase().trim())
                                            }}
                                        />
                                        <TextField
                                            error={!!passwordError}
                                            placeholder="Password"
                                            password={true}
                                            onChange={event => {
                                                setPassword(event.nativeEvent.text.trim())
                                            }}
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
                                        {renderGoogle()}
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