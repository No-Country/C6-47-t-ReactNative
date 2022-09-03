import React, { useEffect, useState } from 'react'
import { Alert, SafeAreaView, ScrollView, View } from 'react-native'
import { Button, TextInput, Text } from 'react-native-paper'
import { HeaderComponent } from '../../components/header/header.component'
import { createStyle } from './create.style'
import { useDispatch, useSelector } from 'react-redux'
import { useAxios } from '../../utils/customHooks/useAxios'
import { cardStyle } from '../../components/card/card.style'
import { changeCurrentPage, setLoading } from '../../features/posts/postsSlice'

export default function Create({ navigation }) {
  const api = useAxios()
  const dispatch = useDispatch()

  const allTags = useSelector((state) => state.posts.allTags)
  const currentPage = useSelector((state) => state.posts.currentPage)
  const [title, setTitle] = useState()
  const [content, setContent] = useState()
  const [tagId, setTagId] = useState()
  const [mediaURL, setMediaURL] = useState()

  const [createError, setCreateError] = useState('')

  const createPost = () => {
    try {
      if (!title) return Alert.alert('Title is empty')
      if (title.length < 5)
        return Alert.alert('Title should have at least 5 characters long')
      if (!content) return Alert.alert('Content is empty')
      if (content.length < 5)
        return Alert.alert('Content should have at least 5 characters long')
      if (!tagId) return Alert.alert('Please select a tag')
      if (!mediaURL) return Alert.alert('mediaURL is empty')

      if (title && content && tagId && mediaURL) {
        setCreateError('')
        api
          .post('/post', { title, content, tagId, mediaURL })
          .then((res) => {
            console.log(res.data)
            navigation.navigate('Home')
            dispatch(setLoading(false))
            dispatch(changeCurrentPage(null))
            dispatch(changeCurrentPage(currentPage))
            Alert.alert('Post created, please refresh the home page.')
          })
          .catch((err) => console.log(err.response))
      } else {
        Alert.alert('All fields are necesary')
        //setLoginError('Ingrese todos los campos por favor.')
      }
    } catch (error) {
      console.log(error)
      Alert.alert('Unexpected error. Call the administrator.')
      //setLoginError('Error inesperado')
    }
  }

  const changeTagId = (id) => {
    setTagId(id)
  }

  return (
    <SafeAreaView style={createStyle.content}>
      <ScrollView>
        <HeaderComponent navigation={navigation} title="Create Post" />
        <View>
          <TextInput
            onChangeText={(text) => setTitle(text)}
            label="Title"
            keyboardType="email-address"
            value={title}
          />
          <TextInput
            onChangeText={(text) => setContent(text)}
            label="Content"
            keyboardType="default"
            value={content}
          />
          <View style={createStyle.tagList}>
            <Text>Tags</Text>
            {allTags &&
              allTags.map((tag) => {
                return (
                  <Button
                    style={
                      tag.id === tagId
                        ? cardStyle.button
                        : cardStyle.buttonPressed
                    }
                    key={tag.id}
                    onPress={() => {
                      changeTagId(tag.id)
                    }}
                  >
                    {tag.name}
                  </Button>
                )
              })}
          </View>
          <TextInput
            onChangeText={(text) => setMediaURL(text)}
            label="MediaURL"
            keyboardType="default"
            value={mediaURL}
          />
          <Button mode="contained" onPress={createPost}>
            Create post
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

/*
    userId: number,
    title:string,
    content:string,
    tagId:number
    mediaURL: string
*/
