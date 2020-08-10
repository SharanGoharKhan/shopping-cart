import React, { useState } from 'react'
import { View, Modal, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'
import { colors, verticalScale, scale, alignment } from '../../utils'
import { TextDefault } from '../Text'

const saleValues = [
    { title: 'Show all Items', value: false },
    { title: 'Show Sale Items', value: true }
]
const stockValues = [
    { title: 'Show all Items', value: false },
    { title: 'Show In Stock Items', value: true }
]

function FilterModal(props) {
    const [priceSliderValue, setPriceSliderValue] = useState([0, 1000])
    const [sale, setSale] = useState(saleValues[0].value)
    const [stock, setStock] = useState(stockValues[0].value)

    function priceSliderChange(values) {
        setPriceSliderValue(values)
    }
    function renderSaleItems({ title, value }, index) {
        return (
            <TouchableOpacity
                key={index}
                onPress={() => {
                    setSale(value)
                }}
                style={
                    sale === value
                        ? styles.selectedBoolContainer
                        : styles.unselectedBoolContainer
                }>
                <TextDefault
                    textColor={
                        sale === value
                            ? colors.radioColor
                            : colors.fontSecondColor
                    }>
                    {title}
                </TextDefault>
            </TouchableOpacity>
        )
    }
    function renderStockItems({ title, value }, index) {
        return (
            <TouchableOpacity
                key={index}
                onPress={() => {
                    setStock(value)
                }}
                style={
                    stock === value
                        ? styles.selectedBoolContainer
                        : styles.unselectedBoolContainer
                }>
                <TextDefault
                    textColor={
                        stock === value
                            ? colors.radioColor
                            : colors.fontSecondColor
                    }>
                    {title}
                </TextDefault>
            </TouchableOpacity>
        )
    }
    function clearItems() {
        setPriceSliderValue([0, 1000])
        setSale(saleValues[0].value)
        setStock(stockValues[0].value)

        props.setFilters({ onSale: false, inStock: false, min: 0, max: 1000 })
    }
    function applyFilters() {
        props.setFilters({
            onSale: sale,
            inStock: stock,
            min: priceSliderValue[0],
            max: priceSliderValue[1]
        })
        props.onModalToggle()
    }

    return (
        <Modal animationType="slide" transparent={false} visible={props.visible}>
            <SafeAreaView style={styles.flex}>
                <View style={styles.flex}>
                    <View style={[styles.flex, styles.mainContainer]}>
                        <View style={styles.headerContainer}>
                            <View style={styles.headerContents}>
                                <TouchableOpacity
                                    onPress={() => props.onModalToggle()}>
                                    <AntDesign
                                        name="close"
                                        size={20}
                                        color={colors.fontMainColor}
                                    />
                                </TouchableOpacity>
                                <TextDefault textColor={colors.fontMainColor} H4>
                                    {'Filter'}
                                </TextDefault>
                                <TouchableOpacity onPress={clearItems}>
                                    <TextDefault textColor={colors.fontMainColor} H5>
                                        {'Clear'}
                                    </TextDefault>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View
                            style={styles.saleContainer}>
                            <TextDefault textColor={colors.fontMainColor} H5 center>
                                {'Sale Items'}
                            </TextDefault>
                            <View
                                style={styles.itemContainer}>
                                {saleValues.map((value, index) => renderSaleItems(value, index))}
                            </View>
                        </View>
                        <View
                            style={styles.saleContainer}>
                            <TextDefault textColor={colors.fontMainColor} H5 center>
                                {'Stock Items'}
                            </TextDefault>
                            <View
                                style={styles.itemContainer}>
                                {stockValues.map((value, index) =>
                                    renderStockItems(value, index)
                                )}
                            </View>
                        </View>
                        <View style={styles.bottomContainer}>
                            <View
                                style={styles.titleRow}>
                                <TextDefault
                                    textColor={colors.fontMainColor}
                                    H5
                                    center>
                                    {'Price'}
                                </TextDefault>
                                <TextDefault
                                    textColor={colors.fontMainColor}
                                    H5
                                    center>
                                    {'RS'} {priceSliderValue[0]} -{' '}
                                    {'RS'} {priceSliderValue[1]}
                                </TextDefault>
                            </View>
                            <View>
                                <View style={styles.filterContainer}>
                                    <MultiSlider
                                        sliderLength={scale(300)}
                                        trackStyle={styles.trackStyle}
                                        markerStyle={styles.markerStyle}
                                        values={[priceSliderValue[0], priceSliderValue[1]]}
                                        onValuesChange={priceSliderChange}
                                        min={0}
                                        max={1000}
                                        step={10}
                                        allowOverlap
                                        snapped
                                    />
                                </View>
                                <View
                                    style={styles.priceRow}>
                                    <TextDefault textColor={colors.fontSecondColor} H5 center>
                                        {'RS'} {'0'}
                                    </TextDefault>
                                    <TextDefault textColor={colors.fontSecondColor} H5 center>
                                        {'RS'} {'1000'}
                                    </TextDefault>
                                </View>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={applyFilters}
                        style={styles.buttonContainer}>
                        <TextDefault textColor={colors.buttonText} bold H4>
                            {'Apply Filter'}
                        </TextDefault>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </Modal >
    )
}
export default FilterModal
