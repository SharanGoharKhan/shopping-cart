import React from 'react'
import { View, FlatList, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { colors, scale } from '../../utils';
import MainBtn from '../../ui/Buttons/MainBtn';
import { Feather, FontAwesome } from '@expo/vector-icons'
import { TextError, TextDefault, BackHeader, BottomTab, Spinner } from '../../components';
import { useQuery, gql } from '@apollo/client';
import { produccts } from '../../apollo/server';

const PRODUCTS_DATA = gql`${produccts}`

function Favourite(props) {
    const navigation = useNavigation()
    const { data: productsData, loading, error, refetch, networkStatus } = useQuery(PRODUCTS_DATA)

    function emptyView() {
        return (
            <View style={styles.subContainerImage}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={require('../../assets/images/wishlist.png')}></Image>
                </View>
                <View style={styles.descriptionEmpty}>
                    <TextDefault textColor={colors.fontSecondColor} bold center>
                        {'Your favourite product is missing.'}
                    </TextDefault>
                </View>
                <View style={styles.emptyButton}>
                    <MainBtn
                        style={{ width: '100%' }}
                        onPress={() => navigation.navigate('MainLanding')}
                        text="Browse Product" />
                </View>
            </View>
        )
    }
    return (
        <SafeAreaView style={[styles.flex, styles.safeAreaStyle]}>
            <View style={[styles.grayBackground, styles.flex]}>
                <BackHeader
                    title={'Favourite'}
                    backPressed={() => navigation.goBack()} />
                {loading ? <Spinner /> :
                    error ? <TextError text='something is wrong' /> :
                        <FlatList
                            data={productsData ? productsData.products : []}
                            style={styles.flex}
                            contentContainerStyle={styles.contentContainer}
                            showsVerticalScrollIndicator={false}
                            ListEmptyComponent={emptyView}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) => (
                                <TouchableOpacity
                                    activeOpacity={1}
                                    onPress={() => navigation.navigate('ProductDescription', { product: item })}
                                    style={styles.cardContainer}
                                >
                                    <View style={styles.leftContainer}>
                                        <Image
                                            source={{ uri: item.image.length > 0 ? item.image[0] : 'https://res.cloudinary.com/ecommero/image/upload/v1597658445/products/su6dg1ufmtfuvrjbhgtj.png' }}
                                            resizeMode="cover"
                                            style={[styles.imgResponsive, styles.roundedBorder]}
                                        />
                                    </View>
                                    <View style={styles.rightContainer}>
                                        <View style={styles.subRightContainer}>
                                            <View style={styles.titleContainer}>
                                                <TextDefault style={{ maxWidth: '90%' }} textColor={colors.fontMainColor} numberOfLines={1}>
                                                    {item.title}
                                                </TextDefault>
                                                <View style={styles.rightArrowContainer}>
                                                    <Feather name="chevron-right" size={scale(20)} color={colors.fontSecondColor} />
                                                </View>
                                            </View>
                                            <View style={styles.subTitleContainer}>
                                                <TextDefault textColor={colors.fontThirdColor} numberOfLines={1} small>
                                                    {item.subCategory.title}
                                                </TextDefault>
                                            </View>
                                            <View style={styles.actionsContainer}>
                                                <View style={styles.subActionsContainer}>
                                                    <TextDefault style={{ maxWidth: '75%' }} numberOfLines={1} textColor={colors.fontBlue}>
                                                        ${item.price.toFixed(2)}
                                                    </TextDefault>
                                                    <TouchableOpacity
                                                        activeOpacity={1}
                                                        style={styles.actionContainer}>
                                                        <FontAwesome name="trash-o" size={scale(20)} color={colors.google} />
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                            }
                        />
                }

                <BottomTab
                    screen='PROFILE' />
            </View>
        </SafeAreaView>
    )
}
export default Favourite;