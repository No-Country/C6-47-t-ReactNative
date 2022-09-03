import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import { homeStyle } from './home.style'
import { Button, FAB, Searchbar, Text } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import {
  changeCurrentPage,
  changeCurrentTagFilter,
  changeCurrentWordFilter
} from '../../features/posts/postsSlice'
import { CardComponent } from '../../components/card/card.component'
import { HeaderComponent } from '../../components/header/header.component'
import { LoaderComponent } from '../../components/loader/loader.component'
import { cardStyle } from '../../components/card/card.style'

export default function Home({ navigation }) {
  const dispatch = useDispatch()

  const posts = useSelector((state) => state.posts.posts)
  const tagFilter = useSelector((state) => state.posts.tagFilter)
  const postCount = useSelector((state) => state.posts.postCount)
  const loading = useSelector((state) => state.posts.loading)
  const currentPage = useSelector((state) => state.posts.currentPage)
  const allTags = useSelector((state) => state.posts.allTags)

  const [searchQuery, setSearchQuery] = React.useState('')
  const onChangeSearch = (query) => {
    if (!query) {
      dispatch(changeCurrentWordFilter(''))
    }
    setSearchQuery(query)
  }

  const navigateHome = () => {
    navigation.navigate('Create')
  }

  const searchPostByWord = () => {
    dispatch(changeCurrentWordFilter(searchQuery))
  }

  const searchPostByTag = (tag) => {
    dispatch(changeCurrentTagFilter(tag))
  }

  const cancelSearchByTag = () => {
    dispatch(changeCurrentTagFilter(''))
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
          onEndEditing={searchPostByWord}
        />
        <View style={homeStyle.tagList}>
          {allTags ? (
            <>
              {allTags.map((tag) => {
                return (
                  <Button
                    key={tag.id}
                    style={ tag.name === tagFilter ? homeStyle.buttonTextPressed : homeStyle.buttonText}
                    onPress={() => {
                      searchPostByTag(tag.name);
                    }}
                  >
                    {tag.name}
                  </Button>
                )
              })}
              <Button onPress={cancelSearchByTag} style={homeStyle.close} >X</Button>
            </>
          ) : null}
        </View>
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
