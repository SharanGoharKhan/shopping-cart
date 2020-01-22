import React, { useState } from 'react';
import {
    View, Text, Image, TouchableOpacity, ImageBackground,
} from 'react-native';
import styles from './styles';
import { verticalScale } from '../../utils/scaling';
import TextField from '../../ui/Textfield/Textfield';
import ForgotPassword from './ForgotPassword/ForgotPassword';
import Button from '../../ui/Buttons/Button';
import { colors } from '../../utils/colors';

function SignIn(props) {
    const [modalVisible, setModalVisible] = useState(false)

    function showModal() {
        setModalVisible(true)
    }

    function hideModal() {
        setModalVisible(false)
    }

    return (
        <View style={styles.container}>
            <ForgotPassword
                modalVisible={modalVisible}
                hideModal={hideModal}
            />
            <View style={styles.body}>
                <View style={styles.body_header}>
                    <Image
                        source={require('../../assets/icons/avatar.png')}
                        style={{
                            height: verticalScale(18),
                            width: verticalScale(16),
                        }}
                    />
                    <Text style={styles.header_text}>Sign In</Text>
                </View>
                <View style={styles.body_container}>
                    <ImageBackground
                        style={styles.body_container_background}
                        source={require('../../assets/images/formBackground.png')}
                    >
                        <View style={styles.bc_texts}>
                            <Text style={styles.bc_h1}>
                                Hello Guest!
                                </Text>
                            <Text style={styles.bc_h2}>
                                Sign In
                                </Text>
                        </View>
                        <View style={styles.bc_main}>
                            <TextField
                                placeholder="Username"
                            />
                            <TextField
                                placeholder="Password"
                            />
                            <Button
                            onPress={() => props.navigation.navigate('MainLanding')}
                            text="Sign In"
                            textStyle={{color:colors.whiteColor}}
                            />
                            <TouchableOpacity onPress={() => showModal()}>
                                <Text style={styles.passwordText}>
                                    Forgot my password
                                  </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.bc_socialBtns}>
                            <View style={[styles.socialBtns_View, styles.google_btn]}>
                                <TouchableOpacity
                                    onPress={() => props.navigation.navigate('MainLanding')}
                                    style={styles.socialBtn}
                                >
                                    <Image
                                        source={require('../../assets/icons/google.png')}
                                        style={{
                                            height: verticalScale(25),
                                            width: verticalScale(25),
                                        }}
                                    />
                                    <Text style={styles.fb_text}>Google</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.socialBtns_View, styles.facebook_btn]}>
                                <TouchableOpacity
                                    onPress={() => props.navigation.navigate('MainLanding')}
                                    style={styles.socialBtn}
                                >
                                    <Image
                                        source={require('../../assets/icons/facebook.png')}
                                        style={{
                                            height: verticalScale(24),
                                            width: verticalScale(24),
                                        }}
                                    />
                                    <Text style={styles.fb_text}>Facebook</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.body_footer}>
                    <View style={styles.footer}>
                        <View style={styles.mixed_line}>
                            <Text style={[styles.ft_text, styles.bold_text]}>Create New Account: </Text>
                            <Text style={styles.ft_text}>By creating a new account, you</Text>
                        </View>
                        <Text style={styles.ft_text}>
                            will become a valuable customer/buyer to Enatega by
                            </Text>
                        <View style={styles.mixed_line}>
                            <Text style={styles.ft_text}>default. While registering, </Text>
                            <Text
                                onPress={() => props.navigation.navigate('SignUp')}
                                style={[styles.ft_underline, styles.ft_text]}
                            >you can also choose to
                                </Text>
                        </View>
                        <Text
                            onPress={() => props.navigation.navigate('SignUp')}
                            style={[styles.ft_underline, styles.ft_text]}
                        >
                            become a seller and open your own shop
                          </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default SignIn;
