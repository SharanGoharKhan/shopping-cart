import React from 'react';
import { View, ImageBackground, ScrollView, KeyboardAvoidingView, StatusBar } from 'react-native';
import styles from './styles';
import { colors, alignment } from '../../utils';
import TextField from '../../ui/Textfield/Textfield';
import MainBtn from '../../ui/Buttons/MainBtn';
import AlternateBtn from '../../ui/Buttons/AlternateBtn';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextDefault } from '../../components'

function SignUp(props) {
    return (
        <SafeAreaView style={[styles.flex, styles.safeAreaStyle]}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={[styles.flex, { marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight }]}>
                <ScrollView showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1 }}
                    style={styles.flex}
                >
                    <View style={styles.container}>
                        <View style={styles.body}>
                            <View style={styles.header}>
                                <TextDefault textColor={colors.fontMainColor} H5 style={{ ...alignment.PLsmall }}>
                                    {'Sign Up'}
                                </TextDefault>
                                <AlternateBtn
                                    onPress={() => props.navigation.navigate('noDrawer', { screen: 'MainLanding' })}
                                    text="Continue as a Guest"
                                />
                            </View>
                            <View style={styles.main}>
                                <ImageBackground
                                    style={styles.bodyContainerBackground}
                                    source={require('../../assets/images/formBackground.png')}
                                    resizeMode="cover"
                                >
                                    <View style={styles.mainTop}>
                                        <TextDefault textColor={colors.fontMainColor} H4>
                                            {'Hello Guest'}
                                        </TextDefault>
                                        <TextDefault textColor={colors.fontMainColor}>
                                            {'Sign Up'}
                                        </TextDefault>
                                    </View>
                                    <View style={styles.mainMid}>
                                        <TextField placeholder="Full Name" containerStyle={{ ...alignment.MBsmall }} />
                                        <TextField placeholder="Email" containerStyle={{ ...alignment.MBsmall }} />
                                        <TextField placeholder="Mobile" containerStyle={{ ...alignment.MBsmall }} />
                                        <TextField placeholder="Password" containerStyle={{ ...alignment.MBsmall }} />
                                    </View>
                                    <View style={styles.mainBot}>
                                        <View style={styles.botBtnContainer}>
                                            <MainBtn
                                                onPress={() => props.navigation.navigate('SignIn')}
                                                text="Sign up"
                                            />
                                        </View>
                                        <View style={styles.mixedLine}>
                                            <TextDefault textColor={colors.fontSecondColor}>
                                                {'Already have an account: '}
                                                <TextDefault style={styles.ftTextUnderline} textColor={colors.fontMainColor}
                                                    onPress={() => props.navigation.navigate('SignIn')}>
                                                    {'Sign in'}
                                                </TextDefault>
                                            </TextDefault>
                                        </View>
                                    </View>
                                </ImageBackground>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default SignUp;