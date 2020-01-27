import React, { useState } from 'react';
import { View, ImageBackground } from 'react-native';
import styles from './styles';

const images = [
    require('../../../assets/images/MainLanding/banner-1.png'),
    require('../../../assets/images/MainLanding/recommended-2.png'),
    require('../../../assets/images/MainLanding/carosel_img_3.png'),
]

function CarouselItem(props) {
    let currentImage = props.page%images.length
    const [img, setImage] = useState(images[currentImage])
    return (
        <View style={[styles.container]}>
            <ImageBackground
                source={img}
                style={styles.image}
            />
        </View>
    )
}

export default CarouselItem;
