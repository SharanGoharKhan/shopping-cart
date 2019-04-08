import React from 'react'
import { View, Text, TextInput, KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native'
import styles from './styles'
import BottomTab from '../../components/BottomTab/BottomTab'
/* Config/Constants
============================================================================= */



/* =============================================================================
<EditingAddress />
--------------------------------------------------------------------------------

Props:
  ?

============================================================================= */
class EditingAddress extends React.Component {
    render() {
        return (
            <View style={styles.flex}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerContainerText}>My Addresses</Text>
                </View>
                <ScrollView>
                    <View style={styles.formMainContainer}>
                        <View style={styles.nameAddressContainer}>
                            <View style={styles.nameAddressLabel}>
                                <Text style={styles.nameAddressLabelStyle}>Name of this address</Text>
                            </View>
                            <View style={styles.nameAddressInput}>
                                <TextInput
                                    placeholder="My Home"
                                    placeholderTextColor="#D0AD8A"
                                    style={styles.addressInputStyle}
                                />
                            </View>
                        </View>
                        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
                            <View style={styles.formContainer}>
                                <View style={styles.formContentContainer}>
                                    <View style={styles.twoItemsContainer}>
                                        <View style={styles.halfContainer}>
                                            <View style={styles.labelContainer}>
                                                <Text style={styles.label}>First Name</Text>
                                            </View>
                                            <View style={styles.inputContainer}>
                                                <TextInput
                                                    placeholder="Sharan"
                                                    placeholderTextColor='black'
                                                />
                                            </View>
                                        </View>
                                        <View style={styles.halfContainer}>
                                            <View style={styles.labelContainer}>
                                                <Text style={styles.label}>Last Name</Text>
                                            </View>
                                            <View style={styles.inputContainer}>
                                                <TextInput
                                                    placeholder="Khan"
                                                    placeholderTextColor='black'
                                                />
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.oneItemContainer}>
                                        <View style={styles.fullContainer}>
                                            <View style={styles.labelContainer}>
                                                <Text style={styles.label}>Phone Number</Text>
                                            </View>
                                            <View style={styles.inputContainer}>
                                                <TextInput
                                                    placeholder="+92 3339461270"
                                                    placeholderTextColor="black"
                                                />
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.oneItemContainer}>
                                        <View style={styles.fullContainer}>
                                            <View style={styles.labelContainer}>
                                                <Text style={styles.label}>Pin your location on the map</Text>
                                            </View>
                                            <View style={styles.inputContainer}>
                                                <TextInput
                                                    placeholder='25°17’52.6"N 55°51’40.4"E'
                                                    placeholderTextColor="black"
                                                />
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.twoItemsContainer}>
                                        <View style={styles.halfContainer}>
                                            <View style={styles.labelContainer}>
                                                <Text style={styles.label}>Region</Text>
                                            </View>
                                            <View style={styles.inputContainer}>
                                                <TextInput
                                                    placeholder="Fedral"
                                                    placeholderTextColor="black"
                                                />
                                            </View>
                                        </View>
                                        <View style={styles.halfContainer}>
                                            <View style={styles.labelContainer}>
                                                <Text style={styles.label}>City</Text>
                                            </View>
                                            <View style={styles.inputContainer}>
                                                <TextInput
                                                    placeholder="Islamabad"
                                                    placeholderTextColor="black"
                                                />
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.twoItemsContainer}>
                                        <View style={styles.halfContainer}>
                                            <View style={styles.labelContainer}>
                                                <Text style={styles.label}>Apt/Villa Number</Text>
                                            </View>
                                            <View style={styles.inputContainer}>
                                                <TextInput
                                                    placeholder="01"
                                                    placeholderTextColor="black"
                                                />
                                            </View>
                                        </View>
                                        <View style={styles.halfContainer}>
                                            <View style={styles.labelContainer}>
                                                <Text style={styles.label}>Building/Villa Name</Text>
                                            </View>
                                            <View style={styles.inputContainer}>
                                                <TextInput
                                                    placeholder="Block 4"
                                                    placeholderTextColor="black"
                                                />
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.oneItemContainer}>
                                        <View style={styles.fullContainer}>
                                            <View style={styles.labelContainer}>
                                                <Text style={styles.label}>Additional Details</Text>
                                            </View>
                                            <View style={styles.inputContainer}>
                                                <TextInput
                                                    placeholder='N/A'
                                                    placeholderTextColor="black"
                                                />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </KeyboardAvoidingView>
                        <View style={styles.addContainer}>
                            <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('AddressList')}
                            style={styles.addBtn}>
                                <Text style={styles.addStyle}>Add new address</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                <BottomTab
                navigationObj={this.props.navigation} 
                />
            </View>
        )
    }
}
/* Export
============================================================================= */
export default EditingAddress