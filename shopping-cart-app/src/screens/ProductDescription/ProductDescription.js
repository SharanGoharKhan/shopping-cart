import React, { useState } from 'react';
import {
    View, Text, TouchableOpacity, Image, ScrollView,
} from 'react-native';
import BottomTab from '../../components/BottomTab/BottomTab';
import styles from './styles';
import { BackHeader } from '../../components/Headers/Headers';
import VariationSection from './VariationSection/VariationSection';

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

function ProductDescription(props) {
    const [caroselImage, setCaroselImage] = useState(require('../../assets/images/MainLanding/carosel_img_3.png'))
    return (
        <View style={styles.flex}>
            <BackHeader
                title="Description"
                backPressed={() => props.navigation.goBack()} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.mainScrollViewContainer}>
                <View style={styles.caroselContainer}>
                    <View style={styles.caroselSubContainer}>
                        <View style={styles.caroselTitleContainer}>
                            <Text numberOfLines={2} style={styles.textStyle}>Southdown Spinning Fibre</Text>
                        </View>
                        <View style={styles.caroselPriceContainer}>
                            <View style={styles.caroselPriceSubContainer}>
                                <Text style={[styles.textStyle, styles.priceColor, styles.boldStyle]}>$7.50</Text>
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
                                        activeOpacity={1}
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
                    <Text style={[styles.textStyle, styles.boldStyle, styles.smallSpacer]}>Description</Text>
                    <Text style={[styles.textStyle, styles.smallSpacer]}>{DESCRIPTION}</Text>
                </View>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('ShoppingCart')}
                    style={styles.shoppingCartSubContainer}
                >
                    <Text style={styles.shoppingCartText}>Add to Shopping Cart</Text>
                </TouchableOpacity>
            </ScrollView>
            <BottomTab
                navigationObj={props.navigation}
            />


        </View>
    );
}

export default ProductDescription;