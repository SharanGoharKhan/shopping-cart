import React from 'react';
import {
    View, Text, Image, TouchableOpacity,
} from 'react-native';

import { Rating } from 'react-native-ratings';
import styles from './styles';
import { moderateScale } from '../../../utils/scaling';


/* Config/Constants
============================================================================= */


/* =============================================================================
<FullCard />
--------------------------------------------------------------------------------

Props:
  ?
// ImageURL is currently a placeholder add URI functionality on DYS basis
productName - Name of the product
productRating - 1-5 stars rating
productTotalVotes - total amount of users that voted
productPrevPrice - Previous price of unit, if null wont be showed
productNewPrice - Current Price of the unit
productBagde - Is it new product?
productImageURI - URI of the image - DYS basis
============================================================================= */
class FullCard extends React.Component {
    constructor(props) {
        super(props);
    }

    renderPrevousPrice(amount) {
        return (
            <Text includeFontPadding={false} textAlignVertical="bottom" style={style = styles.prevPriceText}>
                {amount}
                {' '}
                PKR
            </Text>
        );
    }

    // if product is new
    renderBadge() {
        return (
            <Text style={styles.badge}>
                New
          </Text>
        );
    }

    render() {
        let renderPreviousAmount = null;
        if (this.props.productPreviousPrice) renderPreviousAmount = this.renderPrevousPrice(this.props.productPreviousPrice);

        let renderBage = null;
        if (this.props.productBadge) renderBage = this.renderBadge();
        // render the whole content
        return (
            <View style={styles.container}>

                <View style={styles.leftside}>
                    <Image
                        style={styles.thumbnail}
                        resizeMode="cover"
                        source={this.props.productImage}
                    />
                    {renderBage}
                </View>
                <View style={styles.rightside_container}>
                    <View style={styles.rightside}>
                        <View style={styles.rightside_top}>
                            <Text style={styles.product} numberOfLines={2}>
                                {this.props.productName}
                            </Text>
                            <View style={styles.ratingContainer}>
                                <Rating
                                    isDisabled
                                    ratingCount={5}
                                    startingValue={this.props.productRating}
                                    imageSize={moderateScale(14)}
                                />
                                <Text style={styles.votesCount}>
                                    {this.props.productTotalVotes}
                                </Text>
                            </View>

                        </View>
                        <View style={styles.rightside_bot}>
                            {renderPreviousAmount}
                            <View style={styles.special_row}>
                                <Text style={styles.amount}>
                                    {this.props.productNewPrice}
                                    {' '}
                                    PKR
                              </Text>
                                <TouchableOpacity onPress={() => { console.log('Go to Cart'); }}>
                                    <Image
                                        style={{ width: moderateScale(16), height: moderateScale(16) }}
                                        source={require('../../../assets/icons/shopcart.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </View>
            </View>
        );
    }
}
/* Export
============================================================================= */
export default FullCard;
