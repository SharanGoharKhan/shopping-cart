import React from 'react'
import { View, Text, Dimensions, TouchableOpacity, Image, TextInput, StatusBar, ScrollView } from 'react-native'
import styles from './styles'
import SwiperFlatList from 'react-native-swiper-flatlist'
import { moderateScale } from '../../utils/scaling'
const { height, width } = Dimensions.get('window')
import { DrawerActions } from 'react-navigation-drawer'
import { fontStyles } from '../../utils/fontStyles'
import  CardsSection from './CardsSection/CardsSection'
import CardMultipleItems from './CardMultipleItems/CardMultipleItems'
import PopularItems from './PopularItems/PopularItems'
import RecommendedItems from './RecommendedItems/RecommendedItems'
import CarouselItem from './CarouselItem/CarouselItem'
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
                    <StatusBar backgroundColor={'transparent'} barStyle="light-content" hidden={false} translucent={true} />
                    <View style={styles.caroselContainer}>
                        <SwiperFlatList
                            index={0}
                            showPagination
                            autoplay
                            autoplayDelay={3}
                            autoplayLoop
                            paginationActiveColor='#fff'
                            paginationStyle={{ marginBottom: '7%' }}
                            paginationStyleItem={{ height: moderateScale(8), width: moderateScale(8), marginLeft: 0 }}>
                            <CarouselItem on_press_event={this.moveToLogin} page="0" />
                            <CarouselItem on_press_event={this.moveToLogin} page="1" />
                            <CarouselItem on_press_event={this.moveToLogin} page="2" />
                            <CarouselItem on_press_event={this.moveToLogin} page="0" />
                            <CarouselItem on_press_event={this.moveToLogin} page="1" />
                            <CarouselItem on_press_event={this.moveToLogin} page="2" />
                        </SwiperFlatList>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())}
                            style={styles.menuDrawerContainer}>
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
                                    <Image source={require('../../assets/images/MainLanding/search.png')}
                                        style={styles.imgResponsive}
                                        resizeMode="contain"
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <CardsSection />
                    <CardMultipleItems />
                    <PopularItems />
                    <RecommendedItems />
                </ScrollView>
                {/* Footer starts */}
                <View style={{ width: '100%', height: height * .07, flexDirection: 'row', backgroundColor: 'white' }}>
                    <TouchableOpacity style={{ width: '25%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: '40%', height: '40%' }}>
                            <Image source={require('../../assets/images/footer/home.png')}
                                style={{ flex: 1, width: undefined, height: undefined }}
                                resizeMode="contain"
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: '25%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: '40%', height: '40%' }}>
                            <Image source={require('../../assets/images/footer/search.png')}
                                style={{ flex: 1, width: undefined, height: undefined }}
                                resizeMode="contain"
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: '25%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: '40%', height: '40%', position: 'relative' }}>
                            <Image source={require('../../assets/images/footer/profile.png')}
                                style={{ flex: 1, width: undefined, height: undefined }}
                                resizeMode="contain"
                            />
                            <View style={{width:8,height:8,position:'absolute',right:0,top:0,backgroundColor:'#EE9826',borderRadius:4}}>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: '25%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: '50%', height: '40%', position:'relative' }}>
                            <Image source={require('../../assets/images/footer/shopping.png')}
                                style={{ flex: 1, width: undefined, height: undefined }}
                                resizeMode="contain"
                            />
                            <View style={{width:'40%',height:'50%',position:'absolute',right:0,top:0,justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontFamily:fontStyles.PoppinsRegular,color:'#6178DE',fontSize:8}}>x5</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                {/* Footer ends */}
            </React.Fragment>
        )
    }
}
/* Export
============================================================================= */
export default MainLanding