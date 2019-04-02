import React, { Component } from 'react';
import {
    View
} from 'react-native';
/* Config/Constants
============================================================================= */



/* =============================================================================
<CollapseBody />
--------------------------------------------------------------------------------

Props:
  ?

============================================================================= */
type Props = {
};
export default class CollapseBody extends Component<Props> {

    render(){
        return (
            <View {...this.props}>
                {this.props.children}
            </View>
        );
    }
}