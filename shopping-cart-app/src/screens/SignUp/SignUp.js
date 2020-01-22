import React from 'react';
import {
    View, Text, ImageBackground, ScrollView, KeyboardAvoidingView
} from 'react-native';
import styles from './styles';
import { scale } from '../../utils/scaling';
import TextField from '../../ui/Textfield/Textfield';
import Button from '../../ui/Buttons/Button';
import { colors } from '../../utils/colors';

function SignUp(props) {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.flex}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.container}>
                    <View style={styles.body}>
                        <View style={styles.header}>
                            <Text style={styles.header_text}>Sign In</Text>
                            <Button
                                onPress={() => props.navigation.navigate('MainLanding')}
                                text="Continue as a Guest"
                                textStyle={{ color: colors.brownColor, borderColor: colors.darkGrayText }}
                                containerStyle={{ backgroundColor: colors.whiteColor }}
                            />
                        </View>
                        <View style={styles.main}>
                            <ImageBackground
                                style={styles.body_container_background}
                                source={require('../../assets/images/formBackground.png')}
                                resizeMode="cover"
                            >
                                <View style={styles.main_top}>
                                    <Text style={styles.h1_text}>Hello Guest!</Text>
                                    <Text style={styles.h2_text}> Sign Up</Text>
                                </View>
                                <View style={styles.main_mid}>
                                    <TextField placeholder="Full Name" style={{ marginBottom: scale(10) }} />
                                    <TextField placeholder="Email" style={{ marginBottom: scale(10) }} />
                                    <TextField placeholder="Mobile" style={{ marginBottom: scale(10) }} />
                                    <TextField placeholder="Password" style={{ marginBottom: scale(10) }} />
                                </View>
                                <View style={styles.main_bot}>
                                    <View style={styles.bot_btn_container}>
                                        <Button
                                            onPress={() => props.navigation.navigate('MainLanding')}
                                            text="Sign up"
                                            containerStyle={{ backgroundColor: colors.brownColor }}
                                            textStyle={{ color: colors.whiteColor }}
                                        />
                                    </View>
                                    <View style={styles.mixed_line}>
                                        <Text style={[styles.ft_text]}>Already have an account: </Text>
                                        <Text
                                            onPress={() => props.navigation.navigate('SignIn')}
                                            style={[styles.ft_text, styles.ft_text_underline]}
                                        >Sign in
                                  </Text>
                                    </View>
                                </View>

                            </ImageBackground>
                        </View>

                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default SignUp;
