import React from 'react'
import { View, Text, Image} from 'react-native'
import styles from './styles'
import {StatusBar} from 'react-native'

import Dropdown from '../../ui/Dropdowns/Dropdown'
import SearchBar from '../../ui/SearchBar/SearchBar'
import CategoryCard from './CategoryCard/CategoryCard'
import BottomTab from '../../components/BottomTab/BottomTab'

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
            <View style={[styles.body]}>
                <View style={[styles.header]}>
                    <Text style={styles.header_text}>Search  In  </Text>
                    <Dropdown items={CATEGORIES}/>
                </View>
                <View style={[styles.main]}>
                    <View style={styles.searchBarContainer}>
                        <SearchBar onPress={() => this.props.navigation.navigate('SearchResult')} placeholderText="What are you looking for?"/>
                    </View>
                    <View style={styles.mainBodyContainer}>
                        <View style={styles.mainBody}>
                            <View style={styles.mixed_text}>
                                <Text style={styles.text}>Our </Text>
                                <Text style={styles.colored_text}>1342 </Text>
                                <Text style={styles.text}>Products are distributed in these categories</Text>
                            </View>
                     
                            <View>
                                <View style={styles.row}>
                                    <CategoryCard
                                    onPress={() => this.props.navigation.navigate('ProductListing')} 
                                    text="Accessories"/>
                                    <CategoryCard
                                    onPress={() => this.props.navigation.navigate('ProductListing')} 
                                    text="Arts & Crafts"/>
                                </View>
                                <View style={styles.row}>
                                    <CategoryCard
                                    onPress={() => this.props.navigation.navigate('ProductListing')} 
                                    text="Event Ideas"/>
                                    <CategoryCard text="Fashion"/>
                                </View>
                                <View style={styles.row}>
                                    <CategoryCard
                                    onPress={() => this.props.navigation.navigate('ProductListing')} 
                                    text="Food & Drinks"/>
                                    <CategoryCard
                                    onPress={() => this.props.navigation.navigate('ProductListing')} 
                                    text="Health & Beauty"/>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.footer}>
                    <BottomTab
                    navigationObj={this.props.navigation}/>
                </View>
            </View>
           
        </View>
        )
    }
}
/* Export
============================================================================= */
export default Search