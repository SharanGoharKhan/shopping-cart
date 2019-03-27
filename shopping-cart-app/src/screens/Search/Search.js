import React from 'react'
import { View, Text, Image, TextInput} from 'react-native'
import styles from './styles'

import {moderateScale} from '../../utils/scaling'
import {StatusBar} from 'react-native'

import Dropdown from '../../ui/Dropdowns/Dropdown'

/* Config/Constants
============================================================================= */



/* =============================================================================
<Search />
--------------------------------------------------------------------------------

Props:
  ?

============================================================================= */

const CATEGORIES = ["Arts & Crafts", "Accessories", "Event Ideas", "Fashion", "Food & Drinks", "Health & Beauty"]

class Search extends React.Component {
    render() {
        return (
            <View style={styles.container}>
            <StatusBar backgroundColor={'transparent'} barStyle = "light-content" hidden = {false}  translucent = {false}/>
            <View style={styles.statusBarImage}>
                <Image
                    source={require('../../assets/images/statusbar.png')}
                    style={{
                        height: StatusBar.currentHeight,
                        width:'100%'
                    }}
                    />
            </View>
            <View style={styles.body}>
                <View style={[styles.header,{zIndex:1}]}>
                    <Text style={styles.header_text}>Search In </Text>
                    <Dropdown items={CATEGORIES}/>
                </View>
                <View style={[styles.main,{zIndex:-1}]}>
                    <Text style={{backgroundColor:'blue'}}>I am the body</Text>
                </View>
                <View style={styles.footer}>
                        <Text>Placeholder for menus</Text>
                </View>
            </View>
           
        </View>
        )
    }
}
/* Export
============================================================================= */
export default Search