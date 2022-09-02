import React from 'react'
import { Image, SafeAreaView, ScrollView, View } from 'react-native'
import { detailStyle } from './Detail.style'
import { HeaderComponent } from '../../components/header/header.component'
import { Text, TextInput, Button } from 'react-native-paper'
import { useSelector } from 'react-redux'
import { LoaderComponent } from '../../components/loader/loader.component'

export default function Detail({ route, navigation }) {
  const { id, user } = route.params

  const post = useSelector((state) => state.posts.post)
  const loading = useSelector((state) => state.posts.loading)
  const postId = useSelector((state) => state.posts.postId)

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
            post.id && (
              <View style={detailStyle.postView}>
                <Text style={detailStyle.title}>{post.title}</Text>
                <Button style={detailStyle.button}>
                  <Text style={detailStyle.buttonText}>{post.tag.name}</Text>
                </Button>
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
                <Text style={detailStyle.likes}>
                  <TextInput.Icon
                    name="arrow-up-bold-outline"
                    style={detailStyle.likesArrow}
                  />
                  {post.likesCount}
                </Text>
                <Text style={detailStyle.commentContainer}>Comentarios:</Text>
                {post.comments
                  ? post.comments.map((comment) => (
                      <Text key={comment.id} style={detailStyle.comment}>
                        {comment.content}
                      </Text>
                    ))
                  : null}
              </View>
            )
          )}
        </ScrollView>
      </View>
      {/* <FAB style={detailStyle.fab} icon="plus" onPress={navigateHome} /> */}
    </SafeAreaView>
  )
}
