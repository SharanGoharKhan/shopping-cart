import React from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'react-native';
import styles from './styles';
import Dropdown from '../../ui/Dropdowns/Dropdown';
import SearchBar from '../../ui/SearchBar/SearchBar';
import CategoryCard from './CategoryCard/CategoryCard';
import BottomTab from '../../components/BottomTab/BottomTab';

const CATEGORIES = [
    {
        value: 'Arts & Crafts',
    },
    {
        value: 'Event Ideas',
    },
    {
        value: 'Food & Drinks',
    },
    {
        value: 'Accessories',
    },
    {
        value: 'Fashion'

    },
    {
        value: 'Health & Beauty'
    }

];

class Search extends React.Component {
    render() {
        return (
            <React.Fragment>
                <View style={styles.flex}>
                    <View style={styles.container}>
                        <View style={[styles.body]}>
                            <View style={[styles.header]}>
                                <Text style={styles.header_text}>Search  In  </Text>
                                <Dropdown items={CATEGORIES} />
                            </View>
                            <View style={[styles.main]}>
                                <View style={styles.searchBarContainer}>
                                    <SearchBar onPress={() => this.props.navigation.navigate('SearchResult')} placeholderText="What are you looking for?" />
                                </View>
                                <View style={styles.mainBodyContainer}>
                                    <View style={styles.mainBody}>
                                        <View style={styles.mixed_text}>
                                            <Text style={styles.text}>Our </Text>
                                            <Text style={styles.colored_text}>1342 </Text>
                                            <Text style={styles.text}>Products are distributed in these categories</Text>
                                        </View>

                                        <View>
                                            <View style={styles.row}>
                                                <CategoryCard
                                                    onPress={() => this.props.navigation.navigate('ProductListing')}
                                                    text="Accessories"
                                                />
                                                <CategoryCard
                                                    onPress={() => this.props.navigation.navigate('ProductListing')}
                                                    text="Arts & Crafts"
                                                />
                                            </View>
                                            <View style={styles.row}>
                                                <CategoryCard
                                                    onPress={() => this.props.navigation.navigate('ProductListing')}
                                                    text="Event Ideas"
                                                />
                                                <CategoryCard text="Fashion" />
                                            </View>
                                            <View style={styles.row}>
                                                <CategoryCard
                                                    onPress={() => this.props.navigation.navigate('ProductListing')}
                                                    text="Food & Drinks"
                                                />
                                                <CategoryCard
                                                    onPress={() => this.props.navigation.navigate('ProductListing')}
                                                    text="Health & Beauty"
                                                />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.footer}>
                            </View>
                        </View>
                    </View>
                </View>
                <BottomTab
                    navigationObj={this.props.navigation}
                />
            </React.Fragment>
        );
    }
}

export default Search;
