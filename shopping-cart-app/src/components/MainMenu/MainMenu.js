import React from 'react';
import {
    View, Text, Image, TouchableOpacity
} from 'react-native';
import styles from './styles';
import { SafeAreaView } from 'react-navigation';

const navItems = [
    {
        title: 'Home',
        navigateTo: 'MainLanding',
    },
    {
        title: 'Categories',
        navigateTo: 'ProductListing',
    },
    {
        title: 'Profile',
        navigateTo: 'ProfileDashboard',
    },
    {
        title: 'Previous Orders',
        navigateTo: 'PreviousOrders',
    },
    {
        title: 'Search',
        navigateTo: 'Search',
    },
    {
        title: 'Address',
        navigateTo: 'AddressList',
    }
];

function MainMenu(props) {
    return (
        <SafeAreaView forceInset={{top:'always', bottom:'always'}} style={styles.container}>
            <View style={styles.container}>
                <View style={styles.profileContainer}>
                    <View style={styles.profileSubContainer}>
                        <View style={styles.profileImage}>
                            <Image
                                source={require('../../assets/images/mainMenu/menu_avatar.png')}
                                resizeMode="contain"
                                style={styles.imgResponsive3}
                            />
                        </View>
                        <View style={styles.profileTitle}>
                            <Text style={styles.profileTitleStyle}>Sharan Khan</Text>
                        </View>
                        <View style={styles.profilePlace}>
                            <Text style={styles.profilePlaceStyle}>Pakistan</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.middleContainer}>
                    <View style={styles.middleSubContainer}>
                        {
                            navItems.map((item, ind) => (
                                <TouchableOpacity
                                    onPress={() => props.navigation.navigate(item.navigateTo)}
                                    key={ind}
                                    style={styles.navItemContainer}
                                >
                                    <Text style={styles.navItemStyle}>{item.title}</Text>
                                </TouchableOpacity>
                            ))
                        }
                        <View style={styles.navItemContainerImage}>
                            <TouchableOpacity
                                style={styles.navItemImg}>
                                <Image
                                    source={require('../../assets/images/mainMenu/twitter.png')}
                                    resizeMode="contain"
                                    style={styles.imgResponsive}
                                />

                            </TouchableOpacity>
                            <TouchableOpacity
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
                <View style={styles.bottomContainer}>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('SignIn')}
                        style={styles.bottomSubContainer}
                    >
                        <View
                            style={styles.signoutContainerImg}
                        >
                            <Image
                                source={require('../../assets/images/mainMenu/signout.png')}
                                resizeMode="contain"
                                style={styles.imgResponsive}
                            />
                        </View>
                        <View style={styles.signoutContainerText}>
                            <Text style={styles.signoutContainerStyle}>Sign Out</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default MainMenu;