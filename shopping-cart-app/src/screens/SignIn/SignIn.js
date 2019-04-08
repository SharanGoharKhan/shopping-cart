import React from 'react'
import { View, Text, Image, StatusBar, TextInput, TouchableOpacity, ImageBackground } from 'react-native'

import styles from './styles'
import { colors } from '../../utils/colors';
import { moderateScale } from '../../utils/scaling';

import TextField from '../../ui/Textfield/Textfield'
import MainBtn from '../../ui/Buttons/MainBtn'
import Modal from 'react-native-modal'
import ForgotPassword from './ForgotPassword/ForgotPassword'
/* Config/Constants
============================================================================= */

/* =============================================================================
<SignIn />
--------------------------------------------------------------------------------

Props:
  ?

============================================================================= */
class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false
        }
        this.showModal = this.showModal.bind(this)
        this.hideModal = this.hideModal.bind(this)
    }
    showModal = () => {
        this.setState({
            modalVisible: true
        })
    }
    hideModal = () => {
        console.log('hide called')
        this.setState({
            modalVisible: false
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={'transparent'} barStyle="light-content" hidden={false} translucent={false} />
                <ForgotPassword
                modalVisible = {this.state.modalVisible}
                hideModal = {this.hideModal}
                />
                <View style={styles.statusBarImage}>
                    <Image
                        source={require('../../assets/images/statusbar.png')}
                        style={{
                            height: StatusBar.currentHeight,
                            width: '100%'
                        }}
                    />
                </View>
                <View style={styles.body}>
                    <View style={styles.body_header}>
                        <Image
                            source={require('../../assets/icons/avatar.png')}
                            style={{
                                height: moderateScale(18),
                                width: moderateScale(16)
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
                                    placeholderText="Username" />
                                <TextField
                                    placeholderText="Password" />
                                <MainBtn onPress={() => this.props.navigation.navigate('MainLanding')}
                                    text="Sign In" />
                                <TouchableOpacity onPress={() => this.showModal()}>
                                    <Text style={styles.passwordText}>Forgot my password
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.bc_socialBtns}>
                                <View style={[styles.socialBtns_View, styles.google_btn]}>
                                    <TouchableOpacity
                                        onPress={() => this.props.navigation.navigate('MainLanding')}
                                        style={styles.socialBtn}>
                                        <Image
                                            source={require('../../assets/icons/google.png')}
                                            style={{
                                                height: moderateScale(25),
                                                width: moderateScale(25)
                                            }}
                                        />
                                        <Text style={styles.fb_text}>Google</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={[styles.socialBtns_View, styles.facebook_btn]}>
                                    <TouchableOpacity
                                        onPress={() => this.props.navigation.navigate('MainLanding')}
                                        style={styles.socialBtn}>
                                        <Image
                                            source={require('../../assets/icons/facebook.png')}
                                            style={{
                                                height: moderateScale(24),
                                                width: moderateScale(24)
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
                                    onPress={() => this.props.navigation.navigate('SignUp')}
                                    style={[styles.ft_underline, styles.ft_text]}>you can also choose to</Text>
                            </View>
                            <Text
                                onPress={() => this.props.navigation.navigate('SignUp')}
                                style={[styles.ft_underline, styles.ft_text]}>
                                become a seller and open your own shop
                            </Text>
                        </View>
                    </View>
                </View>

            </View>
        )
    }
}
/* Export
============================================================================= */
export default SignIn