import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native';
import styles from './styles';

/* Config/Constants
============================================================================= */
const images = {
    carosel_img_1: require('../../../assets/images/MainLanding/banner-1.png'),
    carosel_img_2: require('../../../assets/images/MainLanding/recommended-2.png'),
    carosel_img_3: require('../../../assets/images/MainLanding/carosel_img_3.png'),
};
/* =============================================================================

Props:
  page: String -- Number to identify which image should be shown
  on_press_event: function -- Callback function when button is pressed
============================================================================= */

class CarouselItem extends Component {
    constructor(props) {
        super(props);
        this.img = null;
        if (props.page == '0') {
            this.img = images.carosel_img_1;
        } else if (props.page == '1') {
            this.img = images.carosel_img_2;
        } else if (props.page == '2') {
            this.img = images.carosel_img_3;
        }
    }

    render = () => (
        <View style={[styles.container]}>
            <ImageBackground
                source={this.img}
                style={styles.image}
            />
        </View>
    )
}
/* Export
============================================================================= */
export default CarouselItem;
