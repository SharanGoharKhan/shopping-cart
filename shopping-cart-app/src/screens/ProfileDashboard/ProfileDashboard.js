import React, { useContext } from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './styles';
import ProfileContainer from './ProfileContainer/ProfileContainer';
import { BottomTab, TextDefault } from '../../components';
import CardContainer from './CardContainer/CardContainer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import UserContext from '../../context/User';
import { colors } from '../../utils';

function ProfileDashboard(props) {
  const navigation = useNavigation()
  const { orders } = useContext(UserContext)
  return (
    <SafeAreaView style={[styles.flex, styles.safeAreaStyle]}>
      <View style={[styles.flex, styles.mainContainer]}>
        <ProfileContainer />
        <View style={styles.tabContainer}>
          <TouchableOpacity>
            <TextDefault textColor={colors.fontBrown} H5>
              My Active Orders ({orders?orders.filter(o => ['PENDING', 'PICKED', 'ACCEPTED'].includes(o.orderStatus)).length:0})
            </TextDefault>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('PreviousOrders')}>
            <TextDefault H5>
              Previous Orders ({orders?orders.filter(o => ['DELIVERED'].includes(o.orderStatus)).length:0})
            </TextDefault>
          </TouchableOpacity>
        </View>
        <CardContainer />
      </View>
      <BottomTab />
    </SafeAreaView>
  );
}

export default ProfileDashboard;
