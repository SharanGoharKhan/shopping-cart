import React from 'react';
import {
    Text, TouchableOpacity, View, TextInput,
} from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';

function ForgotPassword(props) {
    return (
        <Modal
            isVisible={props.modalVisible}
            onBackdropPress={props.hideModal}
            onBackButtonPress={props.hideModal}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleStyle}>Forgot password</Text>
                    </View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.subtitleStyle}>No worries, let us help you out!</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={{ textAlign: 'center', flex: 1 }}
                            placeholder="Your Email"
                            placeholderTextColor="black"
                        />
                    </View>
                    <TouchableOpacity
                        onPress={props.hideModal}
                        style={[styles.btnContainer, styles.brownColor]}
                    >
                        <Text style={styles.sendStyle}>Send</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

export default ForgotPassword;
