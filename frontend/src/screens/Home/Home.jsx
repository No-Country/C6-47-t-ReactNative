import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import { homeStyle } from './home.style'
import { FAB, Searchbar } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { changeCurrentPage } from '../../features/posts/postsSlice'
import { CardComponent } from '../../components/card/card.component'
import { HeaderComponent } from '../../components/header/header.component'
import { LoaderComponent } from '../../components/loader/loader.component'

export default function Home({ navigation }) {
  const dispatch = useDispatch()

  const posts = useSelector((state) => state.posts.posts)
  const postCount = useSelector((state) => state.posts.postCount)
  const loading = useSelector((state) => state.posts.loading)
  const currentPage = useSelector((state) => state.posts.currentPage)

  const [searchQuery, setSearchQuery] = React.useState('')
  const onChangeSearch = (query) => setSearchQuery(query)

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
        {/* <Text>
          Current page: {currentPage} Cantidad de posts: {postCount}
        </Text> */}
        <ScrollView contentContainerStyle={homeStyle.view}>
          {loading ? (
            <LoaderComponent />
          ) : (
            posts &&
            posts.map((post) => (
              <CardComponent
                key={post.id}
                body={post.content}
                comments={post.comments}
                image={post.mediaURL}
                postId={post.id}
                title={post.title}
                user={post.user}
                tag={post.tag}
                style={homeStyle.card}
                likesCount={post.likesCount}
              />
            ))
          )}
        </ScrollView>
      </View>
      {currentPage !== 0 ? (
        <FAB
          style={homeStyle.fabPrev}
          small
          icon="arrow-left"
          onPress={() => {
            if (currentPage > 0) {
              // setCurrentPage(currentPage - 1)
              dispatch(changeCurrentPage(currentPage - 1))
            }
          }}
        />
      ) : null}
      {currentPage <= Math.floor(postCount / 5) - 1 ? (
        <FAB
          style={homeStyle.fabNext}
          small
          icon="arrow-right"
          onPress={() => {
            if (currentPage < Math.floor(postCount / 5))
              // setCurrentPage(currentPage + 1)
              dispatch(changeCurrentPage(currentPage + 1))
          }}
        />
      ) : null}

      <FAB style={homeStyle.fab} icon="plus" onPress={navigateHome} />
    </SafeAreaView>
  )
}
