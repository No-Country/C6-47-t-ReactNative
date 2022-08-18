import { Image, ScrollView, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { fetchPosts, fetchPostsById } from '../features/posts/postsSlice'
import { useDispatch, useSelector } from 'react-redux'

import PostCard from '../features/posts/PostCard'
import tw from 'twrnc'

const DetailScreen = () => {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.posts)
  const users = useSelector((state) => state.users.users)
  
  useEffect(() => {
    dispatch(fetchPosts()); // Este es el dispatch que hago para traer todos los posts
    dispatch(fetchPostsById(1)); // Este es el dispatch que hago para traer un post especifico
  }, [])

  return (
    <ScrollView style={tw`bg-white`}>
      <View style={tw`dark:bg-black bg-white flex h-full mx-1 my-20`}>
        {posts.loading && <Text>Loading...</Text>}
        {!posts.loading && posts.error ? <Text>Error: Post no encontrado. Razon: {posts.error}</Text> : null}
        {!posts.loading && posts.post 
        ? //text-xl	
          <View key={posts.post.id} style={tw`dark:bg-black bg-white  `}>
            <Text style={tw`dark:bg-black text-xl	`}>Titulo: {posts.post.title}</Text>
            <Text>ID: {posts.post.id}</Text>
            <Text>User ID: {posts.post.userId}</Text>
            <Text>Contenido: {posts.post.content}</Text>
          </View>
        : null}
      </View>
    </ScrollView>
  )
}

export default DetailScreen
/*
const posts = useSelector((state) => state.posts)

{!posts.loading && posts.posts.length 
        ? posts.posts.map((post) => (
          <View key={post.id}>
            <Text>Titulo: {post.title}</Text>
            <Text>ID: {post.id}</Text>
            <Text>User ID: {post.userId}</Text>
            <Text>Contenido: {post.content}</Text>
          </View>
        )) : null}
 */