import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';
import SearchBar from '../../ui/SearchBar/SearchBar';
import FullCard from './Card/FullCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackHeader, TextDefault, BottomTab, Spinner, TextError } from '../../components';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { scale, colors } from '../../utils';
import FilterModal from '../../components/FilterMoal/FilterModal';
import { useQuery, gql } from '@apollo/client'
import { produccts, product } from '../../apollo/server'

const PRODUCTS_DATA = gql`${produccts}`

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

function SearchResults(props) {

    const [search, setSearch] = useState('')
    const [isPressed, setIsPressed] = useState(false)
    const { data, loading, error } = useQuery(PRODUCTS_DATA)



    if (loading) return <Spinner />
    if (error) return <TextError text={error} />

    const searchProducts = searchText => {
        const productData = []
        data.products.forEach(product => {
            const regex = new RegExp(
                searchText.replace(/[\\[\]()+?.*]/g, c => '\\' + c),
                'i'
            )
            const result = product.title.search(regex)
            if (result < 0) {
                const result = product.subCategory.title.search(regex)
                if (result < 0) {
                    const result = product.subCategory.title.search(regex)
                    return result
                }
                if (!result) return
            }
            productData.push(product)
        })
        return productData
    }

    function renderSearchResult() {
        return <View style={styles.mainBodyContainer}>
            <View style={styles.mainBody}>
                <View style={styles.filter}>
                    <View style={styles.mixed_text}>
                        {<TextDefault textColor={colors.fontSecondColor} H5>
                            {searchProducts(search).length}{' results found for: '} {search}
                        </TextDefault>}
                    </View>

                </View>
                <ScrollView style={styles.main_scroller}>
                    {search ? searchProducts(search).map((item, i) => (
                        <FullCard
                            productImage={item.image[0]}
                            productName={item.title}
                            productNewPrice={item.price}
                            product={item}
                            key={i}
                        />
                    )) :
                        <View style={styles.mixed_text}>
                            <TextDefault textColor={colors.fontSecondColor} H5>
                                {' result not found'}
                            </TextDefault>
                        </View>}
                </ScrollView>
            </View>
        </View>
    }
    return (
        <SafeAreaView style={[styles.flex, styles.safeAreaStyle]}>
            <View style={styles.flex}>
                <BackHeader
                    title="Search"
                    backPressed={() => props.navigation.goBack()} />
                <View style={[styles.body]}>
                    <View style={[styles.main]}>
                        <View style={styles.searchBarContainer}>
                            <SearchBar
                                onChange={
                                    (e) => {
                                        setSearch(e.nativeEvent.text.trim())
                                        setIsPressed(false)
                                    }}
                                onPress={() => {
                                    setIsPressed(true)
                                }} placeholderText={'Search'} />
                        </View>
                        {isPressed && renderSearchResult()}
                    </View>
                    <View style={styles.footer}>
                    </View>
                </View>
            </View>
            <BottomTab />
        </SafeAreaView>
    )
}

export default SearchResults;