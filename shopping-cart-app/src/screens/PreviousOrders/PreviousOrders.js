import React, { useContext, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import styles from './styles';
import BottomTab from '../../components/BottomTab/BottomTab';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackHeader } from '../../components/Headers/Headers';
import { useNavigation } from '@react-navigation/native';
import { TextDefault } from '../../components';
import { colors, scale } from '../../utils';
import { Feather } from '@expo/vector-icons';
import UserContext from '../../context/User'



function PreviousOrder(props) {
    const navigation = useNavigation()
    const {
        orders,
        loadingOrders,
        errorOrders,
        fetchOrders,
        fetchMoreOrdersFunc,
        networkStatusOrders
    } = useContext(UserContext)

    useEffect(() => {
        didFocus()
    }, [])

    async function didFocus() {
        if (orders && orders.length) {

        }
    }

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
                onPress={() => navigation.navigate('OrderDetail', { _id: card._id })}
                style={styles.cardContainer}
            >
                <View style={styles.leftContainer}>
                    <Image
                        source={{uri:card.image??'https://res.cloudinary.com/ecommero/image/upload/v1597658445/products/su6dg1ufmtfuvrjbhgtj.png'}}
                        resizeMode="cover"
                        style={[styles.imgResponsive, styles.roundedBorder]}
                    />
                </View>
                <View style={styles.rightContainer}>
                    <View style={styles.subRightContainer}>
                        <View style={styles.titleContainer}>
                            <TextDefault style={styles.font} numberOfLines={1} textColor={colors.fontMainColor} H5>
                                {card.orderId}
                            </TextDefault>
                            <Feather
                                name="chevron-right"
                                size={scale(20)}
                                color={colors.fontSecondColor}
                            />
                        </View>
                        <View style={styles.subTitleContainer}>
                            <TextDefault textColor={colors.fontThirdColor} small >
                                {card.items[0].product}
                            </TextDefault>
                        </View>
                        <View style={styles.actionsContainer}>
                            <View style={styles.subActionsContainer}>
                                <TextDefault textColor={colors.fontBlue} H5>
                                    {card.orderStatus}
                                </TextDefault>
                                <TouchableOpacity
                                    style={styles.actionContainer}
                                    onPress={() => navigation.navigate('Review')}>
                                    <TextDefault textColor={colors.white} H5>
                                        Review
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
                <FlatList
                    style={styles.flex}
                    contentContainerStyle={styles.mainCardContainer}
                    data={loadingOrders || errorOrders
                        ? []
                        : orders.filter(o => ['DELIVERED'].includes(o.orderStatus))}
                    keyExtractor={(item, index) => item._id}
                    showsVerticalScrollIndicator={false}
                    refreshing={networkStatusOrders === 4}
                    onRefresh={() => networkStatusOrders === 7 && fetchOrders()}
                    ItemSeparatorComponent={() => <View style={styles.lineSubContainer} />}
                    // renderSectionHeader={({ section: { date } }) => (
                    //     <SectionHeader date={date} />
                    // )}
                    renderItem={({ item, index, section }) => (
                        <SectionCard key={item._id} card={item} />
                    )
                    }
                    onEndReached={fetchMoreOrdersFunc}
                />
            </View>
            <BottomTab />
        </SafeAreaView>
    )
}

export default PreviousOrder;