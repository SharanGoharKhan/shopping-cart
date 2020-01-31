import React from 'react';
import {
    View, FlatList
} from 'react-native';
import styles from './styles';
import BottomTab from '../../components/BottomTab/BottomTab';
import { PRODUCTS } from '../../utils/mockData';
import ProductCard from '../../ui/ProductCard/ProductCard';
import { HeaderRightIcon } from '../../components/Headers/Headers';

function ProductListing(props) {
    return (
        <View style={styles.flex}>
            <HeaderRightIcon
                title='Arts & Crafts'
                backPressed={() => props.navigation.goBack()}
                rightIconPresed={()=>console.log('modal open')}
            />
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                data={PRODUCTS}
                renderItem={({ item }) => <ProductCard
                    styles={styles.productCard}
                    cardPressed={()=> props.navigation.navigate('ProductDescription')}
                    item={item} />
                }
            />
            <BottomTab
                navigationObj={props.navigation}
            />
        </View>
    );
}

export default ProductListing;
