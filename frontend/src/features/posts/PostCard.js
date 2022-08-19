/* eslint-disable react/prop-types */
import { Text, View, Image, Animated } from 'react-native'
import React, { useCallback } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import tw from 'twrnc'
import Choice from '../../components/Choice'
import { CARD, ACTION_OFFSET } from '../../utils/constants'
import Footer from '../../components/Footer'

// eslint-disable-next-line prettier/prettier
const PostCard = ({
  post,
  isFirst,
  swipe,
  tiltSign,
  handleChoice,
  ...rest
}) => {
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
        tw`absolute top-8 bg-white h-120 rounded-${CARD.BORDER_RADIUS} w-${CARD.WIDTH}`,
        isFirst && animatedCardStyle
      ]}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      <View style={tw``}>
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
      <View style={tw`px-2 bg-white rounded-t-2xl mt-2`}>
        <Text>{post.body}</Text>
        <Text style={tw`mt-2`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. In arcu
          cursus euismod quis viverra nibh cras.
        </Text>
      </View>
      <View style={tw`w-full absolute bottom-1 items-center`}>
        <Footer handleChoice={handleChoice} />
      </View>
      {isFirst && renderChoice()}
    </Animated.View>
  )
}

export default PostCard
