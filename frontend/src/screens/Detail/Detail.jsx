import React, { useEffect } from 'react'
import { Image, SafeAreaView, ScrollView, View } from 'react-native'
import { detailStyle } from './Detail.style'
import { HeaderComponent } from '../../components/header/header.component'
import { FAB, Text } from 'react-native-paper'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPostsById } from '../../features/posts/postsSlice'
import { LoaderComponent } from '../../components/loader/loader.component'

export default function Detail({ route, navigation }) {
  const { id, user } = route.params

  const post = useSelector((state) => state.posts.post)
  const loading = useSelector((state) => state.posts.loading)
  const postId = useSelector((state) => state.posts.postId)

  const dispatch = useDispatch()

  // const [searchQuery, setSearchQuery] = React.useState('')
  // const onChangeSearch = (query) => setSearchQuery(query)

  // useEffect(() => {
  //   dispatch(fetchPostsById(id)) // Este es el dispatch que hago para traer un post especifico
  // }, [])

  const navigateHome = () => {
    navigation.navigate('Create')
  }

  return (
    <SafeAreaView style={detailStyle.content}>
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={detailStyle.view}>
          <HeaderComponent navigation={navigation} title="Detail" />
          {loading ? (
            <LoaderComponent />
          ) : (
            post && (
              <View style={detailStyle.postView}>
                <Text style={detailStyle.title}>{post.title}</Text>
                <Text style={detailStyle.tagId}>
                  Lista de tags: {post.tagId}
                </Text>
                <Image
                  style={detailStyle.image}
                  source={{
                    uri: post.mediaURL
                  }}
                />
                <Text style={detailStyle.content}>{post.content}</Text>
                <Text style={detailStyle.createdBy}>
                  Created by{' '}
                  <Text style={detailStyle.username}>{user.username}</Text>
                </Text>
                <Text style={detailStyle.likes}>likes: {post.likes}</Text>
              </View>
            )
          )}
        </ScrollView>
      </View>
      {/* <FAB style={detailStyle.fab} icon="plus" onPress={navigateHome} /> */}
    </SafeAreaView>
  )
}
