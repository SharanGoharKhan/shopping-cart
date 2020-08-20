import React, { useContext } from 'react';
import {
    Text, TouchableOpacity, View, Image, FlatList,
} from 'react-native';
import { Spinner, TextError, TextDefault } from '../../../components'
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import UserContext from '../../../context/User'
import { colors } from '../../../utils';

/* Config/Constants
============================================================================= */

function cardContainer(props) {
    const navigation = useNavigation()
    const {
        orders,
        loadingOrders,
        errorOrders
    } = useContext(UserContext)

    function emptyView() {
        return (
            <View style={styles.subContainerImage}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={require('../../../assets/images/activeOrder.png')}></Image>
                </View>
                <View style={styles.descriptionEmpty}>
                    <TextDefault textColor={colors.fontMainColor} center>
                        {'No Active Orders Yet.'}
                    </TextDefault>
                </View>
            </View>
        )
    }

    if (loadingOrders || !orders) return <Spinner />
    if (errorOrders) return <TextError text={JSON.stringify(errorOrders)} />
    return (
        <FlatList
            style={styles.scrollViewContainer}
            contentContainerStyle={styles.mainCardContainer}
            data={orders ? orders.filter(o => ['PENDING', 'PICKED', 'ACCEPTED'].includes(o.orderStatus)) : []}
            keyExtractor={(item, index) => index.toString()}
            ListEmptyComponent={emptyView()}
            renderItem={({ item }) => (
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => navigation.navigate('OrderDetail', { _id: item._id })}
                    style={styles.cardContainer}
                >
                    <View style={styles.leftContainer}>
                        <Image
                            source={{ uri: item?.items[0]?.image ?? 'https://res.cloudinary.com/ecommero/image/upload/v1597658445/products/su6dg1ufmtfuvrjbhgtj.png' }}
                            resizeMode="cover"
                            style={[styles.imgResponsive, styles.roundedBorder]}
                        />
                    </View>
                    <View style={styles.rightContainer}>
                        <View style={styles.subRightContainer}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.titleStyle}>{item.orderId}</Text>
                                <View style={styles.rightArrowContainer}>
                                    <Image
                                        source={require('../../../assets/images/ProfileDashboard/rightArrow.png')}
                                        resizeMode="contain"
                                        style={styles.imgResponsive3}
                                    />
                                </View>
                            </View>
                            <View style={styles.subTitleContainer}>
                                <Text numberOfLines={1} style={styles.subTtitleStyle}>{item.items[0]?.product}</Text>
                            </View>
                            <View style={styles.actionsContainer}>
                                <View style={styles.subActionsContainer}>
                                    <Text style={styles.statusStyle}>{item.orderStatus}</Text>
                                    <TouchableOpacity
                                        activeOpacity={0}
                                        onPress={() => navigation.navigate('TrackOrder', { _id: item._id })}
                                        style={styles.actionContainer}>
                                        <Text style={styles.actionStyle}>Track</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            )}
        />
    );
}

export default cardContainer;
