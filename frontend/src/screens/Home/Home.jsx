import React, { useEffect } from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import { homeStyle } from './home.style'
import { FAB, Searchbar } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../../features/posts/postsSlice'
import { CardComponent } from '../../components/card/card.component'
import { HeaderComponent } from '../../components/header/header.component'

export default function Home({ navigation }) {
  const dispatch = useDispatch()

  const posts = useSelector((state) => state.posts.posts)
  const users = useSelector((state) => state.users.users)
  const [searchQuery, setSearchQuery] = React.useState('')
  const onChangeSearch = (query) => setSearchQuery(query)

  useEffect(() => {
    dispatch(fetchPosts()) // Este es el dispatch que hago para traer todos los posts
    //dispatch(fetchPostsById(100)) // Este es el dispatch que hago para traer un post especifico
  }, [])

  const navigateHome = () => {
    navigation.navigate('Create')
  }

  return (
    <SafeAreaView style={homeStyle.content}>
      <View style={{ flex: 1 }}>
        <HeaderComponent navigation={navigation} title="Home" />
        <Searchbar
          style={homeStyle.searchBar}
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        <ScrollView contentContainerStyle={homeStyle.view}>
          {posts &&
            posts.map((post) => (
              <CardComponent
                key={post.id}
                body={post.content}
                comments={post.comments}
                image={post.mediaURL}
                postId={post.id}
                title={post.title}
                userId={post.userId}
                style={homeStyle.card}
              />
            ))}
        </ScrollView>
      </View>
      <FAB style={homeStyle.fab} icon="plus" onPress={navigateHome} />
    </SafeAreaView>
  )
}
