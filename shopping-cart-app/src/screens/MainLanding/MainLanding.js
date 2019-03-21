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
            <View style={[styles.flex, { backgroundColor: '#eee' }]}>
                <StatusBar backgroundColor={'transparent'} barStyle="dark-content" hidden={false} translucent={true} />
                <View style={{ width: '100%', height: '30%', backgroundColor: 'blue', position: 'relative' }}>
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
                <View style={{ width: '95%', height: '25%', marginTop: 30, alignSelf: 'center', flexDirection: 'column', justifyContent: 'space-around' }}>
                    <View style={{ width: '100%', height: '25%', flexDirection: 'row', justifyContent: 'space-around' }}>
                        <View style={{ width: '45%', height: '100%', flexDirection: 'row', backgroundColor: 'white' }}>
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
                        </View>
                        <View style={{ width: '45%', height: '100%', flexDirection: 'row', backgroundColor: 'white' }}>
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
                        </View>
                    </View>
                    <View style={{ width: '100%', height: '25%', flexDirection: 'row', justifyContent: 'space-around' }}>
                        <View style={{ width: '45%', height: '100%', flexDirection: 'row', backgroundColor: 'white' }}>
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
                        </View>
                        <View style={{ width: '45%', height: '100%', flexDirection: 'row', backgroundColor: 'white' }}>
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
                        </View>
                    </View>
                    <View style={{ width: '100%', height: '25%', flexDirection: 'row', justifyContent: 'space-around' }}>
                        <View style={{ width: '45%', height: '100%', flexDirection: 'row', backgroundColor: 'white' }}>
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
                        </View>
                        <View style={{ width: '45%', height: '100%', flexDirection: 'row', backgroundColor: 'white' }}>
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
                        </View>
                    </View>
                </View>
                {/* Card Section ended */}
                {/* Shops we like section started */}
                <View style={{width: '95%',height: '28%',backgroundColor:'blue',alignSelf:'flex-end'}}>
                    <View style={{width:'100%',height:'20%',backgroundColor:'red',justifyContent:'center'}}>
                        <Text style={{fontFamily:fontStyles.PoppinsRegular,fontSize:16}}>Shops we like</Text>
                    </View>
                    <View style={{width:'100%',height:'79%',backgroundColor:'green',flexDirection:'row'}}>
                        {/* <ScrollView style={{flex:1}}> */}
                            <View style={{width: width*.4,height:height*.22,marginRight:20,backgroundColor:'yellow'}}>
                            </View>
                            <View style={{width:width*.4,height:height*.22,marginRight:20,backgroundColor:'yellow'}}>
                            </View>
                        {/* </ScrollView> */}
                    </View>
                </View>
            </View>
        )
    }
}
/* Export
============================================================================= */
export default MainLanding