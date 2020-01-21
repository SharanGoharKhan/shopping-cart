import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';


/* Config/Constants
============================================================================= */


/* =============================================================================
<FullCard />
--------------------------------------------------------------------------------

Props:
  ?
// ImageURL is currently a placeholder add URI functionality on DYS basis
productName - Name of the product
productBrand - Company/ Manufacturer
productQuantity - amount
productPreviousPrice - Previous price of unit, if null wont be showed
productNewPrice - Current Price of the unit
============================================================================= */
function FullCard(props) {
    let renderPreviousAmount = null;
    function renderPrevousPrice(amount) {
        return (
            <View style={styles.prevPrice}>
                <Text style={style = styles.prevPriceText}>
                    {amount}
                    {' '}
                    PKR
              </Text>
            </View>
        );
    }
    function renderPage() {
        if (props.productPreviousPrice) renderPreviousAmount = renderPrevousPrice(props.productPreviousPrice);
    }
    return (
        <>
            {renderPage}
            <View style={styles.container}>
                <View style={styles.leftside}>
                    <Image
                        style={styles.thumbnail}
                        resizeMode="cover"
                        source={props.productImage}
                    />
                </View>
                <View style={styles.rightside_container}>
                    <View style={styles.rightside}>
                        <View style={styles.rightside_top}>
                            <Text style={styles.product} numberOfLines={1}>{props.productName}</Text>
                            <View style={styles.row}>
                                <Text style={styles.by}>By </Text>
                                <Text style={styles.brand} numberOfLines={1}>
                                    {props.productBrand}
                                    {' '}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.rightside_bot}>
                            {renderPreviousAmount}
                            <View style={styles.special_row}>
                                <Text style={styles.qty}>
                                    {' '}
                                    x
                                  {props.productQuantity}
                                    {' '}
                                </Text>
                                <Text style={styles.amount}>
                                    {' '}
                                    {props.productNewPrice}
                                    {' '}
                                    PKR
                      </Text>
                            </View>
                        </View>

                    </View>
                </View>
            </View>
        </>
    )
}

export default FullCard;
