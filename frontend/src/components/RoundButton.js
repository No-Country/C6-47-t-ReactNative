import { Animated, TouchableWithoutFeedback } from 'react-native'
import React, { useCallback, useRef } from 'react'
import { FontAwesome } from '@expo/vector-icons'
import tw from 'twrnc'

// eslint-disable-next-line react/prop-types
const RoundButton = ({ name, size, color, onPress }) => {
  const scale = useRef(new Animated.Value(1)).current

  const animateScale = useCallback(
    (newValue) => {
      Animated.spring(scale, {
        toValue: newValue,
        friction: 4,
        useNativeDriver: true
      }).start()
    },
    [scale]
  )
  return (
    <TouchableWithoutFeedback
      onPressIn={() => animateScale(0.8)}
      delayPressIn={0}
      onPressOut={() => {
        animateScale(1)
        onPress()
      }}
      delayPressOut={110}
    >
      <Animated.View
        style={[
          tw`w-12 h-12 bg-white rounded-full items-center justify-center`,
          { transform: [{ scale }] }
        ]}
      >
        <FontAwesome name={name} size={size} color={color} />
      </Animated.View>
    </TouchableWithoutFeedback>
  )
}

export default RoundButton
