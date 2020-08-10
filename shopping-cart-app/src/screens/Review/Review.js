import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'
import Spinner from '../../components/Spinner/Spinner'
import styles from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import StarRating from 'react-native-star-rating'
import TextDefault from '../../components/Text/TextDefault/TextDefault'
import { EvilIcons } from '@expo/vector-icons'
import { scale } from '../../utils/scaling'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../../utils'
import { BackHeader } from '../../components'

function Review() {
  const navigation = useNavigation()
  const [rating, setRating] = useState(0)
  const [description, setDescription] = useState('')
  const loadingMutation = false

  function onFinishRating(rating) {
    setRating(rating)
  }

  function onChangeText(description) {
    setDescription(description)
  }

  return (
    <SafeAreaView style={[styles.flex, styles.mainBackground]}>
      <View style={[styles.flex, styles.mainBackground]}>
        <BackHeader
          title="Review"
          backPressed={() => navigation.goBack()} />

        <View style={styles.reviewTextContainer}>
          <View style={styles.reviewTextSubContainer}>
            <View style={styles.reviewTextContainerText}>
              <TextDefault textColor={colors.fontMainColor} H4 bold>
                {'Write Review'}
              </TextDefault>
            </View>
            <View style={styles.reviewTextContainerImage}>
              <EvilIcons
                name="pencil"
                size={scale(35)}
                color={colors.iconColor}
              />
            </View>
          </View>
        </View>
        <View style={styles.ratingContainer}>
          <View style={styles.ratingSubContainer}>
            <StarRating
              emptyStarColor={colors.startColor}
              fullStarColor={colors.startOutlineColor}
              disabled={false}
              maxStars={5}
              rating={rating}
              selectedStar={onFinishRating}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputSubContainer}>
            <TextInput
              style={[
                styles.textinput,
                { color: colors.fontSecondColor }
              ]}
              placeholderTextColor={colors.fontThirdColor}
              onChangeText={onChangeText}
              placeholder={'Write a review'}
            />
          </View>
        </View>
        <View style={styles.btnContainer}>
          <View style={styles.btnSubContainer}>
            {loadingMutation && <Spinner />}
            {!loadingMutation && (
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.btnTouch}>
                <TextDefault textColor={colors.buttonText} H4 bold>
                  {'Submit'}
                </TextDefault>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
export default Review
