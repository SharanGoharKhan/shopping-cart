import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import ProfileContainer from './ProfileContainer/ProfileContainer'
import BottomTab from '../../components/BottomTab/BottomTab'
import CardContainer from './CardContainer/CardContainer'
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
            <View style={styles.flex}>
                <Image
                    source={require('../../assets/images/statusbar.png')}
                    style={styles.statusBarImage}/>
                <View style={styles.flex}>
                    <ProfileContainer
                    navigationObj={this.props.navigation}
                    />
                    <View style={styles.tabContainer}>
                        <TouchableOpacity>
                            <Text style={styles.tabStyleActive}>My Active Orders (3)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('PreviousOrders')}>
                            <Text style={styles.tabStyle}>Previous Orders (35)</Text>
                        </TouchableOpacity>
                    </View>
                    <CardContainer
                    navigationObj={this.props.navigation}/>
                    <BottomTab
                    navigationObj={this.props.navigation} />
                </View>
            </View>
        )
    }
}
/* Export
============================================================================= */
export default ProfileDashboard