import React, { useEffect, useState } from 'react'
import { Alert, Image, SafeAreaView, ScrollView, View } from 'react-native'
import { detailStyle } from './Detail.style'
import { HeaderComponent } from '../../components/header/header.component'
import { Text, TextInput, Button, Portal, Modal } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { LoaderComponent } from '../../components/loader/loader.component'
import { useAxios } from '../../utils/customHooks/useAxios'
import { Link } from '@react-navigation/native'
import {
  restLikescount,
  setCommentPost,
  setLoading,
  sumLikesCount
} from '../../features/posts/postsSlice'

export default function Detail({ route, navigation }) {
  const { id, user } = route.params

  const dispatch = useDispatch()
  const api = useAxios()

  const post = useSelector((state) => state.posts.post)
  const loading = useSelector((state) => state.posts.loading)
  const postId = useSelector((state) => state.posts.postId)

  const [liked, setLiked] = useState(false)
  const [comment, setComment] = useState('')

  const onChangeComment = (value) => {
    setComment(value)
  }

  const commentPost = () => {
    dispatch(setLoading(true))
    api
      .post(`/comment/${postId}`, { content: comment })
      .then((res) => {
        dispatch(setLoading(false))
        dispatch(setCommentPost({ postId, content: comment }))
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
        dispatch(setLoading(false))
      })
  }

  const navigateHome = () => {
    navigation.navigate('Create')
  }

  useEffect(() => {
    dispatch(setLoading(true))
    api
      .get(`/like/${postId}`)
      .then((res) => {
        setLiked(res.data.liked)
        dispatch(setLoading(false))
      })
      .catch((err) => {
        dispatch(setLoading(false))
        console.log(err)
      })
  }, [])

  const likePost = () => {
    api
      .post(`/like/${postId}`)
      .then((res) => {
        dispatch(sumLikesCount(postId))
        dispatch(setLoading(false))
        setLiked(true)
        Alert.alert(res.data.message)
      })
      .catch((error) => {
        dispatch(setLoading(false))
        Alert.alert('Unexpected error')
      })
  }

  const dislikePost = () => {
    api
      .post(`/dislike/${postId}`)
      .then((res) => {
        dispatch(restLikescount(postId))
        dispatch(setLoading(false))
        setLiked(false)
        Alert.alert(res.data.message)
      })
      .catch((error) => {
        dispatch(setLoading(false))
        Alert.alert('Unexpected errorrr')
      })
  }

  //post && console.log(post)
  const [visible, setVisible] = React.useState(false)

  const showModal = () => setVisible(true)
  const hideModal = () => setVisible(false)
  const containerStyle = { backgroundColor: 'white', padding: 20 }

  return (
    <SafeAreaView style={detailStyle.content}>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <Text style={detailStyle.textAlert}>
            ¿Are you sure you wan't to delete this post?
          </Text>
          <Text>
            Alert: This action is irreversible. The post would be launched to a blach hole and will cross to another dimension.
          </Text>
          <View style={detailStyle.deleteCancelView}>
            <Button icon="backup-restore" style={detailStyle.cancelButton} onPress={hideModal}>
              Cancel
            </Button>
            <Button
              icon="delete-forever"
              style={detailStyle.deleteButtonForever}
              onPress={showModal}
            >
              Delete forever
            </Button>
          </View>
        </Modal>
      </Portal>
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
                  {liked ? (
                    <TextInput.Icon
                      name="arrow-down-bold-outline"
                      style={detailStyle.likesArrow}
                      onPress={dislikePost}
                    />
                  ) : (
                    <TextInput.Icon
                      name="arrow-up-bold-outline"
                      style={detailStyle.likesArrow}
                      onPress={likePost}
                    />
                  )}
                  {post.likesCount}
                </Text>
                <Text style={detailStyle.commentContainer}>Comentarios:</Text>
                <TextInput
                  placeholder="Say something..."
                  onChangeText={onChangeComment}
                  onEndEditing={commentPost}
                />
                {post.comments
                  ? post.comments.map((comment, index) => (
                      <Text key={index} style={detailStyle.comment}>
                        {comment.content}
                      </Text>
                    ))
                  : null}
              </View>
            )
          )}
          {post.id && (
            <View style={detailStyle.tagList}>
              <Link to={{ screen: 'Edit', params: { id: postId, user: user } }}>
                <Button
                  icon="clipboard-edit-outline"
                  style={detailStyle.editButton}
                >
                  Edit
                </Button>
              </Link>
              <Button
                icon="delete-forever"
                style={detailStyle.deleteButton}
                onPress={showModal}
              >
                Delete
              </Button>
            </View>
          )}
        </ScrollView>
      </View>
      {/* <FAB style={detailStyle.fab} icon="plus" onPress={navigateHome} /> */}
    </SafeAreaView>
  )
}
