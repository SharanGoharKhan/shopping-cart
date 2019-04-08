import React from 'react';
import {
    View, Text, TouchableOpacity, Image, ScrollView,
} from 'react-native';
import BottomTab from '../../components/BottomTab/BottomTab';
import styles from './styles';

import AccordionList from './Accordion/AccordionList';
import { fontStyles } from '../../utils/fontStyles';
import { moderateScale } from '../../utils/scaling';

/* Config/Constants
============================================================================= */
const caroselData = [
    {
        img: require('../../assets/images/MainLanding/carosel_img_3.png'),
    },
    {
        img: require('../../assets/images/MainLanding/carosel_img_2.png'),
    },
    {
        img: require('../../assets/images/MainLanding/recommended-2.png'),
    },
    {
        img: require('../../assets/images/MainLanding/carosel_img_3.png'),
    },
    {
        img: require('../../assets/images/MainLanding/carosel_img_2.png'),
    },
    {
        img: require('../../assets/images/MainLanding/recommended-2.png'),
    },
    {
        img: require('../../assets/images/MainLanding/carosel_img_3.png'),
    },
];

const FORMS = [
    {
        header: 'Description',
        body: 'British heritage Beed. Dense, resiilient, bulky white wool. Dyes well and resuusuts felting. Versatuly medium handle 28-30 nucribs, 89mm staple length.',

    },
    {
        header: 'Product Detail',
        body: 'Weight: 198. Color: Pink. British heritage Beed. Dense, resiilient, bulky white wool. Dyes well and resuusuts felting. Versatuly medium handle 28-30 nucribs, 89mm staple length.',
    },

];

/* =============================================================================
<ProductDescription />
--------------------------------------------------------------------------------

Props:
  ?

============================================================================= */
class ProductDescription extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            carosel_img: require('../../assets/images/MainLanding/carosel_img_3.png'),
        };
        this.mounted = false;
        this.changeCaroselImg = this.changeCaroselImg.bind(this);
    }

    componentDidMount = () => {
        this.mounted = true;
    }

    componentWillMount = () => {
        this.mounted = false;
    }

    changeCaroselImg = (imgPath) => {
        if (this.mounted) this.setState({ carosel_img: imgPath });
    }

    render_form_head(form) {
        return (
          <View>
                <Text style={{ fontFamily: fontStyles.PoppinsRegular, fontSize: moderateScale(11) }}>
              {form.header}
            </Text>
            </View>
        );
    }

    render_form_body(form) {
        return (
            <View>
            <Text style={{ fontFamily: fontStyles.PoppinsRegular, fontSize: moderateScale(10) }}>{form.body}</Text>
          </View>
        );
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
            <ScrollView style={styles.mainScrollViewContainer}>
                  <View style={styles.caroselContainer}>
                <View style={styles.caroselSubContainer}>
                          <View style={styles.caroselTitleContainer}>
                    <Text style={styles.textStyle}>Southdown Spinning Fibre</Text>
                  </View>
                          <View style={styles.caroselPriceContainer}>
                                <View style={styles.caroselPriceSubContainer}>
                                    <Text style={[styles.textStyle, styles.priceColor]}>7.5 PKR</Text>
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
                  <View style={styles.scrollViewStyle}>
                <ScrollView
                        horizontal
                            showsHorizontalScrollIndicator={false}
                      >
                        <View style={styles.caroselItemsContainer}>
                                {
                                    caroselData.map((data, ind) => (
                                        <TouchableOpacity
                                        onPress={() => this.changeCaroselImg(data.img)}
                                            key={ind}
                                        style={styles.caroselItems}
                                      >
                                            <Image
                                            source={data.img}
                                                resizeMode="cover"
                                            style={styles.imgResponsive}
                                          />
                                      </TouchableOpacity>
                                    ))
                                }
                            </View>
                      </ScrollView>
              </View>
                  {/* Carosel selectable ends */}
                    {/* Products by starts */}
                  <View style={styles.productsByContainer}>
                        <View style={styles.productsBySubContainer}>
                    <View style={styles.productsText}>
                            <Text style={styles.textStyle}>Product provided by</Text>
                          </View>
                    <TouchableOpacity style={styles.productCardContainer}>
                              <View style={styles.productImgContainer}>
                                  <Image
                              source={require('../../assets/images/MainLanding/shop-1-avatar.png')}
                                        resizeMode="contain"
                                        style={styles.imgResponsive}
                            />
                                </View>
                              <View style={styles.productTextContainer}>
                                  <Text style={styles.textStyle}>Pink Tulip Loom</Text>
                                </View>
                              <View style={styles.dotContainer}>
                                    <View style={styles.dot} />
                          <View style={styles.dot} />
                                    <View style={styles.dot} />
                        </View>
                            </TouchableOpacity>
                  </View>
                    </View>
                  {/* Products by ends */}
                    {/* Accrodian starts */}
                  <View style={styles.accordianContainer}>
                <AccordionList
                        list={FORMS}
                            header={this.render_form_head}
                            body={this.render_form_body}
                      />
              </View>

                  {/* Accrodian ends */}
                  {/* Add to shopping cart starts */}
                    <View style={styles.shoppingCartContainer}>
                <TouchableOpacity
                          onPress={() => this.props.navigation.navigate('ShoppingCart')}
                          style={styles.shoppingCartSubContainer}
                        >
                          <Text style={styles.shoppingCartText}>Add to Shopping Cart</Text>
                        </TouchableOpacity>
              </View>
                    {/* Add to shopping cart ends */}
                </ScrollView>
                <BottomTab
                navigationObj={this.props.navigation}
              />


          </View>
        );
    }
}
/* Export
============================================================================= */
export default ProductDescription;
