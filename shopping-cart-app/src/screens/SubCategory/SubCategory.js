import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './styles';
import { BottomTab, BackHeader, TextDefault, Spinner, TextError } from '../../components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { gql, useQuery } from '@apollo/client';
import { subCategories } from '../../apollo/server'
import { colors } from '../../utils';
import { useRoute, useNavigation } from '@react-navigation/native';
import SubCategoryCard from '../../ui/SubCategoryCard/SubCategoryCard';

const SUB_CATEGORIES = gql`${subCategories}`


function SubCategory(props) {
    const route = useRoute()
    const navigation = useNavigation()
    const id = route.params?.id ?? null
    const { data: categoryData, loading, error } = useQuery(SUB_CATEGORIES, { variables: { id: id } })
    if (id === null) {
        navigation.goBack()
        return null
    }

    function renderHeader() {
        return (
            <View style={styles.headerText}>
                <TextDefault numberOfLines={2} textColor={colors.fontBlue} center H4 bold>
                    {categoryData?.subCategoriesById[0]?.category?.title ?? 'Sub Catergories'}
                </TextDefault>
            </View>
        )
    }

    return (
        <SafeAreaView style={[styles.flex, styles.safeAreaStyle]}>
            <View style={[styles.grayBackground, styles.flex]}>
                <BackHeader
                    title="Sub Categories"
                    backPressed={() => props.navigation.goBack()} />
                {error ? <TextError text='Network problem' /> :
                    loading ? <Spinner /> :
                        <>
                            {renderHeader()}
                            <FlatList
                                style={styles.flex}
                                contentContainerStyle={styles.categoryContainer}
                                data={categoryData ? categoryData.subCategoriesById : []}
                                keyExtractor={(item, index) => index.toString()}
                                showsVerticalScrollIndicator={false}
                                numColumns={2}
                                renderItem={({ item, index }) => (
                                    <SubCategoryCard
                                        style={styles.cardStyle}
                                        key={index}
                                        data={item}
                                    />
                                )}
                            />
                        </>
                }
                <BottomTab />
            </View>
        </SafeAreaView>
    );
}
export default SubCategory;