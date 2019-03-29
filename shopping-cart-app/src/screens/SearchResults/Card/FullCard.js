import React from 'react'
import { View, Text,Image, TouchableOpacity  } from 'react-native'

import styles from './styles'
import { moderateScale } from '../../../utils/scaling';
import { fontStyles } from '../../../utils/fontStyles';

import { Rating } from 'react-native-ratings';


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
    constructor(props){
        super(props)
    }

    renderPrevousPrice(amount){
        return(
                <Text includeFontPadding={false} textAlignVertical="bottom" style={style=styles.prevPriceText}>{amount} KWD</Text>
    )}

    // if product is new
    renderBadge(){
            return(
            <Text style={styles.badge}>
                New
            </Text>
    )}

    render() {

        let renderPreviousAmount= null
        if( this.props.productPreviousPrice )
            renderPreviousAmount = this.renderPrevousPrice(this.props.productPreviousPrice)

        let renderBage = null
        if(this.props.productBadge)
            renderBage = this.renderBadge()
        // render the whole content
        return (
            <View style={styles.container}>
            
                <View  style={styles.leftside}>
                    <Image 
                        style={styles.thumbnail}
                        resizeMode="cover"
                        source={require('../../../assets/images/productPlaceholder.jpg')}/>
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
                                    isDisabled={true}
                                    ratingCount={5}
                                    startingValue={this.props.productRating}
                                    imageSize={moderateScale(11)}
                                />
                                <Text style={styles.votesCount}>
                                    {this.props.productTotalVotes}
                                </Text>
                            </View>
                        
                        </View>
                        <View style={styles.rightside_bot}>
                            {renderPreviousAmount}
                            <View style={styles.special_row}>
                                <Text style={styles.amount}>{this.props.productNewPrice} KWD</Text>
                                <TouchableOpacity onPress={()=>{console.log("Go to Cart")}}>
                                    <Text>ImagePC</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </View>
            </View>
        )
    }
}
/* Export
============================================================================= */
export default FullCard