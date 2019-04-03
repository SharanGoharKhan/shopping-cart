import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import styles from './styles'
import BottomTab from '../../components/BottomTab/BottomTab'
/* Config/Constants
============================================================================= */
const cardData = [
    {
        date: '20 Aug, 2018 At 12:30 PM',
        cards: [
            {
                title: 'Order No. 10363',
                subTitle: 'Delivery Service',
                status: 'In Delivery',
                action: 'Review',
                image: require('../../assets/images/MainLanding/carosel_img_3.png'),
            },
            {
                title: 'Order No. 10352',
                subTitle: 'Multiple Items/Shops',
                status: 'In Delivery',
                action: 'Review',
                image: require('../../assets/images/MainLanding/shop-2-collage-2.png'),
            },
            {
                title: 'Order No. 10363',
                subTitle: 'Delivery Service',
                status: 'In Delivery',
                action: 'Review',
                image: require('../../assets/images/MainLanding/carosel_img_3.png'),
            }
        ]
    },
    {
        date: '15 Aug, 2018 At 12:30 PM',
        cards: [
            {
                title: 'Order No. 10363',
                subTitle: 'Delivery Service',
                status: 'Delivered',
                action: 'Review',
                image: require('../../assets/images/MainLanding/carosel_img_3.png')
            },
            {
                title: 'Order No. 10352',
                subTitle: 'Multiple Items/Shops',
                status: 'Delivered',
                action: 'Review',
                image: require('../../assets/images/MainLanding/shop-2-collage-2.png')
            }
        ]
    },
    {
        date: '12 Aug, 2018 At 12:30 PM',
        cards: [
            {
                title: 'Order No. 10387',
                subTitle: 'Delivery Service',
                status: 'Delivered',
                action: 'Review',
                image: require('../../assets/images/MainLanding/shop-2-collage-4.png')
            }
        ]
    }
]


/* =============================================================================
<PreviousOrder />
--------------------------------------------------------------------------------

Props:
  ?

============================================================================= */
class PreviousOrder extends React.Component {
    render() {
        return (
            <View style={styles.flex}>
                <ScrollView>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerContainerText}>Previous Orders</Text>
                    </View>
                    <View style={styles.mainCardContainer}>
                        {
                            cardData.map((data, ind) =>
                                <View key={ind}>
                                    <View style={styles.dateContainer}>
                                        <Text style={styles.subTtitleStyle}> On {data.date}</Text>
                                    </View>
                                    {
                                        data.cards.map((card, ind) =>
                                            <View
                                                key={ind}
                                                style={styles.cardContainer}>
                                                <View style={styles.leftContainer}>
                                                    <Image
                                                        source={card.image}
                                                        resizeMode="cover"
                                                        style={[styles.imgResponsive, styles.roundedBorder]}
                                                    />
                                                </View>
                                                <View style={styles.rightContainer}>
                                                    <View style={styles.subRightContainer}>
                                                        <View style={styles.titleContainer}>
                                                            <Text style={styles.titleStyle}>{card.title}</Text>
                                                            <View style={styles.rightArrowContainer}>
                                                                <Image
                                                                    source={require('../../assets/images/ProfileDashboard/rightArrow.png')}
                                                                    resizeMode="contain"
                                                                    style={styles.imgResponsive}
                                                                />
                                                            </View>
                                                        </View>
                                                        <View style={styles.subTitleContainer}>
                                                            <Text style={styles.subTtitleStyle}>{card.subTitle}</Text>
                                                        </View>
                                                        <View style={styles.actionsContainer}>
                                                            <View style={styles.subActionsContainer}>
                                                                <Text style={styles.statusStyle}>{card.status}</Text>
                                                                <TouchableOpacity style={styles.actionContainer}>
                                                                    <Text style={styles.actionStyle}>{card.action}</Text>
                                                                </TouchableOpacity>
                                                            </View>
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                        )
                                    }
                                    <View style={styles.lineContainer}>
                                        {
                                            ind < cardData.length - 1 ?
                                                (
                                                    <View style={styles.lineSubContainer}>
                                                    </View>
                                                )
                                                : null
                                        }
                                    </View>
                                </View>
                            )
                        }
                    </View>
                </ScrollView>
                <BottomTab />
            </View>
        )
    }
}
/* Export
============================================================================= */
export default PreviousOrder