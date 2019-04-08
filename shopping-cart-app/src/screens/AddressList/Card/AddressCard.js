import React from 'react';
import {
    View, Text, TouchableOpacity, Image,
} from 'react-native';

import styles from './styles';
import { moderateScale } from '../../../utils/scaling';

/* =============================================================================
<Card />
A component that displays address info.
--------------------------------------------------------------------------------

Props:
  ?
  name: Title of the address ie Home, Work
  country:
  city:
  address:
  poBox:
============================================================================= */

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            is_default: false,
        };
    }

    /*
    componentDidMount() {
      this.props.onRef(this)
    }
    componentWillUnmount() {
      this.props.onRef(undefined)
    } */
    render() {
        // let outlineColor = this.state.is_default? colors.textBlueColor: colors.secondaryWhiteColor
        // console.log(outlineColor)

        const buttonJSX = this.state.is_default ? this.renderSelectedButton() : this.renderUnselectedButton();
        return (
          <View style={styles.container}>
              <View style={styles.headerRow}>
                  <Text style={styles.titleText}>
                  {' '}
                        {this.props.title}
                    </Text>
                  <TouchableOpacity
                        onPress={() => this.props.navigationObj.navigate('EditingAddress')}
                    >
                      <Image
                      style={{ height: moderateScale(16), width: moderateScale(16) }}
                      source={require('../../../assets/icons/edit.png')}
                    />
                    </TouchableOpacity>
                </View>
              <View style={styles.address}>
                  <Text style={styles.addressText}>{this.props.country}</Text>
                  <Text style={styles.addressText}>{this.props.city}</Text>
                  <Text style={styles.addressText}>{this.props.address}</Text>
                    <Text style={styles.addressText}>{this.props.poBox}</Text>
                </View>
              <View style={styles.btnContainer}>
                  {buttonJSX}
                </View>
            </View>
        );
    }

    toggleActive() {
        this.setState({ is_default: !this.state.is_default });
    }

    renderSelectedButton() {
        return (
          <TouchableOpacity onPress={() => { this.toggleActive(); }} style={styles.selectedBtn}>

              <Image
                  style={styles.tickImage}
                  source={require('../../../assets/icons/tick.png')}
                />
              <Text style={styles.selectedText}>My Default Address</Text>
            </TouchableOpacity>
        );
    }

    renderUnselectedButton() {
        return (
          <TouchableOpacity style={styles.unselectedButton} onPress={() => { this.toggleActive(); }}>
              <Text style={styles.unselectedText}>Mark it as Default Address</Text>
            </TouchableOpacity>
        );
    }
}

/* Export
  ============================================================================= */
export default Card;
