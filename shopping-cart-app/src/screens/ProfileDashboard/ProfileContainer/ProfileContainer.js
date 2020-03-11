import React from 'react';
import {
  Text, TouchableOpacity, View, Image, ImageBackground,
} from 'react-native';
import styles from './styles';

function profileContainer(props) {
  return (
    <View style={styles.profileContainer}>
      <View style={styles.profileSubContainer}>
        <View style={styles.topProfileContent}>
          <View style={styles.topProfileIconContainer}>
            <Image
              source={require('../../../assets/images/footer/profile.png')}
              resizeMode="contain"
              style={styles.imgResponsive}
            />
          </View>
          <View style={styles.topProfileTextContainer}>
            <Text style={styles.topProfileTextStyle}>Profile</Text>
          </View>
        </View>
        <View style={styles.profieCenterContainer}>
          <ImageBackground
            source={require('../../../assets/images/formBackground.png')}
            style={styles.imgResponsive3}
          >
            <View style={styles.profileCenterContainerTop}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Auth', { screen: 'SignIn' })}
                style={styles.signOutContainer}
              >
                <Image
                  source={require('../../../assets/images/mainMenu/signout.png')}
                  resizeMode="contain"
                  style={styles.imgResponsive}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.navigationObj.navigate('EditingProfile')}
                style={styles.editContainer}
              >
                <Image
                  source={require('../../../assets/images/ProfileDashboard/edit.png')}
                  resizeMode="contain"
                  style={styles.imgResponsive}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.profileImageContainer}>
              <View
                style={styles.profileImage}
              >
                <Image
                  source={require('../../../assets/images/mainMenu/menu_avatar.png')}
                  style={styles.imgResponsive2}
                  resizeMode="contain"
                />
              </View>

            </View>
            <View style={styles.nameContainer}>
              <Text style={styles.nameStyle}>Sharan Khan</Text>
            </View>
            <View style={styles.placeContainer}>
              <Text style={styles.placeStyle}>Pakistan</Text>
            </View>
            <View style={styles.addressContainer}>
              <View style={styles.addressIcon}>
                <Image
                  source={require('../../../assets/images/ProfileDashboard/address.png')}
                  resizeMode="contain"
                  style={styles.imgResponsive}
                />

              </View>
              <TouchableOpacity
                onPress={() => props.navigationObj.navigate('AddressList')}
                style={styles.addressText}
              >
                <Text style={styles.placeStyle}>Addresses</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </View>
    </View>
  );
}

export default profileContainer;
