import React, { useState } from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import { Button, TextInput, Text } from 'react-native-paper'
import { HeaderComponent } from '../../components/header/header.component'

export default function Create({navigation}) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [tagId, setTagId] = useState('')
  const [mediaURL, setMediaURL] = useState('')

  return (
    <SafeAreaView>
      <ScrollView>
        <HeaderComponent navigation={navigation} title="Create Post" />
        <View>
          <TextInput label="Title" keyboardType="email-address" value={title} />
          <TextInput label="Content" keyboardType="default" value={content} />
          <TextInput label="TagId" keyboardType="default" value={tagId} />
          <TextInput label="MediaURL" keyboardType="default" value={mediaURL} />
          <Button mode="contained">Create post</Button>
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
