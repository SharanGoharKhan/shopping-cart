import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import ProfileContainer from './ProfileContainer/ProfileContainer';
import BottomTab from '../../components/BottomTab/BottomTab';
import CardContainer from './CardContainer/CardContainer';

function ProfileDashboard(props){
    return (
      <React.Fragment>
        <View style={styles.flex}>
          <ProfileContainer
            navigationObj={props.navigation}
          />
          <View style={styles.tabContainer}>
            <TouchableOpacity>
              <Text style={styles.tabStyleActive}>My Active Orders (3)</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('PreviousOrders')}
            >
              <Text style={styles.tabStyle}>Previous Orders (35)</Text>
            </TouchableOpacity>
          </View>
          <CardContainer
            navigationObj={props.navigation}
          />
        </View>
        <BottomTab
          navigationObj={props.navigation}
        />
      </React.Fragment>
    );
}

export default ProfileDashboard;
