import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import UserContext from '../../context/User';

function BottomTab(props) {
    const navigation = useNavigation()
    const { isLoggedIn, cartCount } = useContext(UserContext)
    return (
        <View style={styles.footerContainer}>
            <TouchableOpacity
                onPress={() => navigation.navigate('MainLanding')}
                style={[styles.footerBtnContainer,props.screen === 'HOME' && styles.active]}
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
                onPress={() => navigation.navigate('SearchResult')}
                style={[styles.footerBtnContainer,props.screen === 'SEARCH' && styles.active]}
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
                onPress={() => {
                    if (isLoggedIn)
                        navigation.navigate('ProfileDashboard')
                    else
                        navigation.navigate('SignIn')
                }}
                style={[styles.footerBtnContainer, props.screen === 'PROFILE' && styles.active]}>
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
                style={[styles.footerBtnContainer,props.screen === 'CART' && styles.active]}
            >
                <View style={styles.shoppingContainer}>
                    <Image
                        source={require('../../assets/images/footer/shopping.png')}
                        style={styles.imgResponsive}
                        resizeMode="contain"
                    />
                    <View style={styles.shoppingBadgeContainer}>
                        <Text style={styles.shoppingBadgeStyle}>x{cartCount}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View >
    );
}

export default BottomTab;
