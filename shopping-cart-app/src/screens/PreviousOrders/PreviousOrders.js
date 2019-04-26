import React from 'react';
import {
    View, Text, Image, TouchableOpacity, ScrollView, StatusBar, Platform
} from 'react-native';
import styles from './styles';
import BottomTab from '../../components/BottomTab/BottomTab';
import { SafeAreaView } from 'react-navigation';
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
            },
        ],
    },
    {
        date: '15 Aug, 2018 At 12:30 PM',
        cards: [
            {
                title: 'Order No. 10363',
                subTitle: 'Delivery Service',
                status: 'Delivered',
                action: 'Review',
                image: require('../../assets/images/MainLanding/carosel_img_3.png'),
            },
            {
                title: 'Order No. 10352',
                subTitle: 'Multiple Items/Shops',
                status: 'Delivered',
                action: 'Review',
                image: require('../../assets/images/MainLanding/shop-2-collage-2.png'),
            },
        ],
    },
    {
        date: '12 Aug, 2018 At 12:30 PM',
        cards: [
            {
                title: 'Order No. 10387',
                subTitle: 'Delivery Service',
                status: 'Delivered',
                action: 'Review',
                image: require('../../assets/images/MainLanding/shop-2-collage-4.png'),
            },
        ],
    },
];


/* =============================================================================
<PreviousOrder />
--------------------------------------------------------------------------------

Props:
  ?

============================================================================= */
class PreviousOrder extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.flex}>
                <StatusBar backgroundColor="transparent" barStyle={Platform.OS == 'ios' ? "dark-content" : "light-content"} hidden={false} translucent={false} />
                <ScrollView>
                    <View style={styles.headerContainer}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.goBack()}
                            style={styles.backImg}>
                            <Image
                                source={require('../../assets/icons/back.png')}
                                resizeMode="contain"
                                style={{
                                    width: 16,
                                    height: 17
                                }}
                            />
                        </TouchableOpacity>
                        <Text style={styles.headerContainerText}>Previous Orders</Text>
                    </View>
                    <View style={styles.mainCardContainer}>
                        {
                            cardData.map((data, ind) => (
                                <View key={ind}>
                                    <View style={styles.dateContainer}>
                                        <Text style={styles.subTtitleStyle}>
                                            {' '}
                                            On
                                        {data.date}
                                        </Text>
                                    </View>
                                    {
                                        data.cards.map((card, ind) => (
                                            <TouchableOpacity
                                                onPress={() => this.props.navigation.navigate('OrderDetail')}
                                                key={ind}
                                                style={styles.cardContainer}
                                            >
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
                                            </TouchableOpacity>
                                        ))
                                    }
                                    <View style={styles.lineContainer}>
                                        {
                                            ind < cardData.length - 1
                                                ? (
                                                    <View style={styles.lineSubContainer} />
                                                )
                                                : null
                                        }
                                    </View>
                                </View>
                            ))
                        }
                    </View>
                </ScrollView>
                <BottomTab
                    navigationObj={this.props.navigation}
                />
            </SafeAreaView>
        );
    }
}
/* Export
============================================================================= */
export default PreviousOrder;
