import React, { useEffect } from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import { detailStyle } from './Detail.style'
import { HeaderComponent } from '../../components/header/header.component'
import { FAB, Text } from 'react-native-paper'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPostsById } from '../../features/posts/postsSlice'
import { LoaderComponent } from '../../components/loader/loader.component'

export default function Detail({ route, navigation }) {
  const { id } = route.params

  const post = useSelector((state) => state.posts.post)
  const loading = useSelector((state) => state.posts.loading)

  const dispatch = useDispatch()

  // const [searchQuery, setSearchQuery] = React.useState('')
  // const onChangeSearch = (query) => setSearchQuery(query)

  useEffect(() => {
    dispatch(fetchPostsById(id)) // Este es el dispatch que hago para traer un post especifico
  }, [])

  const navigateHome = () => {
    navigation.navigate('Create')
  }

  return (
    <SafeAreaView style={detailStyle.content}>
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={detailStyle.view}>
          <HeaderComponent navigation={navigation} title="Detail" />
          { loading 
          ? <LoaderComponent />
          : post && (
              <View>
                <Text>title: {post.title}</Text>
                <Text>id: {post.id}</Text>
                <Text>content: {post.content}</Text>
                <Text>likes: {post.likes}</Text>
                <Text>mediaURL: {post.mediaURL}</Text>
                <Text>tagId: {post.tagId}</Text>
                <Text>userId: {post.userId}</Text>
              </View>
            )
          }
        </ScrollView>
      </View>
      <FAB style={detailStyle.fab} icon="plus" onPress={navigateHome} />
    </SafeAreaView>
  )
}

{
  /* posts.map((post) => (
              <CardComponent
                key={post.postId}
                body={post.body}
                comments={post.comments}
                image={post.image}
                postId={post.postId}
                title={post.title}
                userId={post.userId}
                style={homeStyle.card}
              />
            ))} */
}
