/* eslint-disable no-console */

import { Image, Text, TouchableOpacity, View } from 'react-native'
import tw, { useAppColorScheme, useDeviceContext } from 'twrnc'

import React from 'react'
import { useSelector } from 'react-redux'

// import PostsList from '../features/posts/PostsList'

const HomeScreen = () => {
  const posts = useSelector((state) => state.posts.posts)
  useDeviceContext(tw, { withDeviceColorScheme: false })
  const [colorScheme, toggleColorScheme, setColorScheme] = useAppColorScheme(tw)
  //   const [toggleColorScheme] = useAppColorScheme(tw)
  console.log(posts)
  return (
    <View style={tw`dark:bg-black flex h-full items-center justify-center `}>
      {posts.map((post) => (
        <View
          key={post.postId}
          style={tw`flex flex-col items-center justify-center`}
        >
          <Text style={tw`dark:text-white text-2xl`}>{post.title}</Text>
          <Image source={{ uri: post.img }} style={tw`h-60 w-60`} />
          <Text style={tw`dark:text-white text-lg`}>{post.body}</Text>
        </View>
      ))}
      {/* <View> */}
      {/* <PostsList /> */}
      {/* </View> */}
      <TouchableOpacity
        style={tw`bg-sky-400 p-2 rounded-lg mt-5`}
        onPress={toggleColorScheme}
      >
        <Text style={tw`dark:text-white`}>Switch Color Scheme</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen
