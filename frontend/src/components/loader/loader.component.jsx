import React from 'react'
import { View } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import { loaderStyle } from './loader.style'

export const LoaderComponent = () => {
  return (
    <View style={loaderStyle.view}>
      <ActivityIndicator size={'large'} style={loaderStyle.activity} />
    </View>
  )
}
