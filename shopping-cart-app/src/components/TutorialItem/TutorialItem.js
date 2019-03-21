import React,{Component} from 'react'
import { View, Text, Image, TouchableOpacity} from 'react-native'
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
  heading_1: String -- Main heading shown for the card
  heading_2: String -- Sub heading shown for the card
  bcolor: String -- background color of the card
  on_press_event: function -- Callback function when button is pressed
============================================================================= */

class TutorialItem extends Component {
    constructor(props){
        super(props)
        this.img = null
        this.grad = null
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
            <View style={[styles.container]} >
                <View style={[styles.backgroundGradient,{backgroundColor:this.props.bcolor}]}>
                </View>

                <View style={[styles.container_top]}>
                    <View style={[styles.heading_container]}>
                        <Text style={[styles.heading_container_s1]}>
                            { this.props.heading_1 ? this.props.heading_1: "NA"}
                        </Text>
                        <Text style={[styles.heading_container_s2]}>
                            { this.props.heading_2 ? this.props.heading_2: "NA"}
                        </Text>
                    </View>

                    <Image
                    style={[styles.image]}
                    source={this.img}   />
                </View>
          
              
                <View style={[styles.container_bot]}> 
                    <Text  style={[styles.decription]}>
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elt. Ut vel
                        ventatis lacus, in tincidunt angue.
                        Sed congue, nisl a eleifend
                    </Text>

                    <TouchableOpacity activeOpacity={0.2} onPress={this.props.on_press_event} style={[styles.main_btn]}>
                        <Text style={[styles.main_btn_text]}> Get Started! </Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}
/* Export
============================================================================= */
export default TutorialItem
