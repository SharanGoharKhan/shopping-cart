import React from 'react';
import {
    View, Text, Image, TouchableOpacity, ScrollView,
} from 'react-native';
import Timeline from 'react-native-timeline-listview';
import styles from './styles';
import BottomTab from '../../components/BottomTab/BottomTab';
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
        time: '14:20', title: 'Delivered', description: '14:15, Nov 05,2019', lineColor: '#8CB65E',
    },
];

/* =============================================================================
<TrackOrder />
--------------------------------------------------------------------------------

Props:
  ?

============================================================================= */
class TrackOrder extends React.Component {
    render() {
        return (
            <View style={styles.flex}>
                <ScrollView>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerContainerText}>Order No. 10352</Text>
                    </View>
                    <View style={styles.profileContainer}>
                        <View style={styles.profileContentContainer}>
                            <Image
                                source={require('../../assets/images/MainLanding/shop-1-avatar.png')}
                                style={styles.imgFixed}
                            />
                            <View>
                                <Text style={styles.profileTitlStyle}>Orders to</Text>
                                <Text style={styles.profileSubTitleStyle}>ViVo H&T</Text>
                            </View>

                        </View>
                        <TouchableOpacity style={styles.dotsContainer}>
                            <View style={styles.dot} />
                            <View style={styles.dot} />
                            <View style={styles.dot} />
                        </TouchableOpacity>
                    </View>
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
                                        <Text style={styles.productTitleStyle}>35 PKR</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.timelineContainer}>
                        <Timeline
                            data={data}
                            circleSize={15}
                            circleColor="#8CB65E"
                            showTime={false}
                            innerCircle="dot"
                            titleStyle={{marginTop: -14}}
                        />
                    </View>
                </ScrollView>
                <BottomTab
                    navigationObj={this.props.navigation}
                />
            </View>
        );
    }
}
/* Export
============================================================================= */
export default TrackOrder;
