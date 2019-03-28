import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'

/* Config/Constants
============================================================================= */

/* =============================================================================
<BottomTab />
--------------------------------------------------------------------------------

Props:
  ?

============================================================================= */
class BottomTab extends React.Component {
    render() {
        return (
            < View style={styles.footerContainer}>
                <TouchableOpacity style={styles.footerBtnContainer}>
                    <View style={styles.imgContainer}>
                        <Image source={require('../../assets/images/footer/home.png')}
                            style={styles.imgResponsive}
                            resizeMode="contain"
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerBtnContainer}>
                    <View style={styles.imgContainer}>
                        <Image source={require('../../assets/images/footer/search.png')}
                            style={styles.imgResponsive}
                            resizeMode="contain"
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerBtnContainer}>
                    <View style={styles.profileContainer}>
                        <Image source={require('../../assets/images/footer/profile.png')}
                            style={styles.imgResponsive}
                            resizeMode="contain"
                        />
                        <View style={styles.profileBadge}>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerBtnContainer}>
                    <View style={styles.shoppingContainer}>
                        <Image source={require('../../assets/images/footer/shopping.png')}
                            style={styles.imgResponsive}
                            resizeMode="contain"
                        />
                        <View style={styles.shoppingBadgeContainer}>
                            <Text style={styles.shoppingBadgeStyle}>x5</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View >
        )
    }
}
/* Export
============================================================================= */
export default BottomTab