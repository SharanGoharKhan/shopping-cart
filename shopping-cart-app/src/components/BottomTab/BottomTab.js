import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

function BottomTab() {
    const navigation = useNavigation()
    return (
        <View style={styles.footerContainer}>
            <TouchableOpacity
                onPress={() => navigation.navigate('MainLanding')}
                style={styles.footerBtnContainer}
            >
                <View style={styles.imgContainer}>
                    <Image
                        source={require('../../assets/images/footer/home.png')}
                        style={styles.imgResponsive}
                        resizeMode="contain"
                    />
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Search')}
                style={styles.footerBtnContainer}
            >
                <View style={styles.imgContainer}>
                    <Image
                        source={require('../../assets/images/footer/search.png')}
                        style={styles.imgResponsive}
                        resizeMode="contain"
                    />
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('ProfileDashboard')}
                style={styles.footerBtnContainer}
            >
                <View style={styles.profileContainer}>
                    <Image
                        source={require('../../assets/images/footer/profile.png')}
                        style={styles.imgResponsive}
                        resizeMode="contain"
                    />
                    <View style={styles.profileBadge} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('ShoppingCart')}
                style={styles.footerBtnContainer}
            >
                <View style={styles.shoppingContainer}>
                    <Image
                        source={require('../../assets/images/footer/shopping.png')}
                        style={styles.imgResponsive}
                        resizeMode="contain"
                    />
                    <View style={styles.shoppingBadgeContainer}>
                        <Text style={styles.shoppingBadgeStyle}>x5</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default BottomTab;
