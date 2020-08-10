import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { TextDefault } from '../Text';
import { colors } from '../../utils';

function CheckoutReceipt(props) {
    const navigation = useNavigation()
    return (
        <Modal
            isVisible={props.modalVisible}
            onBackdropPress={props.hideModal}
            onBackButtonPress={props.hideModal}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View style={styles.imageContainer}>
                        <View style={styles.imageSubContainer}>
                            <Image
                                source={require('../../assets/icons/shoppingBagTick.png')}
                                resizeMode="contain"
                                style={styles.imageResponsive}
                            />
                        </View>
                    </View>
                    <View style={styles.titleContainer}>
                        <TextDefault textColor={colors.fontMainColor} H4>
                            {'Hey Sharan,'}
                        </TextDefault>
                    </View>
                    <View style={styles.titleContainer}>
                        <TextDefault textColor={colors.fontMainColor} H4>
                            {'Thanks for your purchase.'}
                        </TextDefault>
                    </View>
                    <View style={styles.line} />
                    <View style={styles.dateContainer}>
                        <TextDefault textColor={colors.fontThirdColor} >
                            {'Sunday 20, Jan 2019'}
                        </TextDefault>
                    </View>
                    <View style={styles.fullWidth}>
                        <View style={styles.halfWidth}>
                            <TextDefault textColor={colors.fontMainColor} H5>
                                {'Total'}
                            </TextDefault>
                        </View>
                        <View style={[styles.halfRightWidth]}>
                            <TextDefault textColor={colors.fontBlue} H5>
                                {'193 PKR'}
                            </TextDefault>
                        </View>
                    </View>
                    <View style={styles.fullWidth}>
                        <View style={styles.halfWidth}>
                            <TextDefault textColor={colors.fontMainColor} H5>
                                {'Order Number'}
                            </TextDefault>
                        </View>
                        <View style={[styles.halfRightWidth]}>
                            <TextDefault textColor={colors.fontBlue} H5>
                                {'#123456789'}
                            </TextDefault>
                        </View>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0}
                        onPress={() => {
                            props.hideModal();
                            navigation.navigate('OrderDetail');
                        }}
                        style={styles.btnContainer}>
                        <TextDefault textColor={colors.buttonText} H5 >
                            {'Order Details'}
                        </TextDefault>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0}
                        onPress={() => {
                            props.hideModal();
                            navigation.navigate('MainLanding');
                        }}
                        style={styles.btnContainer} >
                        <TextDefault textColor={colors.buttonText} H5>
                            {'Continue Shopping'}
                        </TextDefault>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

export default CheckoutReceipt;