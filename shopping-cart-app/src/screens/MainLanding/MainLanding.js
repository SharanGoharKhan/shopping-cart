import React from 'react';
import {
    View, TouchableOpacity, Image, TextInput, ScrollView,
} from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import { DrawerActions } from 'react-navigation-drawer';
import styles from './styles';
import { verticalScale } from '../../utils/scaling';
import CardsSection from './CardsSection/CardsSection';
import CardMultipleItems from './CardMultipleItems/CardMultipleItems';
import PopularItems from './PopularItems/PopularItems';
import RecommendedItems from './RecommendedItems/RecommendedItems';
import CarouselItem from './CarouselItem/CarouselItem';
import BottomTab from '../../components/BottomTab/BottomTab';

function MainLanding(props) {
    return (
        <View style={styles.grayBackground}>
            <View style={styles.caroselContainer}>
                <SwiperFlatList
                    index={0}
                    showPagination
                    autoplay
                    autoplayDelay={3}
                    autoplayLoop={true}
                    paginationActiveColor="#fff"
                    paginationStyle={{ marginBottom: '7%' }}
                    paginationStyleItem={{ height: verticalScale(8), width: verticalScale(8), marginLeft: 0 }}
                >
                    {Array(6).fill(0).map((value, index) => (
                        <CarouselItem
                            key={index}
                            on_press_event={this.moveToLogin} page={index} />
                    ))}
                </SwiperFlatList>
                <TouchableOpacity
                    onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
                    style={styles.menuDrawerContainer}
                >
                    <Image
                        source={require('../../assets/images/MainLanding/menu_icon.png')}
                        style={styles.imgResponsive}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <View style={[styles.searchContainer]}>
                    <View style={styles.searchTextContainer}>
                        <TextInput
                            placeholderTextColor="#9B9B9B"
                            placeholder="What are you looking for"
                            style={styles.searchTextStyle}
                        />
                    </View>
                    <View style={styles.searchIconContainer}>
                        <TouchableOpacity style={styles.searchIconBtnContainer}>
                            <Image
                                source={require('../../assets/images/MainLanding/search.png')}
                                style={styles.imgResponsive}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <ScrollView style={styles.scrollViewStyle}>
                <CardsSection
                    navigationObj={props.navigation}
                />
                <CardMultipleItems
                    navigationObj={props.navigation}
                />
                <PopularItems
                    navigationObj={props.navigation}
                />
                <RecommendedItems
                    navigationObj={props.navigation}
                />
            </ScrollView>
            <BottomTab
                navigationObj={props.navigation}
            />
        </View>
    );
}
export default MainLanding;
