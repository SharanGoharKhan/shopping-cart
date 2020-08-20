import React, { useContext } from 'react';
import { TouchableOpacity, View, ImageBackground } from 'react-native';
import styles from './styles';
import { scale, colors, alignment } from '../../../utils';
import { SimpleLineIcons, Feather } from '@expo/vector-icons';
import UserContext from '../../../context/User';
import { useNavigation } from '@react-navigation/native';
import { TextDefault } from '../../../components';

function profileContainer(props) {
  const navigation = useNavigation()
  const { logout, profile } = useContext(UserContext)
  return (
    <View style={styles.profileContainer}>
      <View style={styles.profileSubContainer}>
        <View style={styles.topProfileContent}>
          <View style={styles.topProfileIconContainer}>
            <SimpleLineIcons name="user" size={scale(15)} color={colors.fontMainColor} />
          </View>
          <View style={styles.topProfileTextContainer}>
            <TextDefault textColor={colors.fontMainColor} H4>
              {'Profile'}
            </TextDefault>
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
                onPress={() => {
                  logout()
                  navigation.navigate('MainLanding')
                }}
                style={styles.iconContainer}
              >
                <SimpleLineIcons name="logout" size={scale(20)} color={colors.pinkColor} />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0}
                onPress={() => navigation.navigate('EditingProfile')}
                style={styles.iconContainer}
              >
                <Feather name='edit' size={scale(20)} color={colors.fontThirdColor} />
              </TouchableOpacity>
            </View>
            <View style={styles.profileImageContainer}>
              <View style={styles.profileImage}>
                <SimpleLineIcons name="user" size={scale(40)} color={colors.fontBrown} />
              </View>
            </View>
            <View style={styles.nameContainer}>
              <TextDefault style={[alignment.PLxSmall, alignment.PRxSmall]} numberOfLines={2} textColor={colors.fontMainColor} H4>
                {profile.name}
              </TextDefault>
            </View>
            <View style={styles.addressContainer}>
              <TouchableOpacity
                activeOpacity={0}
                onPress={() => navigation.navigate('AddressList')}
                style={{ alignItems: 'center' }}>
                <SimpleLineIcons name="location-pin" size={scale(20)} color={colors.fontThirdColor} />
                <TextDefault textColor={colors.fontSecondColor}>
                  {'Addresses'}
                </TextDefault>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </View>
    </View >
  );
}

export default profileContainer;
