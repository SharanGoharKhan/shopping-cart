import React from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import styles from './styles'

/* Config/Constants
============================================================================= */
const caroselData = [
    {
        img: require('../../assets/images/MainLanding/carosel_img_3.png')
    },
    {
        img: require('../../assets/images/MainLanding/carosel_img_2.png')
    },
    {
        img: require('../../assets/images/MainLanding/shop-2-collage-2.png')
    },
    {
        img: require('../../assets/images/MainLanding/recommended-2.png')
    },
    {
        img: require('../../assets/images/MainLanding/carosel_img_3.png')
    }
]


/* =============================================================================
<ProductDescription />
--------------------------------------------------------------------------------

Props:
  ?

============================================================================= */
class ProductDescription extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            carosel_img: require('../../assets/images/MainLanding/carosel_img_3.png')
        }
        this.changeCaroselImg = this.changeCaroselImg.bind(this)
    }
    changeCaroselImg = (imgPath) => {
        this.setState({carosel_img: imgPath})
    }
    render() {
        return (
            <View style={styles.flex}>
                {/* Header starts */}
                <View style={styles.headerContainer}>
                    <View style={styles.headerSubContainer}>
                        <View style={styles.headerTextContainer}>
                            <Text style={styles.headerText}>Details</Text>
                        </View>
                        <View style={styles.headerIconsContainer}>
                            <TouchableOpacity style={styles.headerImg}>
                                <Image
                                    source={require('../../assets/images/ProductDescription/kiosk.png')}
                                    resizeMode="contain"
                                    style={styles.imgResponsive}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.headerImg, styles.marginLeft5]}>
                                <Image
                                    source={require('../../assets/images/ProductDescription/upload.png')}
                                    resizeMode="contain"
                                    style={styles.imgResponsive}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                {/* Header ends */}
                {/* Carosel Title starts */}
                <View style={styles.caroselContainer}>
                    <View style={styles.caroselSubContainer}>
                        <View style={styles.caroselTitleContainer}>
                            <Text style={styles.textStyle}>Southdown Spinning Fibre</Text>
                        </View>
                        <View style={styles.caroselPriceContainer}>
                            <View style={styles.caroselPriceSubContainer}>
                                <Text style={[styles.textStyle, styles.priceColor]}>7.5 KWD</Text>
                            </View>
                        </View>
                    </View>
                </View>
                {/* Carosel Title ends */}
                {/* Carosel selectable starts */}
                <View style={styles.caroselMainImgCnt}>
                    <Image
                        source={this.state.carosel_img}
                        resizeMode="cover"
                        style={styles.imgResponsive}
                    />
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.caroselItemsContainer}>
                        {
                            caroselData.map((data, ind) =>
                                <TouchableOpacity 
                                onPress={()=>this.changeCaroselImg(data.img)}
                                key={ind} 
                                style={styles.caroselItems}>
                                    <Image
                                        source={data.img}
                                        resizeMode="cover"
                                        style={styles.imgResponsive}
                                    />
                                </TouchableOpacity>
                            )
                        }
                    </View>
                </ScrollView>
                {/* Carosel selectable ends */}
                {/* Accrodian starts */}
                
                {/* Accrodian ends */}

            </View>
        )
    }
}
/* Export
============================================================================= */
export default ProductDescription