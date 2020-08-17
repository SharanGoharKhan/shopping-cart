import React, { useState, useContext, useEffect } from 'react';
import { View, TouchableOpacity, Image, FlatList } from 'react-native';
import styles from './styles';
import { BackHeader, BottomTab, TextDefault, Spinner } from '../../components';
import Button from '../../ui/Buttons/Button';
import VariationSection from './VariationSection/VariationSection';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { colors, alignment, scale } from '../../utils';
import { MaterialIcons } from '@expo/vector-icons';
import UserContext from '../../context/User';
import { gql, useQuery } from '@apollo/client';
import { productById } from '../../apollo/server';
import ConfigurationContext from '../../context/Configuration';

const GET_PRODUCT = gql`${productById}`

const REVIEW = [
    {
        name: 'ABC',
        rating: 4,
        description: 'THis is good one',
        date: 'Aug 7, 2020'
    },
    {
        name: 'ABC',
        rating: 4,
        description: 'THis is good one',
        date: 'Aug 7, 2020'
    },
    {
        name: 'ABC',
        rating: 4,
        description: 'THis is good one',
        date: 'Aug 7, 2020'
    },
    {
        name: 'ABC',
        rating: 4,
        description: 'THis is good one',
        date: 'Aug 7, 2020'
    },
]

function ProductDescription(props) {
    const navigation = useNavigation()
    const route = useRoute()
    const productId = route.params?.productId ?? null
    const { isLoggedIn } = useContext(UserContext)
    const { data: productData, loading, error } = useQuery(GET_PRODUCT, { variables: { id: productId } })
    const configuration = useContext(ConfigurationContext)
    const [caroselImage, setCaroselImage] = useState(productData?.productByIds[0]?.image[0] ?? null)
    const [price, priceSetter] = useState(null)
    const itemAttributes = productData?.productByIds[0]?.attributes ?
        productData.productByIds[0].attributes.map(attribute => {
            return {
                ...attribute,
                options: attribute.options[0]
            }
        })
        : []
    const [attributes, attributeSetter] = useState(itemAttributes)

    // console.log("ads: ", attributes)

    if (productId === null) {
        navigation.goBack()
        return null
    }

    useEffect(() => {
        if (productData.productByIds[0])
            calculateprice()
    }, [productId])

    function calculateprice() {
        let totalPrice = 0
        const mainPrice = productData?.productByIds[0]?.price ?? 0
        attributes.map(attribute => totalPrice += attribute.options.price)
        totalPrice += mainPrice
        priceSetter(totalPrice)
    }

    function handleAttributes(id, option) {
        const attribute = attributes
        const objIndex = attribute.findIndex(item => item._id === id)
        attribute[objIndex].options = option
        attributeSetter([...attribute])
        calculateprice()
    }

    function ListHeader() {
        return (
            <>
                <View style={alignment.MBlarge}>
                    <View style={styles.caroselContainer}>
                        <View style={styles.caroselSubContainer}>
                            <View style={styles.caroselTitleContainer}>
                                <TextDefault
                                    textColor={colors.fontMainColor}
                                    numberOfLines={2}>
                                    {productData.productByIds[0].title}
                                </TextDefault>
                            </View>
                            <View style={styles.caroselPriceContainer}>
                                <View style={styles.caroselPriceSubContainer}>
                                    <TextDefault numberOfLines={2} textColor={colors.fontBlue} bold>
                                        {configuration.currencySymbol}{' '}{price}
                                    </TextDefault>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.caroselMainImgCnt}>
                        <Image
                            source={
                                productData &&
                                { uri: caroselImage }
                            }
                            resizeMode="cover"
                            style={styles.imgResponsive}
                        />
                    </View>
                    <View style={styles.scrollViewStyle}>
                        <FlatList
                            style={{ flex: 1 }}
                            horizontal
                            data={productData?.productByIds[0]?.image ?? []}
                            keyExtractor={(item, index) => index.toString()}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) => (
                                <TouchableOpacity
                                    onPress={() => setCaroselImage(item)}
                                    style={styles.caroselItems}
                                >
                                    <Image
                                        source={{ uri: item }}
                                        resizeMode="cover"
                                        style={styles.imgResponsive}
                                    />
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                    <View style={styles.spacer} />
                    <View style={styles.variationContainer}>
                        {
                            productData.productByIds[0].attributes.map((variation, index) => (
                                <VariationSection
                                    key={variation._id}
                                    variation={variation}
                                    selected={attributes[index].options._id}
                                    handleAttributes={handleAttributes} />
                            ))
                        }
                        <TextDefault bold style={styles.smallSpacer}>
                            {'Description'}
                        </TextDefault>
                        <TextDefault textColor={colors.fontSecondColor} style={styles.smallSpacer}>
                            {productData.productByIds[0].description}
                        </TextDefault>
                    </View>
                </View>
                <View style={styles.reviewHeader}>
                    <TextDefault textColor={colors.fontMainColor} bold>{'Reviews (10)'}</TextDefault>
                </View>
            </>
        )
    }

    function ListFooter() {
        return (
            <Button
                loading={false}
                containerStyle={styles.shoppingCartContainer}
                textStyle={styles.shoppingCartText}
                onPress={() => {
                    isLoggedIn ?
                        navigation.navigate('ShoppingCart')
                        :
                        navigation.navigate('SignIn')
                }}
                text="Add to Shopping Cart" />
        )
    }
    return (
        <SafeAreaView style={[styles.flex, styles.safeAreaStyle]}>
            <View style={[styles.flex, styles.mainContainer]}>
                <BackHeader
                    title="Description"
                    backPressed={() => props.navigation.goBack()} />
                {error ? <TextError text={error.message} /> :
                    loading ? <Spinner /> :

                        <FlatList
                            data={REVIEW}
                            style={styles.mainScrollViewContainer}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={styles.contentStyle}
                            keyExtractor={(item, index) => index.toString()}
                            ListFooterComponentStyle={alignment.MTlarge}
                            ItemSeparatorComponent={() => <View style={styles.line} />}
                            ListHeaderComponent={<ListHeader />}
                            ListFooterComponent={<ListFooter />}
                            renderItem={({ item }) => (
                                <View style={styles.review}>
                                    <View style={styles.reviewerContainer} >
                                        <TextDefault
                                            textColor={colors.fontMainColor}

                                        >
                                            {item.name}
                                        </TextDefault>
                                        <View style={styles.ratingContainer}>
                                            {
                                                Array(5).fill(1).map((value, index) => {
                                                    if (index < item.rating) {
                                                        return <MaterialIcons key={index} name="star" size={scale(10)} color={'blue'} />
                                                    }
                                                    else if (index >= item.rating && index < 5) {
                                                        return <MaterialIcons key={index} name="star" size={scale(10)} color={colors.fontPlaceholder} />
                                                    }
                                                })
                                            }
                                        </View>
                                    </View>
                                    <TextDefault
                                        style={styles.dateReview}
                                        textColor={colors.fontSecondColor}
                                        numberOfLines={1}
                                        small>
                                        {item.date}
                                    </TextDefault>
                                    <TextDefault
                                        style={styles.textReview}
                                        textColor={colors.fontSecondColor}
                                        small>
                                        {item.description}
                                    </TextDefault>
                                </View>
                            )}
                        />
                }
                <BottomTab />
            </View>
        </SafeAreaView>
    );
}

export default ProductDescription;