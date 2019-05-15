import React from 'react';
import {
  View, Text, TouchableOpacity, StatusBar
} from 'react-native';
import styles from './styles';
import ProfileContainer from './ProfileContainer/ProfileContainer';
import BottomTab from '../../components/BottomTab/BottomTab';
import CardContainer from './CardContainer/CardContainer';
import { SafeAreaView } from 'react-navigation';

class ProfileDashboard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SafeAreaView style={styles.flex}>
          <ProfileContainer
            navigationObj={this.props.navigation}
          />
          <View style={styles.tabContainer}>
            <TouchableOpacity>
              <Text style={styles.tabStyleActive}>My Active Orders (3)</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('PreviousOrders')}
            >
              <Text style={styles.tabStyle}>Previous Orders (35)</Text>
            </TouchableOpacity>
          </View>
          <CardContainer
            navigationObj={this.props.navigation}
          />
        </SafeAreaView>
        <BottomTab
          navigationObj={this.props.navigation}
        />
      </React.Fragment>
    );
  }
}

export default ProfileDashboard;
