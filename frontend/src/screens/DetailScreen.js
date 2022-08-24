import { Image, ScrollView, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { fetchPosts, fetchPostsById } from '../features/posts/postsSlice'
import { useDispatch, useSelector } from 'react-redux'

import PostCard from '../features/posts/PostCard'
import tw from 'twrnc'

const DetailScreen = () => {
  const dispatch = useDispatch()
  const post = useSelector((state) => state.posts.post)
  const users = useSelector((state) => state.users.users)

  useEffect(() => {
    //dispatch(fetchPosts()); // Este es el dispatch que hago para traer todos los posts
    dispatch(fetchPostsById(1)); // Este es el dispatch que hago para traer un post especifico
  }, [])
  
  return (
    <ScrollView style={tw`bg-white`}>
      <View style={tw`dark:bg-black bg-white flex h-full mx-1 my-20`}>
        {post.loading && <Text>Loading...</Text>}
        {!post.loading && post.error ? <Text>Error: Post no encontrado. Razon: {post.error}</Text> : null}
        {!post.loading && post.post
        ? //text-xl	
          <View key={post.post.id}>
            <Text>Titulo: {post.post.title}</Text>
            <Text>ID: {post.post.id}</Text>
            <Text>User ID: {post.post.userId}</Text>
            <Text>Contenido: {post.post.content}</Text>
          </View>
        : null}
        {/* { post.length &&
          <View style={tw`dark:bg-black bg-white  `}>
              <Text>Id del post: {post.id}</Text>
              
          </View>} */}
      </View>
    </ScrollView>
  )
}

export default DetailScreen
