import React from 'react';
import {
    View, Text, Image, ScrollView, TouchableOpacity, Platform
} from 'react-native';
import { StatusBar } from 'react-native';
import styles from './styles';

import { moderateScale } from '../../utils/scaling';

import Dropdown from '../../ui/Dropdowns/Dropdown';
import SearchBar from '../../ui/SearchBar/SearchBar';
import BottomTab from '../../components/BottomTab/BottomTab';
import FullCard from './Card/FullCard';
import { SafeAreaView } from 'react-navigation';

/* Config/Constants
============================================================================= */


/* =============================================================================
<Search />
--------------------------------------------------------------------------------

Props:
  ?

============================================================================= */

const CATEGORIES = [
    {
        value: 'Arts & Crafts',
    },
    {
        value: 'Event Ideas',
    },
    {
        value: 'Food & Drinks',
    },
    {
        value: 'Accessories',
    },
    {
        value: 'Fashion'

    },
    {
        value: 'Health & Beauty'
    }
];
const DATA = [
    {
        name: 'Leather crossbody MID Bag',
        rating: 5,
        totalVotes: 401,
        prev_price: null,
        price: 120,
        bagde: 'new',
        image: require('../../assets/images/MainLanding/shop-2-collage-2.png'),
    },
    {
        name: "Photographer's belt and harness",
        rating: 3,
        totalVotes: 274,
        prev_price: 39,
        price: 29,
        bagde: null,
        image: require('../../assets/images/ProductListing/belt.png'),
    },

];

class SearchResult extends React.Component {
    constructor() {
        super();
        searchedTerm = 'Leather';
    }


    render() {
        return (
            <React.Fragment>
                <SafeAreaView style={styles.flex}>
                    <View>
                        <StatusBar backgroundColor="transparent" barStyle={Platform.OS == 'ios' ? "dark-content" : "light-content"} hidden={false} translucent />
                        <View style={[styles.body]}>
                            <View style={[styles.header]}>
                                <View style={[styles.headerLeft]}>
                                    <Text style={[styles.header_text, { alignSelf: 'flex-end', marginBottom: 30 }]}>Search  In  </Text>
                                    <Dropdown items={CATEGORIES} />
                                </View>
                                <TouchableOpacity onPress={() => console.log('Show modal')}>
                                    <Image
                                        style={{ height: moderateScale(32), width: moderateScale(42), marginBottom: moderateScale(5) }}
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
                                            {DATA.map((item, i) => (
                                                <FullCard
                                                    productImage={item.image}
                                                    productName={item.name}
                                                    productRating={item.rating}
                                                    productTotalVotes={item.totalVotes}
                                                    productBadge={item.bagde}
                                                    productPreviousPrice={item.prev_price}
                                                    productNewPrice={item.price}
                                                    key={i}
                                                />
                                            ))}
                                        </ScrollView>
                                    </View>

                                </View>
                            </View>
                            <View style={styles.footer}>

                            </View>
                        </View>
                    </View>
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
export default SearchResult;
