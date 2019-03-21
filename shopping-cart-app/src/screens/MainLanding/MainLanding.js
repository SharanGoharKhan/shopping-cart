import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import SwiperFlatList from 'react-native-swiper-flatlist'
import { moderateScale } from '../../utils/scaling'
import TutorialItem from '../../components/TutorialItem/TutorialItem'
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
            <View style={styles.flex}>
                <SwiperFlatList
                    index={0}
                    showPagination
                    paginationDefaultColor='#bbbbbb'
                    paginationActiveColor='#797979'
                    paginationStyle={{ marginBottom: '5%' }}
                    paginationStyleItem={{ height: moderateScale(15), width: moderateScale(15), marginLeft: 0 }}>
                    <TutorialItem on_press_event={this.moveToLogin} heading_1="Tasty" heading_2="BreakFast" page="0" bcolor="#FFF7BE" />
                    <TutorialItem on_press_event={this.moveToLogin} heading_1="Refreshing" heading_2="Drinks" page="1" bcolor="#C4F2FF" />
                    <TutorialItem on_press_event={this.moveToLogin} heading_1="Delicous" heading_2="Icecream" page="2" bcolor="#FEE0EC" />
                </SwiperFlatList>
            </View>
        )
    }
}
/* Export
============================================================================= */
export default MainLanding