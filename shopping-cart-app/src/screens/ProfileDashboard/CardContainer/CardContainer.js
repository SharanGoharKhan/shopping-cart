import React, { useContext } from 'react';
import {
    Text, TouchableOpacity, View, Image, ScrollView,
} from 'react-native';
import { Spinner, TextError } from '../../../components'
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import UserContext from '../../../context/User'

/* Config/Constants
============================================================================= */

function cardContainer(props) {
    const navigation = useNavigation()
    const {
        orders,
        loadingOrders,
        errorOrders
    } = useContext(UserContext)

    if (loadingOrders || !orders) return <Spinner />
    if (errorOrders) return <TextError text={'error'} />
    return (
        <ScrollView style={styles.scrollViewContainer}>
            <View style={styles.mainCardContainer}>
                {
                    orders.filter(o => ['PENDING', 'PICKED', 'ACCEPTED'].includes(o.orderStatus)).map((data, ind) => (
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => navigation.navigate('OrderDetail', { _id: data._id })}
                            key={ind}
                            style={styles.cardContainer}
                        >
                            <View style={styles.leftContainer}>
                                <Image
                                    source={{ uri: data.image ?? 'https://res.cloudinary.com/ecommero/image/upload/v1597658445/products/su6dg1ufmtfuvrjbhgtj.png' }}
                                    resizeMode="cover"
                                    style={[styles.imgResponsive, styles.roundedBorder]}
                                />
                            </View>
                            <View style={styles.rightContainer}>
                                <View style={styles.subRightContainer}>
                                    <View style={styles.titleContainer}>
                                        <Text style={styles.titleStyle}>{data.orderId}</Text>
                                        <View style={styles.rightArrowContainer}>
                                            <Image
                                                source={require('../../../assets/images/ProfileDashboard/rightArrow.png')}
                                                resizeMode="contain"
                                                style={styles.imgResponsive3}
                                            />
                                        </View>
                                    </View>
                                    <View style={styles.subTitleContainer}>
                                        <Text style={styles.subTtitleStyle}>{data.items[0]?.product}</Text>
                                    </View>
                                    <View style={styles.actionsContainer}>
                                        <View style={styles.subActionsContainer}>
                                            <Text style={styles.statusStyle}>{data.orderStatus}</Text>
                                            <TouchableOpacity
                                                activeOpacity={0}
                                                onPress={() => navigation.navigate('TrackOrder', { _id: data.id })}
                                                style={styles.actionContainer}>
                                                <Text style={styles.actionStyle}>Track</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </ScrollView>
    );
}

export default cardContainer;
