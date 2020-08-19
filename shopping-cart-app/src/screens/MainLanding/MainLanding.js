import React, { useContext } from 'react';
import { View, FlatList, ImageBackground } from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import styles from './styles';
import CategoryCard from '../../ui/CategoryCard/CategoryCard';
import { BottomTab, TextDefault } from '../../components';
import { verticalScale, scale, colors } from '../../utils';
import ProductCard from '../../ui/ProductCard/ProductCard'
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderBackButton } from '@react-navigation/stack'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { gql, useQuery } from '@apollo/client';
import { categories, produccts } from '../../apollo/server'
import UserContext from '../../context/User'

const caroselImage = [
    require('../../assets/images/MainLanding/banner-1.png'),
    require('../../assets/images/MainLanding/recommended_2.png'),
    require('../../assets/images/MainLanding/carosel_img_3.png'),
    require('../../assets/images/MainLanding/banner-1.png'),
    require('../../assets/images/MainLanding/recommended_2.png'),
    require('../../assets/images/MainLanding/carosel_img_3.png'),
]

const CATEGORIES = gql`${categories}`
const PRODUCTS_DATA = gql`${produccts}`


function MainLanding(props) {
    const navigation = useNavigation()
    const { data: categoryData } = useQuery(CATEGORIES)
    const { data: productsData } = useQuery(PRODUCTS_DATA)
    const Featured = productsData?.products ? productsData.products.filter(item => item.featured) : []
    const { cart, clearCart } = useContext(UserContext)

    // console.log('cart',cart)
    // console.log('clear', clearCart())
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
                {Featured.length > 0 &&
                    < View style={styles.titleSpacer}>
                        <TextDefault textColor={colors.fontMainColor} H4>
                            {'Featured'}
                        </TextDefault>
                        <FlatList
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item, index) => item._id}
                            data={Featured}
                            renderItem={({ item, index }) => {
                                return (
                                    <ProductCard
                                        styles={styles.itemCardContainer}
                                        {...item} />
                                )
                            }}
                        />
                    </View>
                }
                <View style={styles.titleSpacer}>
                    <TextDefault textColor={colors.fontMainColor} H4>
                        {'All Items'}
                    </TextDefault>
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
                    data={productsData ? productsData.products : []}
                    renderItem={({ item }) =>
                        <ProductCard
                            styles={styles.productCard}
                            {...item} />
                    }
                />
                <BottomTab />
            </View>
        </SafeAreaView>
    );
}
export default MainLanding;