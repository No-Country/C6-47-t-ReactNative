import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Animated, PanResponder, View } from 'react-native'
import { useSelector } from 'react-redux'
import tw from 'twrnc'
import { ACTION_OFFSET, CARD } from '../../utils/constants'
import PostCard from './PostCard'
// import Footer from '../../components/Footer'

const PostsList = () => {
  const postsArray = useSelector((state) => state.posts.posts)

  const swipe = useRef(new Animated.ValueXY()).current
  const tiltSign = useRef(new Animated.Value(1)).current

  //  ....................// ...................

  const [posts, setPosts] = useState(postsArray)

  useEffect(() => {
    if (!posts.length) {
      setPosts(postsArray)
    }
  }, [posts.length, postsArray])

  const removeTopCard = useCallback(() => {
    setPosts((prevState) => prevState.slice(1))
    swipe.setValue({ x: 0, y: 0 })
  }, [swipe])

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, { dx, dy, y0 }) => {
      swipe.setValue({ x: dx, y: dy })
      tiltSign.setValue(y0 > CARD.HEIGHT / 2 ? 1 : -1)
    },
    onPanResponderRelease: (_, { dx, dy }) => {
      const direction = Math.sign(dx)
      const isActionActive = Math.abs(dx) > ACTION_OFFSET

      if (isActionActive) {
        Animated.timing(swipe, {
          duration: 200,
          toValue: {
            x: direction * CARD.OUT_OF_SCREEN,
            y: dy
          },
          useNativeDriver: true
        }).start(removeTopCard)
      } else {
        Animated.spring(swipe, {
          toValue: {
            x: 0,
            y: 0
          },
          useNativeDriver: true,
          friction: 5
        }).start()
      }
    }
  })

  const handleChoice = useCallback(
    (direction) => {
      Animated.timing(swipe.x, {
        toValue: direction * CARD.OUT_OF_SCREEN,
        duration: 400,
        useNativeDriver: true
      }).start(removeTopCard)
    },
    [removeTopCard, swipe.x]
  )

  return (
    <View style={tw`flex-1 items-center`}>
      {/* <View style={tw`flex-1 items-center justify-center z-50`}> */}
      {posts &&
        posts
          .map((post, index) => {
            const isFirst = index === 0
            const dragHandlers = isFirst ? panResponder.panHandlers : {}

            return (
              <PostCard
                key={post.postId}
                post={post}
                isFirst={isFirst}
                swipe={swipe}
                tiltSign={tiltSign}
                handleChoice={handleChoice}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...dragHandlers}
              />
            )
          })
          .reverse()}
      {/* <Footer handleChoice={handleChoice} /> */}
      {/* </View> */}
    </View>
  )
}

export default PostsList
