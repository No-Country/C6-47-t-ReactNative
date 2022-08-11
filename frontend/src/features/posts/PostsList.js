import { View, Text, Image } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import tw from 'twrnc'
import Post from './Post'

const PostsList = () => {
  const posts = useSelector((state) => state.posts.posts)

  return (
    <View>
      {posts.map((post) => (
        <Post post={post} key={post.postId} />
        // <View
        //   key={post.postId}
        //   style={tw`flex flex-col items-center justify-center`}
        // >
        //   <Text style={tw`dark:text-white text-2xl`}>{post.title}</Text>
        //   <Image source={{ uri: post.img }} style={tw`h-32 w-32`} />
        //   <Text style={tw`dark:text-white text-lg`}>{post.body}</Text>
        // </View>
      ))}
    </View>
  )
}

export default PostsList
