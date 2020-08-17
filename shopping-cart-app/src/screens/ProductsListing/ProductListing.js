import React from 'react';
import {
    View, FlatList
} from 'react-native';
import styles from './styles';
import BottomTab from '../../components/BottomTab/BottomTab';
import ProductCard from '../../ui/ProductCard/ProductCard';
import { BackHeader } from '../../components/Headers/Headers';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native';
import { gql, useQuery } from '@apollo/client';
import { categoryProduct } from '../../apollo/server';
import { Spinner, TextError } from '../../components';

const GET_PRODUCT = gql`${categoryProduct}`

function ProductListing(props) {
    const route = useRoute()
    const navigation = useNavigation()
    const id = route.params?.id ?? null
    const { data: categoryData, loading, error } = useQuery(GET_PRODUCT, { variables: { id: id } })

    if (id === null) {
        navigation.goBack()
        return null
    }
    return (
        <SafeAreaView style={[styles.flex, styles.safeAreaStyle]}>
            <View style={[styles.flex, styles.container]}>
                <BackHeader
                    title='Arts & Crafts'
                    backPressed={() => props.navigation.goBack()}
                />
                {error ? <TextError text={error.message} /> :
                    loading ? <Spinner /> :
                        <FlatList
                            keyExtractor={(item, index) => index.toString()}
                            contentContainerStyle={styles.categoryContainer}
                            showsVerticalScrollIndicator={false}
                            numColumns={2}
                            data={categoryData ? categoryData.productByCategory : []}
                            renderItem={({ item }) =>
                                <ProductCard
                                    styles={styles.productCard}
                                    {...item}
                                />
                            }
                        />
                }
                <BottomTab />
            </View>
        </SafeAreaView>
    );
}

export default ProductListing;