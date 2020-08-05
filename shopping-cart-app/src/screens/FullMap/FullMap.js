import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import * as Location from 'expo-location'
import * as Permission from 'expo-permissions'
import styles from './styles'
import { useNavigation, useRoute } from '@react-navigation/native'
import { colors } from '../../utils'
import { FlashMessage, TextDefault, BackHeader } from '../../components'

const LATITUDE = 33.6844
const LONGITUDE = 73.0479
const LATITUDE_DELTA = 0.0022
const LONGITUDE_DELTA = 0.0021

export default function FullMap() {
  const navigation = useNavigation()
  const route = useRoute()
  const latitude = route.params?.latitude ?? LATITUDE
  const longitude = route.params?.longitude ?? LONGITUDE

  const [mapMargin, setMapMargin] = useState(1)
  const [region, setRegion] = useState({
    latitude: latitude,
    latitudeDelta: LATITUDE_DELTA,
    longitude: longitude,
    longitudeDelta: LONGITUDE_DELTA
  })
  const backScreen = route.params?.currentScreen ?? null

  useEffect(() => {
    if (backScreen === 'NewAddress')
      _getLocationAsync()
  }, [backScreen])
  function setMargin() {
    setMapMargin(0)
  }

  async function _getLocationAsync() {
    const { status } = await Permission.askAsync(Permission.LOCATION)
    if (status === 'granted') {
      const location = await Location.getCurrentPositionAsync({
        enableHighAccuracy: true
      })
      const loc = {
        latitude: parseFloat(location.coords.latitude),
        latitudeDelta: LATITUDE_DELTA,
        longitude: parseFloat(location.coords.longitude),
        longitudeDelta: LONGITUDE_DELTA
      }
      setRegion(loc)
    } else {
      FlashMessage({
        message: 'Location permission not granted'
      })
    }
  }

  function onSave() {
    if (backScreen === 'NewAddress') {
      navigation.navigate('NewAddress', { regionChange: region })
    } else if (backScreen === 'EditAddress') {
      navigation.navigate('EditAddress', { regionChange: region })
    }
  }

  return (
    <SafeAreaView style={styles.flex}>
      <View style={[styles.flex, styles.background]}>
        <BackHeader
          title="Map"
          backPressed={() => navigation.goBack()} />
        <MapView
          style={[styles.container, { marginTop: mapMargin }]}
          initialRegion={region}
          loadingEnabled={true}
          loadingBackgroundColor={colors.themeBackground}
          loadingIndicatorColor={colors.spinnerColor}
          onRegionChangeComplete={setRegion}
          showsUserLocation={true}
          provider={PROVIDER_GOOGLE}
          showsMyLocationButton
          onMapReady={setMargin}
          showsTraffic={false}
          rotateEnabled={false}>
          <Marker
            coordinate={{
              latitude: region.latitude,
              longitude: region.longitude
            }}></Marker>
        </MapView>

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.button}
          onPress={onSave}>
          <TextDefault textColor={colors.buttonText} H4 bold>
            Save
          </TextDefault>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
