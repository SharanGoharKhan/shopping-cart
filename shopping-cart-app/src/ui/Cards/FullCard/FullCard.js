import React from 'react'
import { View, Text,Image  } from 'react-native'

import styles from './styles'
import { moderateScale } from '../../../utils/scaling';


/* Config/Constants
============================================================================= */


/* =============================================================================
<FullCard />
--------------------------------------------------------------------------------

Props:
  ?

============================================================================= */
class FullCard extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View  style={styles.leftside}>
                    <Image 
                        style={styles.thumbnail}
                        resizeMode="cover"
                        source={require('../../../assets/images/productPlaceholder.jpg')}/>
                </View>
                <View style={styles.rightside_container}>
                    <View style={styles.rightside}>
                        <View style={styles.rightside_top}>
                            <Text style={styles.product} numberOfLines={1}>Leather Crossbody MID Something something</Text>
                            <View style={styles.row}>
                                <Text style={styles.by}>By </Text>
                                <Text style={styles.brand} numberOfLines={1}>EQ Custom Leather  </Text>
                            </View>
                        </View>
                        <View style={styles.rightside_bot}>
                            <View style={styles.special_row}>
                                <Text style={styles.qty}> x1 </Text>
                                <Text style={styles.amount}> 29 KWD</Text>
                            </View>
                        </View>

                    </View>
                </View>
            </View>
        )
    }
}
/* Export
============================================================================= */
export default FullCard