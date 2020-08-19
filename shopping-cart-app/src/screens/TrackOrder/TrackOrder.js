import React, { useContext, useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './styles';
import { Spinner, TextError} from '../../components'
import BottomTab from '../../components/BottomTab/BottomTab';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackHeader } from '../../components/Headers/Headers';
import UserContext from '../../context/User'
import ConfigurationContext from '../../context/Configuration'
import { colors } from '../../utils'
 
/* Config/Constants
============================================================================= */

const data = [
    {
        time: '09:00', title: 'Order Received', description: '13:32, Nov 05,2019', lineColor: '#8CB65E',
    },
    {
        time: '10:45', title: 'In process', description: '13:40, Nov 05,2019', lineColor: '#8CB65E',
    },
    {
        time: '12:00', title: 'Ready for Delivery', description: '13:55, Nov 05,2019', lineColor: '#8CB65E',
    },
    {
        time: '14:00', title: 'Picked up by the driver', description: '14:15, Nov 05,2019', lineColor: '#8CB65E',
    },
    {

    }
    // {
    //     time: '14:20', title: 'Delivered', description: '14:15, Nov 05,2019', lineColor: '#8CB65E',
    // },
];

function TrackOrder(props) {
    console.log('props',props)
    const navigation = useNavigation()
    const route = useRoute()
    const id = route.params?._id ?? null
    const { loadingOrders, orders, errorOrders } = useContext(
        UserContext
    )
    const configuration = useContext(ConfigurationContext)
    const order = orders.find(o => o._id === id)


    function formatDate(date) {
        return new Date(date).toUTCString()
        // return '13:32, Nov 05,2018'
    }

    const transformStatusQueue = (statusQueue) => {
        console.log(statusQueue)
        let timeline = []
        if (statusQueue['cancelled']) timeline = [
            {
                circleColor: colors.colorPrimary100,
                lineColor: colors.colorPrimary100,
                title: 'Pending',
                description: statusQueue['pending'] ? formatDate(statusQueue['pending']) : ''
            },
            {
                circleColor: colors.colorPrimary100,
                title: 'Cancelled',
                description: statusQueue['cancelled'] ? formatDate(statusQueue['cancelled']) : 'Not cancelled'
            }]
        else
            timeline = [
                {
                    circleColor: colors.colorPrimary100,
                    lineColor: statusQueue['preparing'] ? colors.greenColor : colors.horizontalLine,
                    title: 'Pending',
                    description: statusQueue['pending'] ? formatDate(statusQueue['pending']) : ''
                },
                {
                    lineColor: statusQueue['picked'] ? colors.greenColor : colors.horizontalLine,
                    circleColor: statusQueue['preparing'] ? colors.greenColor : colors.horizontalLine,
                    title: 'Accepted',
                    description: statusQueue['preparing'] ? formatDate(statusQueue['preparing']) : ''
                },
                {
                    lineColor: statusQueue['delivered'] ? colors.greenColor : colors.horizontalLine,
                    circleColor: statusQueue['picked'] ? colors.greenColor : colors.horizontalLine,
                    title: 'Dispatched',
                    description: statusQueue['picked'] ? formatDate(statusQueue['picked']) : ''
                },
                {
                    circleColor: statusQueue['delivered'] ? colors.greenColor : colors.horizontalLine,
                    title: 'Delivered',
                    description: statusQueue['delivered'] ? formatDate(statusQueue['delivered']) : ''
                }
            ]

        return timeline
    }
    if (loadingOrders || !order) return <Spinner />
    if (errorOrders) return <TextError text={'error'} />
    return (
        <SafeAreaView style={[styles.flex, styles.safeAreaStyle]}>
            <ScrollView contentContainerStyle={[styles.flex, styles.mainContainer]}>
                <BackHeader
                    title="Order No. 10352"
                    backPressed={() => navigation.goBack()} />
                <View style={styles.line}></View>
                <View style={styles.cardContainer}>
                    <View style={styles.card}>
                        <View style={styles.cardLeftContainer}>
                            <Image
                                source={require('../../assets/images/OrderDetail/basket.png')}
                                style={styles.imgResponsive}
                                resizeMode="cover"
                            />
                        </View>
                        <View style={styles.cardRightContainer}>
                            <Text style={[styles.productTitleStyle, styles.marginTop5]}>Leather Crossbody MID...</Text>
                            <Text style={styles.productDescriptionStyle}>Courier received the order.</Text>
                            <View style={styles.amountContainer}>
                                <View style={styles.quantityContainer}>
                                    <Text style={styles.productTitleStyle}>x1</Text>
                                </View>
                                <View style={styles.priceContainer}>
                                    <Text style={styles.productTitleStyle}>{configuration.currencySymbol} 35</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.line}></View>
                <View style={styles.timelineContainer}>
                    <Timeline
                        data={transformStatusQueue(order.statusQueue)}
                        circleSize={15}
                        circleColor="#8CB65E"
                        showTime={false}
                        innerCircle="dot"
                        titleStyle={{ marginTop: -14 }}
                    />
                </View>
            </ScrollView>
            <BottomTab />
        </SafeAreaView>
    )
}

export default TrackOrder;