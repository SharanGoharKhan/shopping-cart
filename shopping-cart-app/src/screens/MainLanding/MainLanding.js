import React from 'react';
import {
    View, TouchableOpacity, Image, TextInput, StatusBar, ScrollView,
} from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import { DrawerActions } from 'react-navigation-drawer';
import styles from './styles';
import { moderateScale } from '../../utils/scaling';
import CardsSection from './CardsSection/CardsSection';
import CardMultipleItems from './CardMultipleItems/CardMultipleItems';
import PopularItems from './PopularItems/PopularItems';
import RecommendedItems from './RecommendedItems/RecommendedItems';
import CarouselItem from './CarouselItem/CarouselItem';
import BottomTab from '../../components/BottomTab/BottomTab';
/* Config/Constants
============================================================================= */


/* =============================================================================
<MainLanding />
--------------------------------------------------------------------------------

Props:
  ?

============================================================================= */
class MainLanding extends React.Component {
    render() {
        return (
            <React.Fragment>
            <ScrollView style={styles.scrollViewStyle}>
                  <StatusBar backgroundColor="transparent" barStyle="light-content" hidden={false} translucent />
                    <View style={styles.caroselContainer}>
                <SwiperFlatList
                            index={0}
                            showPagination
                            autoplay
                            autoplayDelay={3}
                            autoplayLoop
                        paginationActiveColor="#fff"
                        paginationStyle={{ marginBottom: '7%' }}
                        paginationStyleItem={{ height: moderateScale(8), width: moderateScale(8), marginLeft: 0 }}
                      >
                            <CarouselItem on_press_event={this.moveToLogin} page="0" />
                            <CarouselItem on_press_event={this.moveToLogin} page="1" />
                        <CarouselItem on_press_event={this.moveToLogin} page="2" />
                        <CarouselItem on_press_event={this.moveToLogin} page="0" />
                        <CarouselItem on_press_event={this.moveToLogin} page="1" />
                        <CarouselItem on_press_event={this.moveToLogin} page="2" />
                      </SwiperFlatList>
                <TouchableOpacity
                            onPress={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())}
                            style={styles.menuDrawerContainer}
                      >
                        <Image
                              source={require('../../assets/images/MainLanding/menu_icon.png')}
                                style={styles.imgResponsive}
                              resizeMode="contain"
                            />
                      </TouchableOpacity>
                        <View style={styles.searchContainer}>
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
                  <CardsSection
                      navigationObj={this.props.navigation}
                    />
                  <CardMultipleItems
                        navigationObj={this.props.navigation}
                    />
                    <PopularItems
                navigationObj={this.props.navigation}
              />
                  <RecommendedItems
                      navigationObj={this.props.navigation}
                    />
                </ScrollView>
                <BottomTab
                navigationObj={this.props.navigation}
              />
          </React.Fragment>
        );
    }
}
/* Export
============================================================================= */
export default MainLanding;
