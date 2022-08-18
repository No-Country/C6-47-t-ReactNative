/* eslint-disable react/prop-types */

import { ACTION_OFFSET, CARD } from '../../utils/constants'
import { Animated, Image, Text, View } from 'react-native'
import React, { useCallback } from 'react'

import Choice from '../../components/Choice'
import { LinearGradient } from 'expo-linear-gradient'
import tw from 'twrnc'

// eslint-disable-next-line prettier/prettier
const PostCard = ({ post, isFirst, swipe, tiltSign, ...rest }) => {
  const rotate = Animated.multiply(swipe.x, tiltSign).interpolate({
    inputRange: [-ACTION_OFFSET, 0, ACTION_OFFSET],
    outputRange: ['8deg', '0deg', '-8deg']
  })

  const likeOpacity = swipe.x.interpolate({
    inputRange: [25, ACTION_OFFSET],
    outputRange: [0, 1],
    extrapolate: 'clamp'
  })

  const nopeOpacity = swipe.x.interpolate({
    inputRange: [-ACTION_OFFSET, -25],
    outputRange: [1, 0],
    extrapolate: 'clamp'
  })

  const animatedCardStyle = {
    transform: [...swipe.getTranslateTransform(), { rotate }]
  }

  const renderChoice = useCallback(() => {
    return (
      <>
        <Animated.View
          style={[
            tw`absolute top-10 left-10`,
            { transform: [{ rotate: '-30deg' }] },
            { opacity: likeOpacity }
          ]}
        >
          <Choice type="Like" />
        </Animated.View>
        <Animated.View
          style={[
            tw`absolute top-10 right-10`,
            { transform: [{ rotate: '30deg' }] },
            { opacity: nopeOpacity }
          ]}
        >
          <Choice type="nope" />
        </Animated.View>
      </>
    )
  }, [likeOpacity, nopeOpacity])
  return (
    <Animated.View
      style={[
        tw`absolute top-20 z-50 bg-lime-300 h-100 rounded-${CARD.BORDER_RADIUS}`,
        isFirst && animatedCardStyle
      ]}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      <View>
        <Image
          source={{ uri: post.image }}
          style={tw` w-${CARD.WIDTH} h-${CARD.HEIGHT} rounded-t-${CARD.BORDER_RADIUS}`}
        />
        <Text
          style={tw`absolute bottom-3 left-3 text-[32px] font-semibold text-white z-50`}
        >
          {post.title}
        </Text>
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.9)']}
          style={tw`absolute top-0 left-0 right-0 bottom-0 h-${CARD.HEIGHT} rounded-t-${CARD.BORDER_RADIUS}`}
        />
      </View>
      <Text style={tw`mx-2`}>Este es otro texto</Text>

      {isFirst && renderChoice()}
    </Animated.View>
  )
}

export default PostCard
