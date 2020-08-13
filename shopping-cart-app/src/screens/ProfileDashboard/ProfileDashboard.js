import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import ProfileContainer from './ProfileContainer/ProfileContainer';
import { BottomTab } from '../../components';
import CardContainer from './CardContainer/CardContainer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import UserContext from '../../context/User';

function ProfileDashboard(props) {
  const navigation = useNavigation()
  const { profile } = useContext(UserContext)
  return (
    <SafeAreaView style={[styles.flex, styles.safeAreaStyle]}>
      <View style={[styles.flex, styles.mainContainer]}>
        <ProfileContainer  />
        <View style={styles.tabContainer}>
          <TouchableOpacity>
            <Text style={styles.tabStyleActive}>My Active Orders (3)</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('PreviousOrders')}>
            <Text style={styles.tabStyle}>Previous Orders (35)</Text>
          </TouchableOpacity>
        </View>
        <CardContainer
          navigationObj={props.navigation}
        />
      </View>
      <BottomTab />
    </SafeAreaView>
  );
}

export default ProfileDashboard;
