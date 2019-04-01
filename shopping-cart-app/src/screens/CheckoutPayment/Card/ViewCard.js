import React from 'react'
import {View, Text, TouchableOpacity, Image} from 'react-native'

import styles from './styles'
import {colors} from '../../../utils/colors'
/* =============================================================================
<ViewCard />
A component that displays credit card info
--------------------------------------------------------------------------------

Props:
  ?
  text: text content of the card
============================================================================= */

class ViewCard extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      is_active: false
    }
  }
  componentDidMount() {
    this.props.onRef(this)
  }
  componentWillUnmount() {
    this.props.onRef(undefined)
  }
  render(){
    let outlineColor = this.state.is_active? colors.blueColor: colors.secondaryWhiteColor
    console.log(outlineColor)
    return(
      <View style={[styles.outline,{borderColor: outlineColor}]}>
          <View style={styles.container}>
              <View style={styles.topContainer}>
                <Text>-Img-</Text>
              </View>
              <View style={styles.botContainer}>
                <View style={[styles.row, styles.creditCardNumber]}>
                  <Text style={styles.ccText}>{'\u2B24'} {'\u2B24'} {'\u2B24'} {'\u2B24'}</Text>
                  <Text style={styles.ccText}>{'\u2B24'} {'\u2B24'} {'\u2B24'} {'\u2B24'}</Text>
                  <Text style={styles.ccText}>{'\u2B24'} {'\u2B24'} {'\u2B24'} {'\u2B24'}</Text>
                  <Text style={styles.ccText}>4 5 6 7</Text>
  
                </View>
            
                  <View style={styles.expiryContainer}>
                    <View>
                      <Text style={styles.expiryText}>VALID</Text>
                      <Text style={styles.expiryText}>THRU</Text>
                    </View>
                    <View style={styles.expiryMonthYear}>
                      <Text style={styles.expiryNumberText}>11/12</Text>
                    </View>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.cardOwnerName}>JOHN M.Smith</Text>
                    <Text>-Img-</Text>
                  </View>
              </View>
          </View>
        </View>
    )
  }

  toggleActive(){
    this.setState({is_active: !this.state.is_active})
  }


}



/* Export
============================================================================= */
export default ViewCard
