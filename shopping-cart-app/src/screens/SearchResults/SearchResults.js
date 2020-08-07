import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';
import SearchBar from '../../ui/SearchBar/SearchBar';
import FullCard from './Card/FullCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackHeader, TextDefault, BottomTab } from '../../components';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { scale, colors } from '../../utils';
import FilterModal from '../../components/FilterMoal/FilterModal';

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
const searchedTerm = 'Leather'

function SearchResults(props) {
    const [filterModal, setFilterModal] = useState(false)
    const [filters, setFilters] = useState({})

    function toggleFilterModal() {
        setFilterModal(prev => !prev)
    }
    return (
        <SafeAreaView style={styles.flex}>
            <View style={[styles.flex, styles.mainContainer]}>
                <BackHeader
                    title="Search"
                    backPressed={() => props.navigation.goBack()} />
                <View style={[styles.body]}>
                    <View style={[styles.main]}>
                        <View style={styles.searchBarContainer}>
                            <SearchBar placeholderText={searchedTerm} />
                        </View>
                        <View style={styles.mainBodyContainer}>
                            <View style={styles.mainBody}>
                                <View style={styles.filter}>
                                    <View style={styles.mixed_text}>
                                        <TextDefault textColor={colors.fontSecondColor} H5>
                                            {DATA.length}{' results found for: '} {searchedTerm}
                                        </TextDefault>
                                    </View>
                                    <TouchableOpacity
                                        style={styles.filterButton}
                                        activeOpacity={0}
                                        onPress={toggleFilterModal}>
                                        <MaterialCommunityIcons name="tune-vertical" size={scale(20)} color={colors.buttonBackground} />
                                    </TouchableOpacity>
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
            <FilterModal
                visible={filterModal}
                onModalToggle={toggleFilterModal}
                setFilters={setFilters}
            />
            <BottomTab />
        </SafeAreaView>
    )
}

export default SearchResults;