import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import SearchBar from '../../ui/SearchBar/SearchBar';
import CategoryCard from './CategoryCard/CategoryCard';
import { BottomTab, TextDefault, BackHeader } from '../../components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../utils';

function Search(props) {
    return (
        <SafeAreaView style={styles.flex}>
            <View style={[styles.flex, styles.mainContainer]}>
                <BackHeader
                    title="Search"
                    backPressed={() => props.navigation.goBack()} />
                <View style={styles.container}>
                    <View style={[styles.body]}>
                        <View style={[styles.main]}>
                            <View style={styles.searchBarContainer}>
                                <SearchBar onPress={() => props.navigation.navigate('SearchResult')} placeholderText="What are you looking for?" />
                            </View>
                            <View style={styles.mainBodyContainer}>
                                <View style={styles.mixed_text}>
                                    <TextDefault textColor={colors.fontMainColor}>
                                        {'Our'}
                                        <TextDefault textColor={colors.fontBrown}>
                                            {' 1342 '}
                                        </TextDefault>
                                        {'Products are distributed in these categories'}
                                    </TextDefault>
                                </View>
                                <View style={styles.mainBody}>
                                    <View>
                                        <View style={styles.row}>
                                            <CategoryCard
                                                onPress={() => props.navigation.navigate('ProductListing')}
                                                text="Accessories"
                                            />
                                            <CategoryCard
                                                onPress={() => props.navigation.navigate('ProductListing')}
                                                text="Arts & Crafts"
                                            />
                                        </View>
                                        <View style={styles.row}>
                                            <CategoryCard
                                                onPress={() => props.navigation.navigate('ProductListing')}
                                                text="Event Ideas"
                                            />
                                            <CategoryCard text="Fashion" />
                                        </View>
                                        <View style={styles.row}>
                                            <CategoryCard
                                                onPress={() => props.navigation.navigate('ProductListing')}
                                                text="Food & Drinks"
                                            />
                                            <CategoryCard
                                                onPress={() => props.navigation.navigate('ProductListing')}
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
                navigationObj={props.navigation}
            />
        </SafeAreaView>
    );
}

export default Search;
