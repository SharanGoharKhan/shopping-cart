import React from 'react';
import {
    Text, TouchableOpacity, View, Image,
} from 'react-native';
import styles from './styles'
import Modal from 'react-native-modal';

class ModalGlance extends React.Component {
    render() {
        return (
            <Modal
                onBackButtonPress={this.props.hidden}
                onBackdropPress={this.props.hidden}
                isVisible={this.props.visible}>
                <View style={styles.modalContainer}>
                    <View style={styles.avatarModal}>
                        <Image
                            source={require('../../../assets/images/MainLanding/shop-1-avatar.png')}
                            resizeMode="contain"
                            style={styles.imgResponsive}
                        />
                    </View>
                    <View style={styles.modalContent} >

                        <View style={styles.titleContainer}>
                            <Text style={styles.titleStyle}>Pink Tulip Loom </Text>
                        </View>
                        <View style={styles.titleContainer}>
                            <Text style={styles.subtitleStyle}> Hi! My name is Katja, and I love knitty Chunky Knit &
                                Yarn with Merino Wool dsfgsfd gfsdkghfskgjhfdk jhfdksj hkdsj sfjhg kjsf jsfhgk jsd fhkdsjf hkjdshg</Text>
                        </View>
                    </View>
                    <View style={styles.bottomContainer} >
                        <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.bottomButtonImg}>
                            <Image
                                source={require('../../../assets/images/ProductDescription/kiosk.png')}
                                resizeMode="contain"
                                style={styles.imgResponsive}
                            />
                        </TouchableOpacity>
                        <Text style={styles.bottomButton}> Shop</Text>
                    </View>
                </View>


            </Modal>

        );
    }
}

export default ModalGlance;
