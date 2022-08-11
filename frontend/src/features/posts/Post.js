import { View, Text, Image } from 'react-native'
import React from 'react'

import tw from 'twrnc'

const Post = (post) => {
  // console.log('Desde Post', post)
  const { title, body, img } = post
  return (
    <View>
      <Text style={tw`dark:text-white text-2xl`}>{title}</Text>
      <Image source={{ uri: img }} style={tw`h-32 w-32`} />
      <Text style={tw`dark:text-white text-lg`}>{body}</Text>
    </View>
  )
}

export default Post
