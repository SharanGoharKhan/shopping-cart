import React from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity} from 'react-native'
import styles from './styles'

import {moderateScale} from '../../utils/scaling'
import {StatusBar} from 'react-native'

import Dropdown from '../../ui/Dropdowns/Dropdown'
import SearchBar from '../../ui/SearchBar/SearchBar'

import FullCard from './Card/FullCard'

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
    {name: 'Leather crossbody MID Bag', rating: 5, totalVotes: 401, prev_price:null, price: 120, bagde:"new", image:null},
    {name: "Photographer's belt and harness", rating: 3, totalVotes: 274, prev_price: 39 ,price: 29, bagde:null, image:null},
    
]

class SearchResult extends React.Component {

    constructor(){
        super()
        searchedTerm  = "Leather"
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
                    <TouchableOpacity onPress={()=>console.log("Show modal")}>
                        <Image 
                            style={{height: moderateScale(32), width: moderateScale(42), marginBottom: moderateScale(5)}}
                            source={require('../../assets/icons/header.png')}
                            />
                    </TouchableOpacity>
                </View>
                <View style={[styles.main]}>
                    <View style={styles.searchBarContainer}>
                        <SearchBar placeholderText={searchedTerm} />
                    </View>
                    <View style={styles.mainBodyContainer}>
                        <View style={styles.mainBody}>
                            <View style={styles.mixed_text}>
                                <Text style={styles.bold}>
                                     {DATA.length}  
                                </Text>
                                <Text style={styles.text}>
                                     results found for:  
                                </Text>
                                <Text style={styles.bold}>
                                     {searchedTerm}
                                </Text>
                            </View>
                            <ScrollView style={styles.main_scroller}>
                            {DATA.map((item,i)=>
                                    <FullCard
                                        productName= {item.name}
                                        productRating= {item.rating}
                                        productTotalVotes= {item.totalVotes}
                                        productBadge= {item.bagde}
                                        productPreviousPrice= {item.prev_price}
                                        productNewPrice= {item.price} 
                                        key={i}/>
                                )}
                            </ScrollView>
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
export default SearchResult