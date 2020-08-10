import React, { useState } from 'react';
import { View, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';
import styles from './styles';
import { BackHeader, BottomTab, TextDefault } from '../../components';
import Button from '../../ui/Buttons/Button';
import VariationSection from './VariationSection/VariationSection';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { colors, alignment, scale } from '../../utils';
import { MaterialIcons } from '@expo/vector-icons';

const caroselData = [
    {
        img: require('../../assets/images/MainLanding/carosel_img_3.png'),
    },
    {
        img: require('../../assets/images/MainLanding/carosel_img_2.png'),
    },
    {
        img: require('../../assets/images/MainLanding/recommended_2.png'),
    },
    {
        img: require('../../assets/images/MainLanding/carosel_img_3.png'),
    },
    {
        img: require('../../assets/images/MainLanding/carosel_img_2.png'),
    },
    {
        img: require('../../assets/images/MainLanding/recommended_2.png'),
    },
    {
        img: require('../../assets/images/MainLanding/carosel_img_3.png'),
    },
];

const DESCRIPTION = "Soft stretch elasticated waistband Hemmed bottom Light weight and comfortable.\n\nSize chart is provided in the photos\n\nFabric 100% Cotton Single Jersey 160 GSM"
const VARIATIONS = [
    {
        title: 'Select Color',
        items: ['Black', 'White', 'Red', 'Graphite', 'Blue', 'Bottle Green', 'Charcoal', 'Florescent Yellow', 'Green', 'Heather Grey', 'Jeans Marl', 'Orange', 'Parrot', 'Royal', 'Navy']
    },
    {
        title: 'Select Size',
        items: ['S', 'M', 'L']
    },
]

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
    const [caroselImage, setCaroselImage] = useState(require('../../assets/images/MainLanding/carosel_img_3.png'))
    const navigation = useNavigation()
    const isLogin = true


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
                                    {'Southdown Spinning Fibre'}
                                </TextDefault>
                            </View>
                            <View style={styles.caroselPriceContainer}>
                                <View style={styles.caroselPriceSubContainer}>
                                    <TextDefault textColor={colors.fontBlue} bold>
                                        {'$7.50'}
                                    </TextDefault>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.caroselMainImgCnt}>
                        <Image
                            source={caroselImage}
                            resizeMode="cover"
                            style={styles.imgResponsive}
                        />
                    </View>
                    <View style={styles.scrollViewStyle}>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        >
                            <View style={styles.caroselItemsContainer}>
                                {
                                    caroselData.map((data, ind) => (
                                        <TouchableOpacity
                                            onPress={() => setCaroselImage(data.img)}
                                            key={ind}
                                            style={styles.caroselItems}
                                        >
                                            <Image
                                                source={data.img}
                                                resizeMode="cover"
                                                style={styles.imgResponsive}
                                            />
                                        </TouchableOpacity>
                                    ))
                                }
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.spacer} />
                    <View style={styles.variationContainer}>
                        {
                            VARIATIONS.map((variation, index) => (
                                <VariationSection
                                    key={index}
                                    variation={variation} />
                            ))
                        }
                        <TextDefault bold style={styles.smallSpacer}>
                            {'Description'}
                        </TextDefault>
                        <TextDefault textColor={colors.fontSecondColor} style={styles.smallSpacer}>
                            {DESCRIPTION}
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
                containerStyle={styles.shoppingCartContainer}
                textStyle={styles.shoppingCartText}
                onPress={() => {
                    isLogin ?
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
                <BottomTab />
            </View>
        </SafeAreaView>
    );
}

export default ProductDescription;