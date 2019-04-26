import React from 'react';
import {
  View, Text, Image, TouchableOpacity, StatusBar, Platform
} from 'react-native';
import styles from './styles';
import ProfileContainer from './ProfileContainer/ProfileContainer';
import BottomTab from '../../components/BottomTab/BottomTab';
import CardContainer from './CardContainer/CardContainer';
import { SafeAreaView } from 'react-navigation';
/* Config/Constants
============================================================================= */


/* =============================================================================
<ProfileDashboard />
--------------------------------------------------------------------------------

Props:
  ?

============================================================================= */
class ProfileDashboard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SafeAreaView style={styles.flex}>
          <StatusBar backgroundColor="transparent" barStyle={Platform.OS == 'ios' ? "dark-content" : "light-content"} hidden={false} translucent />
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
/* Export
============================================================================= */
export default ProfileDashboard;
