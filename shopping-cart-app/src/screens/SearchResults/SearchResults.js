import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import styles from './styles';
import SearchBar from '../../ui/SearchBar/SearchBar';
import FullCard from './Card/FullCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackHeader, TextDefault, BottomTab, Spinner, TextError } from '../../components';
import { colors } from '../../utils';
import { useQuery, gql } from '@apollo/client'
import { produccts } from '../../apollo/server'

const PRODUCTS_DATA = gql`${produccts}`

function SearchResults(props) {

    const [search, setSearch] = useState('')
    const [isPressed, setIsPressed] = useState(false)
    const { data, loading, error } = useQuery(PRODUCTS_DATA)

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
        return (
            <View style={styles.mainBody}>
                <View style={styles.filter}>
                    <View style={styles.mixed_text}>
                        {<TextDefault textColor={colors.fontSecondColor} H5>
                            {!!search ? searchProducts(search).length : 0}{' results found for: '} {search}
                        </TextDefault>}
                    </View>
                </View>
                <ScrollView style={styles.main_scroller}>
                    {!!search && searchProducts(search).map((item, i) => (
                        <FullCard
                            productImage={item.image[0]}
                            productName={item.title}
                            productNewPrice={item.price}
                            product={item}
                            key={i}
                        />
                    ))}
                </ScrollView>
            </View>
        )
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
                        <View style={styles.mainBodyContainer}>
                            {error ? <TextError text={error.message} /> :
                                loading ? <Spinner /> :
                                    isPressed && renderSearchResult()
                            }
                        </View>
                    </View>
                </View>
            </View>
            <BottomTab
                screen='SEARCH' />
        </SafeAreaView>
    )
}

export default SearchResults;