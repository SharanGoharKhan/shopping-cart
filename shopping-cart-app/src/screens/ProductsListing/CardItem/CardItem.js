import React from 'react'
import { Text, View, Image, ScrollView } from 'react-native'
import styles from './styles'
import { Rating } from 'react-native-ratings';
import { moderateScale } from '../../../utils/scaling';
import { DrawerActions } from 'react-navigation';

/* Config/Constants
============================================================================= */
const cardData = [
    {
        title: 'Leather Crossbody MID',
        category: 'Bag',
        ratingOverall: 5,
        ratingNumber: 401,
        price: '34',
        img: require('../../../assets/images/ProductListing/bag.png')
    },
    {
        title: "Photographer's belt and",
        category: 'harness',
        ratingOverall: 5,
        ratingNumber: 401,
        price: '29',
        img: require('../../../assets/images/ProductListing/belt.png')
    },
    {
        title: "Photographer's belt and",
        category: 'harness',
        ratingOverall: 5,
        ratingNumber: 401,
        price: '29',
        img: require('../../../assets/images/ProductListing/belt.png')
    },
    {
        title: 'Leather Crossbody MID',
        category: 'Bag',
        ratingOverall: 5,
        ratingNumber: 401,
        price: '34',
        img: require('../../../assets/images/ProductListing/bag.png')
    },
]
/* =============================================================================
<cardItem />
--------------------------------------------------------------------------------

Props:
    ?
============================================================================= */

const cardItem = () => (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {
            cardData.map((data, ind) =>
                <View key={ind} style={styles.cardContainer}>
                    <View style={styles.cardTop}>
                        <Image
                            source={data.img}
                            resizeMode="cover"
                            style={styles.imgResponsive}
                        />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.textStyle}>{data.title}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.textStyle}>{data.category}</Text>
                    </View>
                    <View style={styles.botContainer}>
                        <View style={styles.ratingContainer}>
                            <Rating
                                style={styles.ratingStyle}
                                type="star"
                                ratingCount={5}
                                imageSize={moderateScale(12)}
                                startingValue={data.ratingOverall}
                                readonly
                            />
                            <Text style={styles.ratingNumber}>{data.ratingNumber}</Text>
                        </View>
                        <View style={styles.priceContainer}>
                            <Text style={styles.priceStyle}>{data.price} KWD</Text>
                        </View>
                    </View>
                </View>
            )
        }
    </View>
)
/* Export
============================================================================= */
export default cardItem;

