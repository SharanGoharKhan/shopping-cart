import React from 'react';
import {
    View, Text,
} from 'react-native';
import styles from './styles';
import { scale } from '../../../utils/scaling';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

class OtpValidation extends React.Component{
    
    render(){
        return(
            <View style={styles.container}>
                {/* Top Heading View */}
                <View style={styles.mainHeading}>
                    <Text style={styles.mainText}> Account Validation</Text>

                </View>

                {/* Main Body Container */}
                <View style={styles.body}>
                    {/* Body Text */}
                    <View style={styles.bodyText}>
                        {/* Body Heading */}
                        <View style={styles.bodyHeading}>
                            <Text style={styles.headingText}>
                                Validate your account
                            </Text>
                        </View>

                        {/* Text Container */}
                        <View style={styles.bodyContent}>
                            <View style={styles.contenView}>
                                <Text style={styles.contentText}> Akshaak will send you an OTP Code to verify your account. 
                                    We are going to send you a SMS with 6 digits number to the following phone number you registered: 
                                </Text>
                            </View>
                            <View style={styles.numberContainer}>
                                <View style={styles.numberContainerLeft}>
                                    <TextInput style={styles.mobileNumber}
                                    keyboardType='phone-pad'
                                    autoFocus={true} >

                                    </TextInput>
                                </View>
                                <View style={styles.numberContainerRight}>
                                    <TouchableOpacity style={styles.numberLink}
                                    TouchableOpacity={0.5} >
                                        <Text style={styles.changeLink}> Change</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.codeContainer}>
                                <View style={styles.codeContainerText}>
                                    <Text style={styles.codeText}>
                                        Enter the OTP Code
                                    </Text>
                                </View>
                                <View style={styles.codeInput}>
                                    <TextInput style={styles.codeOTP}></TextInput>
                                </View>
                            </View>

                        </View>
                    </View>

                    {/* Buttons List */}
                    <View style={styles.buttonList}>
                        <View style={styles.buttonValidateContainer}>
                            <TouchableOpacity activeOpacity={0.5}
                            style={styles.buttonValidate}
                            onPress = {()=>this.props.navigation.navigate('MainLanding')}
                            >
                                <Text style={styles.buttonValidateText}> Validate</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={styles.buttonNewCode}>
                        <TouchableOpacity activeOpacity={0.5}
                            style={styles.newLink}>
                                <Text style={styles.newLinktext}> Send me a new OTP code!</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={{marginTop:scale(20)}}>
                        <TouchableOpacity activeOpacity={0.5}
                            style={{justifyContent:'center', alignItems:'center'}}>
                                <Text style={{color:'red', fontSize:scale(10)}}> I don't recieve the OTP code!</Text>
                            </TouchableOpacity>

                        </View>

                    </View>

                </View>
                
            </View>

        );
    }
}

export default OtpValidation;