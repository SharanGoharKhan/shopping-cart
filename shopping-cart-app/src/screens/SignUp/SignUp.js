import React from 'react';
import {
    View, Text, StatusBar, ImageBackground
} from 'react-native';
import styles from './styles';
import { moderateScale } from '../../utils/scaling';
import { SafeAreaView } from 'react-navigation';
import TextField from '../../ui/Textfield/Textfield';
import MainBtn from '../../ui/Buttons/MainBtn';
import AlternateBtn from '../../ui/Buttons/AlternateBtn';

class SignUp extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor="transparent" barStyle="dark-content" hidden={false} translucent={false} />
                <View style={styles.body}>
                    <View style={styles.header}>
                        <Text style={styles.header_text}>Sign In</Text>
                        <AlternateBtn
                            onPress={() => this.props.navigation.navigate('MainLanding')}
                            text="Continue as a Guest"
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
                                <TextField placeholderText="Full Name" containerStyle={{ marginBottom: moderateScale(10) }} />
                                <TextField placeholderText="Email" containerStyle={{ marginBottom: moderateScale(10) }} />
                                <TextField placeholderText="Mobile" containerStyle={{ marginBottom: moderateScale(10) }} />
                                <TextField placeholderText="Password" containerStyle={{ marginBottom: moderateScale(10) }} />


                            </View>
                            <View style={styles.main_bot}>
                                <View style={styles.bot_btn_container}>
                                    <MainBtn
                                        onPress={() => this.props.navigation.navigate('MainLanding')}
                                        text="Sign up"
                                    />
                                </View>
                                <View style={styles.mixed_line}>
                                    <Text style={[styles.ft_text]}>Already have an account: </Text>
                                    <Text
                                        onPress={() => this.props.navigation.navigate('SignIn')}
                                        style={[styles.ft_text, styles.ft_text_underline]}
                                    >Sign in
                                  </Text>
                                </View>
                            </View>

                        </ImageBackground>
                    </View>
                </View>

            </SafeAreaView>
        );
    }
}

export default SignUp;
