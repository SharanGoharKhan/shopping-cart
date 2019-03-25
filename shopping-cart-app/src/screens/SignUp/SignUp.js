import React from 'react'
import { View, Text,Image ,StatusBar, TextInput, TouchableOpacity, ImageBackground  } from 'react-native'

import styles from './styles'
import { colors } from '../../utils/colors';
import { moderateScale } from '../../utils/scaling';

import TextField from '../../ui/Textfield/Textfield'
import MainBtn from '../../ui/Buttons/MainBtn'
import AlternateBtn from '../../ui/Buttons/AlternateBtn'
/* Config/Constants
============================================================================= */

/* =============================================================================
<SignUp />
--------------------------------------------------------------------------------

Props:
  ?

============================================================================= */
class SignUp extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={'transparent'} barStyle = "light-content" hidden = {false}  translucent = {false}/>
                <View style={styles.statusBarImage}>
                    <Image
                        source={require('../../assets/images/statusbar.png')}
                        style={{
                            height: StatusBar.currentHeight,
                            width:'100%'
                        }}
                        />
                </View>
                <View style={styles.body}>
                   <View style={styles.header}>
                        <Text style={styles.header_text}>Sign In</Text>
                        <AlternateBtn text="Continue as a Guest"/>
                   </View>
                   <View style={styles.main}>
                        <ImageBackground 
                                style={styles.body_container_background}
                                source={require('../../assets/images/formBackground.png')}>
                            <View style={styles.main_top}>
                                <Text style={styles.h1_text}>Hello Guest!</Text>
                                <Text style={styles.h2_text}> Sign Up</Text>
                            </View>
                            <View style={styles.main_mid}>
                                <TextField placeholderText="Full Name" containerStyle={{marginBottom: moderateScale(10)}}/>
                                <TextField placeholderText="Email" containerStyle={{marginBottom: moderateScale(10)}}/>
                                <TextField placeholderText="Mobile" containerStyle={{marginBottom: moderateScale(10)}}/>
                                <TextField placeholderText="Password" containerStyle={{marginBottom: moderateScale(10)}}/>


                            </View>
                            <View style={styles.main_bot}>
                                <View style={{width: '100%'}}>
                                    <MainBtn text="Sign up"/>
                                </View>
                                <View style={styles.mixed_line}>
                                    <Text style={[styles.ft_text]}>Already have an account: </Text>
                                    <Text style={[styles.ft_text, styles.ft_text_underline]}>Sign in</Text>
                            </View>
                            </View>

                        </ImageBackground>
                   </View>
                </View>
               
            </View>
        )
    }
}
/* Export
============================================================================= */
export default SignUp