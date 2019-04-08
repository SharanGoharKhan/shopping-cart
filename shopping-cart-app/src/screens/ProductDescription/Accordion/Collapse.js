import React, { Component } from 'react';
import {
    View, TouchableOpacity, Text, Image,
} from 'react-native';
import CollapseBody from './CollapseBody';
import CollapseHeader from './CollapseHeader';
import { colors } from '../../../utils/colors';
import { moderateScale } from '../../../utils/scaling';

/* Config/Constants
============================================================================= */


/* =============================================================================
<Collapse />
--------------------------------------------------------------------------------

Props:
  ?

============================================================================= */
type Props = {
    isCollapsed: ?boolean,
    disabled: ?boolean,
    onToggle: ?Function,
    handleLongPress: ?Function
};

export default class Collapse extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            show: this.props.isCollapsed,
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            show: nextProps.isCollapsed,
        });
    }

    __toggle() {
        this.setState({
            show: !this.state.show,
        }, () => this.props.onToggle(this.state.show));
    }

    render() {
        let header = null;
        let body = null;
        const handleLongPressCallback = this.props.handleLongPress;

        let renderArrow = (<Image style={{ height: moderateScale(13), width: moderateScale(13) }} source={require('../../../assets/icons/downarrow.png')} />);
        if (this.state.show) { renderArrow = (<Image style={{ height: moderateScale(13), width: moderateScale(13) }} source={require('../../../assets/icons/uparrow.png')} />); }

        React.Children.forEach(this.props.children, (child) => {
            if (child.type === CollapseHeader) {
                header = (
                  <TouchableOpacity
                      style={{
                            flexDirection: 'row', width: '100%',
                        // backgroundColor:'red'
                        }}
                      disabled={this.props.disabled} onPress={() => this.__toggle()} onLongPress={handleLongPressCallback}
                    >
                      <View style={{
                            width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
                        }}
                    >
                            {child}
                      {renderArrow}
                        </View>
                    </TouchableOpacity>
                );
            } else if (child.type === CollapseBody) {
                if (this.state.show) {
                    body = child;
                }
            }
        });

        if (header === null) {
            console.warn("header wasn't found to be rendered. Please make sure you have wrapped an CollapseHeader in the Collapse Component.");
            return null;
        }
        return (
            <View
                {...this.props} style={{
                    width: '90%',
                    marginBottom: moderateScale(10),
                    borderBottomWidth: 1,
                    borderColor: colors.greyLinesColor,
                    paddingBottom: moderateScale(10),
                }}
          >
                {header}
                {body}
          </View>
        );
    }
}

Collapse.defaultProps = {
    isCollapsed: false,
    disabled: false,
    onToggle: () => undefined,
    handleLongPress: undefined,
};
