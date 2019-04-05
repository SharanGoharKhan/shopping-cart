import React from 'react'
import { View, Text,Image  } from 'react-native'

import styles from './styles'
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
productBrand - Company/ Manufacturer
productQuantity - amount
productPreviousPrice - Previous price of unit, if null wont be showed
productNewPrice - Current Price of the unit
============================================================================= */
class FullCard extends React.Component {
    constructor(props){
        super(props)
    }

    renderPrevousPrice(amount){
        return(
            <View style={styles.prevPrice}>
                <Text style={style=styles.prevPriceText}>{amount} PKR</Text>
            </View>
    )}

    render() {
        // check if previous price needs to be rendered
        let renderPreviousAmount= null
        if( this.props.productPreviousPrice )
            renderPreviousAmount = this.renderPrevousPrice(this.props.productPreviousPrice)

        // render the whole content
        return (
            <View style={styles.container}>
                <View  style={styles.leftside}>
                    <Image 
                        style={styles.thumbnail}
                        resizeMode="cover"
                        source={this.props.productImage}/>
                </View>
                <View style={styles.rightside_container}>
                    <View style={styles.rightside}>
                        <View style={styles.rightside_top}>
                            <Text style={styles.product} numberOfLines={1}>{this.props.productName}</Text>
                            <View style={styles.row}>
                                <Text style={styles.by}>By </Text>
                                <Text style={styles.brand} numberOfLines={1}>{this.props.productBrand} </Text>
                            </View>
                        </View>
                        <View style={styles.rightside_bot}>
                            {renderPreviousAmount}
                            <View style={styles.special_row}>
                                <Text style={styles.qty}> x{this.props.productQuantity} </Text>
                                <Text style={styles.amount}> {this.props.productNewPrice} PKR</Text>
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