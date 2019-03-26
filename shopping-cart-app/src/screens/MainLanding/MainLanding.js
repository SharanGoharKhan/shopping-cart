import React from 'react'
import { View, Text, Dimensions, TouchableOpacity, Image, TextInput, StatusBar, ScrollView } from 'react-native'
import styles from './styles'
import SwiperFlatList from 'react-native-swiper-flatlist'
import { moderateScale } from '../../utils/scaling'
import TutorialItem from '../../components/TutorialItem/TutorialItem'
const { height, width } = Dimensions.get('window')
import { DrawerActions } from 'react-navigation-drawer'
import { colors } from '../../utils/colors'
import { fontStyles } from '../../utils/fontStyles';
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
                <ScrollView style={{ backgroundColor: '#eee' }}>
                    <StatusBar backgroundColor={'transparent'} barStyle="dark-content" hidden={false} translucent={true} />
                    <View style={{ width: '100%', height: height * .3, position: 'relative' }}>
                        <SwiperFlatList
                            index={0}
                            showPagination
                            autoplay
                            autoplayDelay={2}
                            autoplayLoop
                            paginationActiveColor='#fff'
                            paginationStyle={{ marginBottom: '7%' }}
                            paginationStyleItem={{ height: moderateScale(8), width: moderateScale(8), marginLeft: 0 }}>
                            <TutorialItem on_press_event={this.moveToLogin} page="0" />
                            <TutorialItem on_press_event={this.moveToLogin} page="1" />
                            <TutorialItem on_press_event={this.moveToLogin} page="2" />
                            <TutorialItem on_press_event={this.moveToLogin} page="0" />
                            <TutorialItem on_press_event={this.moveToLogin} page="1" />
                            <TutorialItem on_press_event={this.moveToLogin} page="2" />
                        </SwiperFlatList>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())}
                            style={{ width: 20, height: 18, position: 'absolute', top: 30, left: 30 }}>
                            <Image
                                source={require('../../assets/images/MainLanding/menu_icon.png')}
                                style={{ flex: 1, width: undefined, height: undefined }}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                        <View style={{ width: width * .9, height: height * .06, backgroundColor: '#fff', alignSelf: 'center', position: 'absolute', bottom: -20, borderRadius: 5, flexDirection: 'row' }}>
                            <View style={{ width: '80%', height: '100%', justifyContent: 'center' }}>
                                <TextInput
                                    placeholderTextColor="#9B9B9B"
                                    placeholder="What are you looking for"
                                    style={{ fontSize: 15, marginLeft: '5%', fontFamily: fontStyles.PoppinsRegular }}
                                />
                            </View>
                            <View style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity style={{ width: '50%', height: '50%' }}>
                                    <Image source={require('../../assets/images/MainLanding/search.png')}
                                        style={{ flex: 1, width: undefined, height: undefined }}
                                        resizeMode="contain"
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    {/* Card Section Started */}
                    <View style={{ width: '95%', height: height * .25, marginTop: 30, alignSelf: 'center', flexDirection: 'column', justifyContent: 'space-around' }}>
                        <View style={{ width: '100%', height: '25%', flexDirection: 'row', justifyContent: 'space-around' }}>
                            <TouchableOpacity style={{ width: '45%', height: '100%', flexDirection: 'row', backgroundColor: 'white', borderRadius: 5 }}>
                                <View style={{ width: '80%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontFamily: fontStyles.PoppinsRegular, fontSize: 14 }}>Accessories</Text>
                                </View>
                                <View style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ width: '100%', height: '80%' }}>
                                        <Image
                                            style={{ flex: 1, width: undefined, height: undefined }}
                                            source={require('../../assets/images/MainLanding/watch.png')}
                                            resizeMode="contain"
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '45%', height: '100%', flexDirection: 'row', backgroundColor: 'white', borderRadius: 5 }}>
                                <View style={{ width: '80%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontFamily: fontStyles.PoppinsRegular, fontSize: 14 }}>Arts & Crafts</Text>
                                </View>
                                <View style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ width: '100%', height: '80%' }}>
                                        <Image
                                            style={{ flex: 1, width: undefined, height: undefined }}
                                            source={require('../../assets/images/MainLanding/arts_and_crafts.png')}
                                            resizeMode="contain"
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: '100%', height: '25%', flexDirection: 'row', justifyContent: 'space-around' }}>
                            <TouchableOpacity style={{ width: '45%', height: '100%', flexDirection: 'row', backgroundColor: 'white', borderRadius: 5 }}>
                                <View style={{ width: '80%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontFamily: fontStyles.PoppinsRegular, fontSize: 14 }}>Event Ideas</Text>
                                </View>
                                <View style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ width: '100%', height: '80%' }}>
                                        <Image
                                            style={{ flex: 1, width: undefined, height: undefined }}
                                            source={require('../../assets/images/MainLanding/event_ideas.png')}
                                            resizeMode="contain"
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '45%', height: '100%', flexDirection: 'row', backgroundColor: 'white', borderRadius: 5 }}>
                                <View style={{ width: '80%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontFamily: fontStyles.PoppinsRegular, fontSize: 14 }}>Fashions</Text>
                                </View>
                                <View style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ width: '100%', height: '80%' }}>
                                        <Image
                                            style={{ flex: 1, width: undefined, height: undefined }}
                                            source={require('../../assets/images/MainLanding/fashion.png')}
                                            resizeMode="contain"
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: '100%', height: '25%', flexDirection: 'row', justifyContent: 'space-around' }}>
                            <TouchableOpacity style={{ width: '45%', height: '100%', flexDirection: 'row', backgroundColor: 'white', borderRadius: 5 }}>
                                <View style={{ width: '80%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontFamily: fontStyles.PoppinsRegular, fontSize: 14 }}>Food & Drinks</Text>
                                </View>
                                <View style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ width: '100%', height: '80%' }}>
                                        <Image
                                            style={{ flex: 1, width: undefined, height: undefined }}
                                            source={require('../../assets/images/MainLanding/drinks.png')}
                                            resizeMode="contain"
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '45%', height: '100%', flexDirection: 'row', backgroundColor: 'white', borderRadius: 5 }}>
                                <View style={{ width: '80%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontFamily: fontStyles.PoppinsRegular, fontSize: 14 }}>More</Text>
                                </View>
                                <View style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ width: '100%', height: '80%' }}>
                                        <Image
                                            style={{ flex: 1, width: undefined, height: undefined }}
                                            source={require('../../assets/images/MainLanding/more.png')}
                                            resizeMode="contain"
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* Card Section ended */}
                    {/* Shops we like section started */}
                    <View style={{ width: '95%', height: height * .3, alignSelf: 'flex-end' }}>
                        <View style={{ width: '100%', height: '15%', justifyContent: 'center' }}>
                            <Text style={{ fontFamily: fontStyles.PoppinsRegular, fontSize: 16 }}>Shops we like</Text>
                        </View>
                        <View style={{ width: '100%', height: '85%', flexDirection: 'row' }}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <View style={{ width: width * .5, height: height * .25, marginRight: 20, flexDirection: 'column', borderRadius: 5, borderColor: 'white', borderWidth: 3 }}>
                                    <View style={{ width: '100%', height: '80%' }}>
                                        <View style={{ width: '100%', height: '100%', flexWrap: 'wrap', position: 'relative' }}>
                                            <View style={{ width: '50%', height: '50%' }}>
                                                <Image
                                                    source={require('../../assets/images/MainLanding/shop-1-collage-1.png')}
                                                    resizeMode="cover"
                                                    style={{ flex: 1, width: undefined, height: undefined, opacity: 1 }}
                                                />
                                            </View>
                                            <View style={{ width: '50%', height: '50%' }}>
                                                <Image
                                                    source={require('../../assets/images/MainLanding/shop-1-collage-2.png')}
                                                    resizeMode="cover"
                                                    style={{ flex: 1, width: undefined, height: undefined, opacity: 1 }}
                                                />
                                            </View>
                                            <View style={{ width: '50%', height: '50%' }}>
                                                <Image
                                                    source={require('../../assets/images/MainLanding/shop-1-collage-3.png')}
                                                    resizeMode="cover"
                                                    style={{ flex: 1, width: undefined, height: undefined, opacity: 1 }}
                                                />
                                            </View>
                                            <View style={{ width: '50%', height: '50%' }}>
                                                <Image
                                                    source={require('../../assets/images/MainLanding/shop-1-collage-4.png')}
                                                    resizeMode="cover"
                                                    style={{ flex: 1, width: undefined, height: undefined, opacity: 1 }}
                                                />
                                            </View>
                                            <View style={{ width: width * .18, height: height * .09, position: 'absolute', top: '25%', left: '30%', borderRadius: width * .1 }}>
                                                <Image
                                                    source={require('../../assets/images/MainLanding/shop-1-avatar.png')}
                                                    resizeMode="cover"
                                                    style={{ width: width * .18, height: height * .09, borderColor: 'white', borderWidth: 2, borderRadius: width * .09 }}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ width: '100%', height: '20%', backgroundColor: 'white' }}>
                                        <View style={{ width: '90%', height: '100%', flexDirection: 'column', marginLeft: '5%', marginTop: '3%' }}>
                                            <Text style={{ fontFamily: fontStyles.PoppinsRegular, fontSize: 10, lineHeight: 11 }}>Pink Tulip Loom</Text>
                                            <Text style={{ fontFamily: fontStyles.PoppinsRegular, fontSize: 10, lineHeight: 11 }}>Crochet</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ width: width * .5, height: height * .25, marginRight: 20, flexDirection: 'column', borderRadius: 5, borderColor: 'white', borderWidth: 3 }}>
                                    <View style={{ width: '100%', height: '80%' }}>
                                        <View style={{ width: '100%', height: '100%', flexWrap: 'wrap', position: 'relative' }}>
                                            <View style={{ width: '50%', height: '50%' }}>
                                                <Image
                                                    source={require('../../assets/images/MainLanding/shop-2-collage-1.png')}
                                                    resizeMode="cover"
                                                    style={{ flex: 1, width: undefined, height: undefined, opacity: 1 }}
                                                />
                                            </View>
                                            <View style={{ width: '50%', height: '50%' }}>
                                                <Image
                                                    source={require('../../assets/images/MainLanding/shop-2-collage-2.png')}
                                                    resizeMode="cover"
                                                    style={{ flex: 1, width: undefined, height: undefined, opacity: 1 }}
                                                />
                                            </View>
                                            <View style={{ width: '50%', height: '50%' }}>
                                                <Image
                                                    source={require('../../assets/images/MainLanding/shop-2-collage-3.png')}
                                                    resizeMode="cover"
                                                    style={{ flex: 1, width: undefined, height: undefined, opacity: 1 }}
                                                />
                                            </View>
                                            <View style={{ width: '50%', height: '50%' }}>
                                                <Image
                                                    source={require('../../assets/images/MainLanding/shop-2-collage-4.png')}
                                                    resizeMode="cover"
                                                    style={{ flex: 1, width: undefined, height: undefined, opacity: 1 }}
                                                />
                                            </View>
                                            <View style={{ width: width * .18, height: height * .09, position: 'absolute', top: '25%', left: '30%', borderRadius: width * .1 }}>
                                                <Image
                                                    source={require('../../assets/images/MainLanding/shop-2-avatar.png')}
                                                    resizeMode="cover"
                                                    style={{ width: width * .18, height: height * .09, borderColor: 'white', borderWidth: 2, borderRadius: width * .09 }}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ width: '100%', height: '20%', backgroundColor: 'white' }}>
                                        <View style={{ width: '90%', height: '100%', flexDirection: 'column', marginLeft: '5%', marginTop: '3%' }}>
                                            <Text style={{ fontFamily: fontStyles.PoppinsRegular, fontSize: 10, lineHeight: 11 }}>EQ Custom Leather Bag</Text>
                                            <Text style={{ fontFamily: fontStyles.PoppinsRegular, fontSize: 10, lineHeight: 11 }}>Leather</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ width: width * .5, height: height * .25, marginRight: 20, flexDirection: 'column', borderRadius: 5, borderColor: 'white', borderWidth: 3 }}>
                                    <View style={{ width: '100%', height: '80%' }}>
                                        <View style={{ width: '100%', height: '100%', flexWrap: 'wrap', position: 'relative' }}>
                                            <View style={{ width: '50%', height: '50%' }}>
                                                <Image
                                                    source={require('../../assets/images/MainLanding/shop-1-collage-1.png')}
                                                    resizeMode="cover"
                                                    style={{ flex: 1, width: undefined, height: undefined, opacity: 1 }}
                                                />
                                            </View>
                                            <View style={{ width: '50%', height: '50%' }}>
                                                <Image
                                                    source={require('../../assets/images/MainLanding/shop-1-collage-2.png')}
                                                    resizeMode="cover"
                                                    style={{ flex: 1, width: undefined, height: undefined, opacity: 1 }}
                                                />
                                            </View>
                                            <View style={{ width: '50%', height: '50%' }}>
                                                <Image
                                                    source={require('../../assets/images/MainLanding/shop-1-collage-3.png')}
                                                    resizeMode="cover"
                                                    style={{ flex: 1, width: undefined, height: undefined, opacity: 1 }}
                                                />
                                            </View>
                                            <View style={{ width: '50%', height: '50%' }}>
                                                <Image
                                                    source={require('../../assets/images/MainLanding/shop-1-collage-4.png')}
                                                    resizeMode="cover"
                                                    style={{ flex: 1, width: undefined, height: undefined, opacity: 1 }}
                                                />
                                            </View>
                                            <View style={{ width: width * .18, height: height * .09, position: 'absolute', top: '25%', left: '30%', borderRadius: width * .1 }}>
                                                <Image
                                                    source={require('../../assets/images/MainLanding/shop-1-avatar.png')}
                                                    resizeMode="cover"
                                                    style={{ width: width * .18, height: height * .09, borderColor: 'white', borderWidth: 2, borderRadius: width * .09 }}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ width: '100%', height: '20%', backgroundColor: 'white' }}>
                                        <View style={{ width: '90%', height: '100%', flexDirection: 'column', marginLeft: '5%', marginTop: '3%' }}>
                                            <Text style={{ fontFamily: fontStyles.PoppinsRegular, fontSize: 10, lineHeight: 11 }}>Pink Tulip Loom</Text>
                                            <Text style={{ fontFamily: fontStyles.PoppinsRegular, fontSize: 10, lineHeight: 11 }}>Crochet</Text>
                                        </View>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                    {/* End of Shops we like */}
                    {/* Popular started */}
                    <View style={{ width: '95%', height: height * .3, alignSelf: 'flex-end' }}>
                        <View style={{ width: '100%', height: '15%', justifyContent: 'center' }}>
                            <Text style={{ fontFamily: fontStyles.PoppinsRegular, fontSize: 16 }}>Popular</Text>
                        </View>
                        <View style={{ width: '100%', height: '85%', flexDirection: 'row' }}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <View style={{ width: width * .40, height: height * .25, marginRight: 20, flexDirection: 'column', borderRadius: 5, borderColor: 'white', borderWidth: 3 }}>
                                    <View style={{ width: '100%', height: '70%' }}>
                                        <View style={{ width: '100%', height: '100%', backgroundColor: 'green', position: 'relative' }}>
                                            <Image
                                                source={require('../../assets/images/MainLanding/shop-1-collage-4.png')}
                                                resizeMode="cover"
                                                style={{ flex: 1, width: undefined, height: undefined }}
                                            />
                                        </View>
                                        <View style={{ width: '30%', height: '15%', position: 'absolute', top: '8%', left: '8%', backgroundColor: '#BD10E0', borderRadius: 3, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ fontFamily: fontStyles.PoppinsRegular, color: 'white', fontSize: 10 }}>New</Text>
                                        </View>

                                    </View>
                                    <View style={{ width: '100%', height: '30%', backgroundColor: 'white' }}>
                                        <View style={{ width: '90%', height: '100%', flexDirection: 'column', marginLeft: '5%', marginTop: '3%' }}>
                                            <Text style={{ fontFamily: fontStyles.PoppinsRegular, fontSize: 10, lineHeight: 11 }}>Southdown Spinning</Text>
                                            <Text style={{ fontFamily: fontStyles.PoppinsRegular, fontSize: 10, lineHeight: 11 }}>Fibre</Text>
                                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                                <View style={{ width: '60%', height: '100%', justifyContent: 'center', alignItems: 'flex-start' }}>
                                                    <Text style={{ fontFamily: fontStyles.PoppinsRegular, color: '#6178DE' }}>7.5 KWD</Text>
                                                </View>
                                                <View style={{ width: '40%', height: '100%', justifyContent: 'center', alignItems: 'flex-end' }}>
                                                    <View style={{ width: '60%', height: '60%' }}>
                                                        <Image
                                                            source={require('../../assets/images/MainLanding/shopping_cart.png')}
                                                            resizeMode="contain"
                                                            style={{ flex: 1, width: undefined, height: undefined }}
                                                        />
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ width: width * .40, height: height * .25, marginRight: 20, flexDirection: 'column', borderRadius: 5, borderColor: 'white', borderWidth: 3 }}>
                                    <View style={{ width: '100%', height: '70%' }}>
                                        <View style={{ width: '100%', height: '100%', backgroundColor: 'green', position: 'relative' }}>
                                            <Image
                                                source={require('../../assets/images/MainLanding/recommended-2.png')}
                                                resizeMode="cover"
                                                style={{ flex: 1, width: undefined, height: undefined }}
                                            />
                                        </View>
                                        <View style={{ width: '30%', height: '15%', position: 'absolute', top: '8%', left: '8%', backgroundColor: '#6178DE', borderRadius: 3, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ fontFamily: fontStyles.PoppinsRegular, color: 'white', fontSize: 10 }}>50% Off</Text>
                                        </View>

                                    </View>
                                    <View style={{ width: '100%', height: '30%', backgroundColor: 'white' }}>
                                        <View style={{ width: '90%', height: '100%', flexDirection: 'column', marginLeft: '5%', marginTop: '3%' }}>
                                            <Text style={{ fontFamily: fontStyles.PoppinsRegular, fontSize: 10, lineHeight: 11 }}>Bunny hill,goods for</Text>
                                            <Text style={{ fontFamily: fontStyles.PoppinsRegular, fontSize: 10, lineHeight: 11 }}>kids interior</Text>
                                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                                <View style={{ width: '60%', height: '100%', justifyContent: 'center', alignItems: 'flex-start' }}>
                                                    <Text style={{ fontFamily: fontStyles.PoppinsRegular, color: '#6178DE' }}>19 KWD</Text>
                                                </View>
                                                <View style={{ width: '40%', height: '100%', justifyContent: 'center', alignItems: 'flex-end' }}>
                                                    <View style={{ width: '60%', height: '60%' }}>
                                                        <Image
                                                            source={require('../../assets/images/MainLanding/shopping_cart.png')}
                                                            resizeMode="contain"
                                                            style={{ flex: 1, width: undefined, height: undefined }}
                                                        />
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ width: width * .40, height: height * .25, marginRight: 20, flexDirection: 'column', borderRadius: 5, borderColor: 'white', borderWidth: 3 }}>
                                    <View style={{ width: '100%', height: '70%' }}>
                                        <View style={{ width: '100%', height: '100%', backgroundColor: 'green', position: 'relative' }}>
                                            <Image
                                                source={require('../../assets/images/MainLanding/recommend-1.png')}
                                                resizeMode="cover"
                                                style={{ flex: 1, width: undefined, height: undefined }}
                                            />
                                        </View>
                                    </View>
                                    <View style={{ width: '100%', height: '30%', backgroundColor: 'white' }}>
                                        <View style={{ width: '90%', height: '100%', flexDirection: 'column', marginLeft: '5%', marginTop: '3%' }}>
                                            <Text style={{ fontFamily: fontStyles.PoppinsRegular, fontSize: 10, lineHeight: 11 }}>EQ | Custom Leather</Text>
                                            <Text style={{ fontFamily: fontStyles.PoppinsRegular, fontSize: 10, lineHeight: 11 }}>Bags</Text>
                                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                                <View style={{ width: '60%', height: '100%', justifyContent: 'center', alignItems: 'flex-start' }}>
                                                    <Text style={{ fontFamily: fontStyles.PoppinsRegular, color: '#6178DE' }}>34 KWD</Text>
                                                </View>
                                                <View style={{ width: '40%', height: '100%', justifyContent: 'center', alignItems: 'flex-end' }}>
                                                    <View style={{ width: '60%', height: '60%' }}>
                                                        <Image
                                                            source={require('../../assets/images/MainLanding/shopping_cart.png')}
                                                            resizeMode="contain"
                                                            style={{ flex: 1, width: undefined, height: undefined }}
                                                        />
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                    {/* Popular end */}
                    {/* Recommended for you start */}
                    <View style={{ width: '95%', height: height * .3, alignSelf: 'flex-end' }}>
                        <View style={{ width: '100%', height: '15%', justifyContent: 'center' }}>
                            <Text style={{ fontFamily: fontStyles.PoppinsRegular, fontSize: 16 }}>Recommended for you</Text>
                        </View>
                        <View style={{ width: '100%', height: '85%', flexDirection: 'row' }}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <View style={{ width: width * .40, height: height * .25, marginRight: 20, flexDirection: 'column', borderRadius: 5, borderColor: 'white', borderWidth: 3 }}>
                                    <View style={{ width: '100%', height: '70%' }}>
                                        <View style={{ width: '100%', height: '100%', backgroundColor: 'green', position: 'relative' }}>
                                            <Image
                                                source={require('../../assets/images/MainLanding/recommend-1.png')}
                                                resizeMode="cover"
                                                style={{ flex: 1, width: undefined, height: undefined }}
                                            />
                                        </View>
                                    </View>
                                    <View style={{ width: '100%', height: '30%', backgroundColor: 'white' }}>
                                        <View style={{ width: '90%', height: '100%', flexDirection: 'column', marginLeft: '5%', marginTop: '3%' }}>
                                            <Text style={{ fontFamily: fontStyles.PoppinsRegular, fontSize: 10, lineHeight: 11 }}>EQ | Custom Leather</Text>
                                            <Text style={{ fontFamily: fontStyles.PoppinsRegular, fontSize: 10, lineHeight: 11 }}>Bags</Text>
                                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                                <View style={{ width: '60%', height: '100%', justifyContent: 'center', alignItems: 'flex-start' }}>
                                                    <Text style={{ fontFamily: fontStyles.PoppinsRegular, color: '#6178DE' }}>34 KWD</Text>
                                                </View>
                                                <View style={{ width: '40%', height: '100%', justifyContent: 'center', alignItems: 'flex-end' }}>
                                                    <View style={{ width: '60%', height: '60%' }}>
                                                        <Image
                                                            source={require('../../assets/images/MainLanding/shopping_cart.png')}
                                                            resizeMode="contain"
                                                            style={{ flex: 1, width: undefined, height: undefined }}
                                                        />
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ width: width * .40, height: height * .25, marginRight: 20, flexDirection: 'column', borderRadius: 5, borderColor: 'white', borderWidth: 3 }}>
                                    <View style={{ width: '100%', height: '70%' }}>
                                        <View style={{ width: '100%', height: '100%', backgroundColor: 'green', position: 'relative' }}>
                                            <Image
                                                source={require('../../assets/images/MainLanding/recommended-2.png')}
                                                resizeMode="cover"
                                                style={{ flex: 1, width: undefined, height: undefined }}
                                            />
                                        </View>
                                    </View>
                                    <View style={{ width: '100%', height: '30%', backgroundColor: 'white' }}>
                                        <View style={{ width: '90%', height: '100%', flexDirection: 'column', marginLeft: '5%', marginTop: '3%' }}>
                                            <Text style={{ fontFamily: fontStyles.PoppinsRegular, fontSize: 10, lineHeight: 11 }}>Bunny hill,goods for</Text>
                                            <Text style={{ fontFamily: fontStyles.PoppinsRegular, fontSize: 10, lineHeight: 11 }}>kids interior</Text>
                                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                                <View style={{ width: '60%', height: '100%', justifyContent: 'center', alignItems: 'flex-start' }}>
                                                    <Text style={{ fontFamily: fontStyles.PoppinsRegular, color: '#6178DE' }}>19 KWD</Text>
                                                </View>
                                                <View style={{ width: '40%', height: '100%', justifyContent: 'center', alignItems: 'flex-end' }}>
                                                    <View style={{ width: '60%', height: '60%' }}>
                                                        <Image
                                                            source={require('../../assets/images/MainLanding/shopping_cart.png')}
                                                            resizeMode="contain"
                                                            style={{ flex: 1, width: undefined, height: undefined }}
                                                        />
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ width: width * .40, height: height * .25, marginRight: 20, flexDirection: 'column', borderRadius: 5, borderColor: 'white', borderWidth: 3 }}>
                                    <View style={{ width: '100%', height: '70%' }}>
                                        <View style={{ width: '100%', height: '100%', backgroundColor: 'green', position: 'relative' }}>
                                            <Image
                                                source={require('../../assets/images/MainLanding/shop-1-collage-4.png')}
                                                resizeMode="cover"
                                                style={{ flex: 1, width: undefined, height: undefined }}
                                            />
                                        </View>
                                    </View>
                                    <View style={{ width: '100%', height: '30%', backgroundColor: 'white' }}>
                                        <View style={{ width: '90%', height: '100%', flexDirection: 'column', marginLeft: '5%', marginTop: '3%' }}>
                                            <Text style={{ fontFamily: fontStyles.PoppinsRegular, fontSize: 10, lineHeight: 11 }}>Southdown Spinning</Text>
                                            <Text style={{ fontFamily: fontStyles.PoppinsRegular, fontSize: 10, lineHeight: 11 }}>Fibre</Text>
                                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                                <View style={{ width: '60%', height: '100%', justifyContent: 'center', alignItems: 'flex-start' }}>
                                                    <Text style={{ fontFamily: fontStyles.PoppinsRegular, color: '#6178DE' }}>7.5 KWD</Text>
                                                </View>
                                                <View style={{ width: '40%', height: '100%', justifyContent: 'center', alignItems: 'flex-end' }}>
                                                    <View style={{ width: '60%', height: '60%' }}>
                                                        <Image
                                                            source={require('../../assets/images/MainLanding/shopping_cart.png')}
                                                            resizeMode="contain"
                                                            style={{ flex: 1, width: undefined, height: undefined }}
                                                        />
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                    {/* Recommended end */}
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