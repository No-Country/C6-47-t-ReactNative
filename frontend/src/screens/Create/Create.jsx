import React, { useState } from 'react'
import { Alert, SafeAreaView, ScrollView, View } from 'react-native'
import { Button, TextInput, Text } from 'react-native-paper'
import { HeaderComponent } from '../../components/header/header.component'
import { createStyle } from './create.style'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useAxios } from '../../utils/customHooks/useAxios'

export default function Create({ navigation }) {
  const access_token = useSelector((state) => state.user.access_token)
  const refresh_token = useSelector((state) => state.user.refresh_token)

  const api = useAxios()

  const [title, setTitle] = useState('Post de ejemplo')
  const [content, setContent] = useState('Contenido de ejemplo')
  const [tagId, setTagId] = useState('1')
  const [mediaURL, setMediaURL] = useState('https://picsum.photos/200')
  let userId = 1

  const createPost = () => {
    try {
      if (title && content && tagId && mediaURL) {
        // TODO <<<<< Agregar validación de username
        //setLoginError('')
        // axios
        //   .post(
        //     'http://186.182.43.178:8080/post',
        //     { userId, title, content, tagId, mediaURL },
        //     {
        //       withCredentials: true,
        //       headers: { "x-access-token": access_token }
        //     }
        //   )
        api
          .post('/post', { userId, title, content, tagId, mediaURL })
          .then((res) => {
            console.log(res.data)
            navigation.navigate('Home')
          })
          .catch((err) => console.log(err.response))
      } else {
        Alert.alert('ingrese todos los campos por favor')
        //setLoginError('Ingrese todos los campos por favor.')
      }
    } catch (error) {
      console.log(error)
      Alert.alert('Error inesperado')
      //setLoginError('Error inesperado')
    }
  }

  return (
    <SafeAreaView style={createStyle.content}>
      <ScrollView>
        <HeaderComponent navigation={navigation} title="Create Post" />
        <View>
          <TextInput label="Title" keyboardType="email-address" value={title} />
          <TextInput label="Content" keyboardType="default" value={content} />
          <TextInput label="TagId" keyboardType="default" value={tagId} />
          <TextInput label="MediaURL" keyboardType="default" value={mediaURL} />
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
