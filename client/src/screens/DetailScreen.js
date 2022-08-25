// eslint-disable-next-line no-unused-vars
import { Image, Modal, Text, View } from 'react-native'

import React from 'react'
import tw from 'twrnc'
import { useSelector } from 'react-redux'

const DetailScreen = () => {
  const posts = useSelector((state) => state.posts.posts)
  const users = useSelector((state) => state.users.users)

  // eslint-disable-next-line no-console
  console.log(users[0].name)

  return (
    <View style={tw`dark:bg-black flex h-full mx-1 my-20`}>
      <View
        key={posts[0].postId}
        style={tw`flex flex-col items-center justify-center `}
      >
        <Text style={tw`dark:text-white text-3xl`}>
          Detail of {posts[0].title}
        </Text>
        <Image source={{ uri: posts[0].img }} style={tw`h-80 w-85 my-5`} />
        <Text
          style={tw`dark:text-white text-lg bg-slate-50 px-5 py-3 w-85 h-45 rounded-lg`}
        >
          {posts[0].body}
        </Text>
        <Text
          style={tw`dark:text-white text-lg bg-slate-50 px-5 py-3 w-85 h-15 rounded-lg border-2 border-slate-200`}
        >
          Comment N° 1
        </Text>
        <Text
          style={tw`dark:text-white text-lg bg-slate-50 px-5 py-3 w-85 h-15 rounded-lg border-2 border-slate-200`}
        >
          Comment N° 2
        </Text>
        <Text style={tw`dark:text-white py-3 text-2xl`}>
          Created by {users[0].name}
        </Text>
      </View>
    </View>
  )
}

export default DetailScreen
