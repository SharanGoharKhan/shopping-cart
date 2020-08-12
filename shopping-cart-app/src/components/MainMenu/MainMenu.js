import React, { useContext } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SimpleLineIcons } from '@expo/vector-icons';
import UserContext from '../../context/User'
import { scale, colors, alignment } from '../../utils';
import { TextDefault } from '../Text'
import { useNavigation, DrawerActions } from '@react-navigation/native'

const navItems = [
    {
        title: 'Home',
        navigateTo: 'MainLanding',
        isAuth: false,
    },
    {
        title: 'Categories',
        navigateTo: 'ProductListing',
        isAuth: false,
    },
    {
        title: 'Profile',
        navigateTo: 'ProfileDashboard',
        isAuth: true,
    },
    {
        title: 'Previous Orders',
        navigateTo: 'PreviousOrders',
        isAuth: true,
    },
    {
        title: 'Search',
        navigateTo: 'Search',
        isAuth: false,
    },
    {
        title: 'Address',
        navigateTo: 'AddressList',
        isAuth: true,
    }
];

function MainMenu(props) {
    const navigation = useNavigation()
    const { isLoggedIn, logout, profile } = useContext(UserContext)
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <View style={styles.profileContainer}>
                    {isLoggedIn && profile && (
                        <View style={styles.profileSubContainer}>
                            <View style={styles.profileImage}>
                                <SimpleLineIcons name="user" size={scale(30)} color={colors.fontBrown} />
                            </View>
                            <View style={styles.profileTitle}>
                                <TextDefault numberOfLines={2} textColor={colors.fontMainColor} H4 center>
                                    {profile.name}
                                </TextDefault>
                            </View>
                            <View style={styles.profilePlace}>
                                <TextDefault textColor={colors.fontMainColor} center>
                                    {'Pakistan'}
                                </TextDefault>
                            </View>
                        </View>)}
                    {!isLoggedIn && (
                        <View style={styles.loginContainer}>
                            <TouchableOpacity activeOpacity={0.6}
                                onPress={() => {
                                    navigation.navigate('SignIn')
                                }}
                            >
                                <TextDefault textColor={colors.fontMainColor} H5 style={[alignment.PTmedium, alignment.PBmedium]}>
                                    {'Login/Create Account'}
                                </TextDefault>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
                <View style={styles.middleContainer}>
                    <View style={styles.middleSubContainer}>
                        {
                            navItems.map((item, ind) => (
                                <TouchableOpacity
                                    activeOpacity={0}
                                    onPress={() => {
                                        if (item.isAuth && !isLoggedIn) {
                                            props.navigation.navigate('SignIn')
                                        } else {
                                            props.navigation.navigate(item.navigateTo)
                                        }
                                    }}
                                    key={ind}
                                    style={styles.navItemContainer}>
                                    <TextDefault textColor={colors.fontMainColor} H4 style={alignment.PLlarge}>
                                        {item.title}
                                    </TextDefault>
                                </TouchableOpacity>
                            ))
                        }
                        <View style={styles.navItemContainerImage}>
                            <TouchableOpacity
                                activeOpacity={0}
                                style={styles.navItemImg}>
                                <Image
                                    source={require('../../assets/images/mainMenu/twitter.png')}
                                    resizeMode="contain"
                                    style={styles.imgResponsive}
                                />

                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0}
                                style={styles.navItemImg}>
                                <Image
                                    source={require('../../assets/images/mainMenu/instagram.png')}
                                    resizeMode="contain"
                                    style={styles.imgResponsive}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                {isLoggedIn && (
                    <View style={styles.bottomContainer}>
                        <TouchableOpacity
                            activeOpacity={0}
                            onPress={() => {
                                logout()
                                navigation.dispatch(DrawerActions.closeDrawer())
                            }}
                            style={styles.bottomSubContainer}
                        >
                            <SimpleLineIcons name="logout" size={scale(20)} color={colors.pinkColor} />
                            <View style={styles.signoutContainerText}>
                                <TextDefault numberOfLines={1} textColor={colors.pinkColor} style={styles.signoutContainerStyle} H4>
                                    {'Sign Out'}
                                </TextDefault>
                            </View>
                        </TouchableOpacity>
                    </View>)}
            </View>
        </SafeAreaView>
    );
}

export default MainMenu;