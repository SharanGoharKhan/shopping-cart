import React from 'react';
import {
  Text, TouchableOpacity, View, Image, ImageBackground,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import styles from './styles';
import { scale } from '../../../utils/scaling';
import { colors } from '../../../utils/colors';
import { SimpleLineIcons } from '@expo/vector-icons';

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
                activeOpacity={0}
                onPress={() => props.navigationObj.navigate('SignIn')}
                style={styles.signOutContainer}
              >
                <SimpleLineIcons name="logout" size={scale(20)} color={colors.pinkColor} />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0}
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
              <TouchableOpacity
                activeOpacity={0}
                onPress={() => props.navigationObj.navigate('AddressList')}
                style={{ alignItems: 'center' }}>
                <Image
                  source={require('../../../assets/images/ProfileDashboard/address.png')}
                  resizeMode="contain"
                  style={styles.iconsStyle}
                />
                <Text style={styles.addressText}>Addresses</Text>
              </TouchableOpacity>
              <View style={{ alignItems: 'center' }}>
                <Ionicons
                  name="ios-heart-empty"
                  size={24} />
                <Text style={styles.addressText}>Favourites</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
    </View>
  );
}

export default profileContainer;
