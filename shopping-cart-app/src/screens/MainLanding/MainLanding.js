import React from 'react';
import { View, FlatList, Text, ImageBackground } from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import styles from './styles';
import CategoryCard from '../../ui/CategoryCard/CategoryCard';
import { BottomTab } from '../../components';
import { OFFERS, PRODUCTS, verticalScale, scale, colors } from '../../utils';
import ProductCard from '../../ui/ProductCard/ProductCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderBackButton } from '@react-navigation/stack'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { gql, useQuery } from '@apollo/client';
import { categories } from '../../apollo/server'

const caroselImage = [
    require('../../assets/images/MainLanding/banner-1.png'),
    require('../../assets/images/MainLanding/recommended_2.png'),
    require('../../assets/images/MainLanding/carosel_img_3.png'),
    require('../../assets/images/MainLanding/banner-1.png'),
    require('../../assets/images/MainLanding/recommended_2.png'),
    require('../../assets/images/MainLanding/carosel_img_3.png'),
]

const CATEGORIES = gql`${categories}`


function MainLanding(props) {
    const navigation = useNavigation()
    const { data: categoryData } = useQuery(CATEGORIES)

    function renderCarosel() {
        return (
            <View style={styles.caroselContainer}>
                <SwiperFlatList
                    index={0}
                    showPagination
                    autoplay
                    autoplayDelay={3}
                    autoplayLoop={true}
                    paginationActiveColor="#fff"
                    paginationStyle={{ marginBottom: '7%' }}
                    paginationStyleItem={{ height: verticalScale(8), width: verticalScale(8), marginLeft: 0 }}
                >
                    {Array(caroselImage.length).fill(0).map((value, index) => (
                        <ImageBackground
                            key={index}
                            source={caroselImage[index]}
                            style={styles.caroselStyle}
                        />
                    ))}
                </SwiperFlatList>
                <View style={styles.menuDrawerContainer}>
                    <HeaderBackButton
                        labelVisible={false}
                        backImage={() =>
                            <MaterialIcons
                                name="menu"
                                size={scale(30)}
                                style={styles.leftIconPadding}
                                color={colors.fontSecondColor}
                            />
                        }
                        onPress={() => navigation.toggleDrawer()}
                    />
                </View>
            </View>
        )
    }

    function renderHeader() {
        return (
            <>
                {renderCarosel()}
                <View style={styles.categoryContainer}>
                    {categoryData && categoryData.categories.map((category, index) => {
                        return (
                            <CategoryCard
                                key={index}
                                cardLabel={category.title}
                                id={category._id}
                            />
                        )
                    })}
                </View>
                {
                    OFFERS.map((offer, index) => {
                        return (
                            <View key={index} style={styles.titleSpacer}>
                                <Text style={styles.headingText}>{offer.offer_name}</Text>
                                <FlatList
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                    keyExtractor={(item, index) => index.toString()}
                                    data={offer.items}
                                    renderItem={({ item, index }) => {
                                        return (
                                            <View
                                                key={index}
                                                style={styles.itemCardContainer}>
                                                <ProductCard
                                                    cardPressed={() => navigation.navigate('ProductListing')}
                                                    item={item} />
                                            </View>
                                        )
                                    }}
                                />
                            </View>
                        )
                    })
                }
                <View style={styles.titleSpacer}>
                    <Text style={styles.headingText}>All Items</Text>
                </View>
            </>
        )
    }

    return (
        <SafeAreaView style={[styles.flex, styles.safeAreaStyle]}>
            <View style={[styles.grayBackground, styles.flex]}>
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    ListHeaderComponent={renderHeader}
                    data={PRODUCTS}
                    renderItem={({ item }) => <ProductCard
                        styles={styles.productCard}
                        cardPressed={() => navigation.navigate('ProductListing')}
                        item={item} />
                    }
                />
                <BottomTab />
            </View>
        </SafeAreaView>
    );
}
export default MainLanding;