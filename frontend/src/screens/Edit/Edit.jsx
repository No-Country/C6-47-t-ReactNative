import React, { useState } from 'react'
import { Alert, SafeAreaView, ScrollView, View } from 'react-native'
import { Button, TextInput, Text } from 'react-native-paper'
import { HeaderComponent } from '../../components/header/header.component'
import { createStyle } from './create.style'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useAxios } from '../../utils/customHooks/useAxios'

export default function Edit({ route, navigation }) {
  const postId = useSelector((state) => state.posts.postId)
  const post = useSelector((state) => state.posts.post)

  const access_token = useSelector((state) => state.user.access_token)
  const refresh_token = useSelector((state) => state.user.refresh_token)
  const allTags = useSelector((state) => state.posts.allTags)

  const api = useAxios()

  const [title, setTitle] = useState(post.title)
  const [selectedTag, setSelectedTag] = useState(post.tag.name)
  const [content, setContent] = useState(post.content)
  const [userId, setUserId] = useState(post.user.id)
  const [tagId, setTagId] = useState(post.tag.name)

  const [mediaURL, setMediaURL] = useState(post.mediaURL)

  const [createError, setCreateError] = useState('')
  
  let tagConvert = 0;


  const editPost = () => {
    try {
      if (!title) return Alert.alert('Title is empty')
      if (!content) return Alert.alert('Content is empty')
      if (!tagId) return Alert.alert('tagId is empty')
      if (!mediaURL) return Alert.alert('mediaURL is empty')

      if(tagId !== 'Javascript') tagConvert = 1;
      else tagConvert = 2;

      if (title && content && tagId && mediaURL) {
        // TODO <<<<< Agregar validación de username
        setCreateError('')
        api
          .put(`/post/${post.id}`, { userId, title, content, tagId: tagConvert, mediaURL })
          .then((res) => {
            console.log(post)
            console.log(res.data)
            console.log('editado correctamente')
            navigation.navigate('Home')
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

  return (
    <SafeAreaView style={createStyle.content}>
      <ScrollView>
        <HeaderComponent navigation={navigation} title="Edit" />
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
            {allTags ? (
              <>
                {allTags.map((tag) => {
                  return (
                    <Button
                      key={tag.id}
                      style={
                        tag.name === selectedTag
                          ? createStyle.buttonTextPressed
                          : createStyle.buttonText
                      }
                      onPress={() => {
                        setSelectedTag(tag.name)
                      }}
                    >
                      {tag.name}
                    </Button>
                  )
                })}
              </>
            ) : null}
          </View>
          <TextInput
            onChangeText={(text) => setMediaURL(text)}
            label="MediaURL"
            keyboardType="default"
            value={mediaURL}
          />
          {/* <Button mode="contained" onPress={createPost}>
            Create post
          </Button> */}
        </View>
        <Button mode="contained" onPress={editPost}>
          Edit post
        </Button>
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
