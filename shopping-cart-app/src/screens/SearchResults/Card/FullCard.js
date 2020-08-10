import React from 'react';
import { View, Image, TouchableOpacity, } from 'react-native';
import styles from './styles';
import { TextDefault } from '../../../components';
import { colors, verticalScale } from '../../../utils';


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
function FullCard(props) {
    let renderPreviousAmount = null;
    function renderPrevousPrice(amount) {
        return (
            <TextDefault style={styles.prevPriceText} small>
                {amount}
                {' '}
                {'PKR'}
            </ TextDefault>
        );
    }

    // if product is new
    function renderBadge() {
        return (
            <TextDefault style={styles.badge} textColor={colors.white} center small>
                {'New'}
            </TextDefault>
        );
    }
    function renderPreviousPage() {
        if (props.productPreviousPrice)
            renderPreviousAmount = renderPrevousPrice(props.productPreviousPrice);

        let renderBage = null;
        if (props.productBadge) renderBage = renderBadge();

        return null
    }
    // render the whole content
    return (
        <>
            {renderPreviousPage()}
            <View style={styles.container} >

                <View style={styles.leftside}>
                    <Image
                        style={styles.thumbnail}
                        resizeMode="cover"
                        source={props.productImage}
                    />
                    {renderBadge()}
                </View>
                <View style={styles.rightside_container}>
                    <View style={styles.rightside}>
                        <View style={styles.rightside_top}>
                            <TextDefault numberOfLines={2} style={styles.product} textColor={colors.fontMainColor} H4>
                                {props.productName}
                            </TextDefault>
                        </View>
                        <View style={styles.rightside_bot}>
                            {renderPreviousAmount}
                            <View style={styles.special_row}>
                                <TextDefault textColor={colors.fontBlue} style={styles.amount} H5>
                                    {props.productNewPrice}
                                    {' '}
                                    {'PKR'}
                                </TextDefault>
                                <TouchableOpacity
                                    activeOpacity={0}
                                    onPress={() => { console.log('Go to Cart'); }}>
                                    <Image
                                        style={{ width: verticalScale(16), height: verticalScale(16) }}
                                        source={require('../../../assets/icons/shopcart.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </View>
            </View >
        </>
    );
}

export default FullCard;