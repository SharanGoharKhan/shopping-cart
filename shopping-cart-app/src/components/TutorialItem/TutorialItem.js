import React,{Component} from 'react'
import { View, Text, Image, TouchableOpacity, ImageBackground} from 'react-native'
import styles from './styles'

/* Config/Constants
============================================================================= */
const images = {
    carosel_img_1: require('../../assets/images/MainLanding/carosel_img_1.png'),
    carosel_img_2: require('../../assets/images/MainLanding/carosel_img_2.png'),
    carosel_img_3: require('../../assets/images/MainLanding/carosel_img_3.png'),
};
/* =============================================================================
<TutorialItem />
--------------------------------------------------------------------------------

Props:
  page: String -- Number to identify which image should be shown
  on_press_event: function -- Callback function when button is pressed
============================================================================= */

class TutorialItem extends Component {
    constructor(props){
        super(props)
        this.img = null
        if(props.page == "0"){
            this.img = images.carosel_img_1
        }
        else if( props.page == "1"){
            this.img = images.carosel_img_2
        }
        else if( props.page =="2"){
            this.img= images.carosel_img_3
        }
    }
    render=()=>{
        return(
            <View style={[styles.container]}>
                <ImageBackground
                source={this.img}
                style={styles.image}
                >
                </ImageBackground>
            </View>
        )
    }
}
/* Export
============================================================================= */
export default TutorialItem
