import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './styles';
import CategoryCard from '../../ui/CategoryCard/CategoryCard';
import { BottomTab, BackHeader } from '../../components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { gql, useQuery } from '@apollo/client';
import { categories } from '../../apollo/server'

const CATEGORIES = gql`${categories}`


function Category(props) {
    const { data: categoryData } = useQuery(CATEGORIES)

    return (
        <SafeAreaView style={[styles.flex, styles.safeAreaStyle]}>
            <View style={[styles.grayBackground, styles.flex]}>
                <BackHeader
                    title="Categories"
                    backPressed={() => props.navigation.goBack()} />
                <FlatList
                    style={styles.flex}
                    contentContainerStyle={styles.categoryContainer}
                    data={categoryData ? categoryData.categories : []}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    renderItem={({ item, index }) => (
                        <CategoryCard
                            style={styles.spacer}
                            key={index}
                            cardLabel={item.title}
                            id={item._id}
                        />
                    )
                    }
                />
                <BottomTab />
            </View>
        </SafeAreaView>
    );
}
export default Category;