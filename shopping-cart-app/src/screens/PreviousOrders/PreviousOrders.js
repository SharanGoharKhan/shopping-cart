import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, SectionList } from 'react-native';
import styles from './styles';
import BottomTab from '../../components/BottomTab/BottomTab';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackHeader } from '../../components/Headers/Headers';
import { useNavigation } from '@react-navigation/native';
import { TextDefault } from '../../components';
import { colors, scale } from '../../utils';
import { Feather } from '@expo/vector-icons';

/* Config/Constants
============================================================================= */
const cardData = [
    {
        date: '20 Aug, 2018 At 12:30 PM',
        data: [
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
        data: [
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
        data: [
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

function PreviousOrder(props) {
    const navigation = useNavigation()

    function SectionHeader({ date }) {
        return (
            <View style={styles.dateContainer}>
                <TextDefault textColor={colors.fontThirdColor} small center>
                    {' On '}{date}
                </TextDefault>
            </View>
        )
    }

    function SectionCard({ card }) {
        return (
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => navigation.navigate('OrderDetail')}
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
                            <TextDefault style={styles.font} numberOfLines={1} textColor={colors.fontMainColor} H5>
                                {card.title}
                            </TextDefault>
                            <Feather
                                name="chevron-right"
                                size={scale(20)}
                                color={colors.fontSecondColor}
                            />
                        </View>
                        <View style={styles.subTitleContainer}>
                            <TextDefault textColor={colors.fontThirdColor} small >
                                {card.subTitle}
                            </TextDefault>
                        </View>
                        <View style={styles.actionsContainer}>
                            <View style={styles.subActionsContainer}>
                                <TextDefault textColor={colors.fontBlue} H5>
                                    {card.status}
                                </TextDefault>
                                <TouchableOpacity
                                    style={styles.actionContainer}
                                    onPress={() => navigation.navigate('Review')}>
                                    <TextDefault textColor={colors.white} H5>
                                        {card.action}
                                    </TextDefault>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView style={[styles.flex, styles.safeAreaStyle]}>
            <View style={[styles.flex, styles.mainContainer]}>
                <BackHeader
                    title="Previous Orders"
                    backPressed={() => props.navigation.goBack()} />
                <SectionList
                    style={styles.flex}
                    contentContainerStyle={styles.mainCardContainer}
                    sections={cardData}
                    keyExtractor={(item, index) => index}
                    stickySectionHeadersEnabled={false}
                    showsVerticalScrollIndicator={false}
                    SectionSeparatorComponent={() => <View style={styles.lineSubContainer} />}
                    renderSectionHeader={({ section: { date } }) => (
                        <SectionHeader date={date} />
                    )}
                    renderItem={({ item, index, section }) => (
                        <SectionCard card={item} />
                    )
                    }
                />
            </View>
            <BottomTab />
        </SafeAreaView>
    )
}

export default PreviousOrder;