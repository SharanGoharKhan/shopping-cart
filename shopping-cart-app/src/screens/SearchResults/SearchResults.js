import React from 'react'
import { View, Text, Image, TextInput} from 'react-native'
import styles from './styles'

import {moderateScale} from '../../utils/scaling'
import {StatusBar} from 'react-native'

import Dropdown from '../../ui/Dropdowns/Dropdown'
import SearchBar from '../../ui/SearchBar/SearchBar'

/* Config/Constants
============================================================================= */



/* =============================================================================
<Search />
--------------------------------------------------------------------------------

Props:
  ?

============================================================================= */

const CATEGORIES = ["Arts & Crafts", "Accessories", "Event Ideas", "Fashion", "Food & Drinks", "Health & Beauty"]
const DATA = [
    {Name: 'Leather crossbody MID Bag', rating: 5, totalVotes: 401, prev_price:null, price: 120, bagde:"new", image:null},
    {Name: "Photographer's belt and harness", rating: 3, totalVotes: 274, prev_price: 39,price: 29, bagde:"new", image:null},
]

class Search extends React.Component {

    constructor(){
        super()
    }


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
            <View style={[styles.body]}>
                <View style={[styles.header]}>
                    <View style={[styles.headerLeft]}>
                        <Text style={styles.header_text}>Search  In  </Text>
                        <Dropdown items={CATEGORIES}/>
                    </View>
                    <Text > Slider </Text>
                </View>
                <View style={[styles.main]}>
                    <View style={styles.searchBarContainer}>
                        <SearchBar/>
                    </View>
                    <View style={styles.mainBodyContainer}>
                        <Text></Text>
                        <View style={styles.mainBody}>
                        </View>
                    </View>
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