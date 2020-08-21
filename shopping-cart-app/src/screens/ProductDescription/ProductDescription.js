import React, { useState, useContext, useEffect } from 'react';
import { View, TouchableOpacity, Image, FlatList } from 'react-native';
import styles from './styles';
import { BackHeader, BottomTab, TextDefault, Spinner, FlashMessage } from '../../components';
import Button from '../../ui/Buttons/Button';
import VariationSection from './VariationSection/VariationSection';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { colors, alignment, scale } from '../../utils';
import { MaterialIcons } from '@expo/vector-icons';
import UserContext from '../../context/User';
import ConfigurationContext from '../../context/Configuration';
import { useQuery, gql } from '@apollo/client'
import { productReviews } from '../../apollo/server'

const REVIEWS = gql`${productReviews}`

function ProductDescription(props) {
    const navigation = useNavigation()
    const route = useRoute()
    const product = route.params?.product ?? null
    const { addCartItem } = useContext(UserContext)
    const configuration = useContext(ConfigurationContext)
    const [caroselImage, setCaroselImage] = useState(product.image[0] ?? null)
    const [price, priceSetter] = useState(null)
    const [stockAvailability, setStockAvailability] = useState(false)
    const [attributes, attributeSetter] = useState([])
    const { data, loading, error } = useQuery(REVIEWS, { variables: { productId: product._id } })
  

    function didFocus() {
        const itemAttributes = product?.attributes ?
            product.attributes.map(attribute => {
                return {
                    ...attribute,
                    options: attribute.options.filter(item => item.stock > 0)[0] ?? null
                }
            })
            : []
        setStockAvailability(itemAttributes.every(attribute => attribute.options))
        attributeSetter(itemAttributes)
    }
    useEffect(()=>{
        didFocus()
    },[])
    

    if (product === null) {
        navigation.goBack()
        return null
    }

    useEffect(() => {
        if (product)
            calculateprice()
    }, [product])

    function calculateprice() {
        let totalPrice = 0
        const mainPrice = product?.price ?? 0
        attributes.map(attribute => totalPrice += attribute.options.price)
        totalPrice += mainPrice
        priceSetter(totalPrice)
    }

    function formatDate(date) {
        date = Number(date)
        date = new Date(date)
        return date.toDateString()
    }

    function handleAttributes(id, option) {
        if (option.stock > 0) {
            const attribute = attributes
            const objIndex = attribute.findIndex(item => item._id === id)
            attribute[objIndex].options = option
            attributeSetter([...attribute])
            calculateprice()
        } else {
            FlashMessage({ message: "Out Of Stock" })
        }
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
                                    {product.title}
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
                                product &&
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
                            data={product?.image ?? []}
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
                            stockAvailability && product.attributes.map((variation, index) => (
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
                            {product.description}
                        </TextDefault>
                    </View>
                </View>
                <View style={styles.reviewHeader}>
                    <TextDefault textColor={colors.fontMainColor} bold>Reviews ({data.productReviews?.total})</TextDefault>
                </View>
            </>
        )
    }
    function ListFooter() {
        return (
            <>
                {stockAvailability ?
                    <Button
                        loading={false}
                        containerStyle={styles.shoppingCartContainer}
                        textStyle={styles.shoppingCartText}
                        onPress={async () => {
                            await addCartItem(product._id, product.title, product.image[0], 1, price, attributes)
                            navigation.navigate('ShoppingCart')
                        }}
                        text="Add to Shopping Cart" /> :
                    <View style={styles.outOfStockContainer} >
                        <TextDefault textColor={colors.white} H4>
                            {"Out Of Stock"}
                        </TextDefault>
                    </View>
                }
            </>
        )
    }
    return (
        <SafeAreaView style={[styles.flex, styles.safeAreaStyle]}>
            <View style={[styles.flex, styles.mainContainer]}>
                <BackHeader
                    title="Description"
                    backPressed={() => props.navigation.goBack()} />
                {
                    !!error ? console.log('error', JSON.stringify(error)) :
                        (loading || !data.productReviews?.reviews) ? <Spinner /> :
                            <FlatList
                                data={data.productReviews?.reviews}
                                style={styles.mainScrollViewContainer}
                                showsVerticalScrollIndicator={false}
                                contentContainerStyle={styles.contentStyle}
                                keyExtractor={(item, index) => index.toString()}
                                ListFooterComponentStyle={alignment.MTlarge}
                                ItemSeparatorComponent={() => <View style={styles.line} />}
                                ListHeaderComponent={<ListHeader />}
                                ListFooterComponent={<ListFooter />}
                                // refreshing={networkStatus === 4}
                                // onRefresh={() => refetch()}
                                renderItem={({ item }) => (
                                    <View style={styles.review}>
                                        <View style={styles.reviewerContainer} >
                                            <TextDefault
                                                numberOfLines={1}
                                                textColor={colors.fontMainColor}
                                                style={{ width: '75%' }}

                                            >
                                                {item.order.user.name}
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
                                            {formatDate(item.createdAt)}
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
                <BottomTab
                    screen='HOME' />
            </View>
        </SafeAreaView>
    );
}

export default ProductDescription;