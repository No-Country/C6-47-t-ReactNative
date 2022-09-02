import React from 'react'
import { Appbar } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import { add_postId, fetchPostsById } from '../../features/posts/postsSlice'
import { headerStyle } from './header.style'

export const HeaderComponent = ({ title, navigation }) => {
  const dispatch = useDispatch()
  const setPostNull = () => {
    // dispatch(fetchPostsById(null))
    dispatch(add_postId(null))
  }
  return (
    <Appbar>
      {title !== 'Home' ? (
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack()
            setPostNull()
          }}
        />
      ) : null}
      <Appbar.Content title={title} />
    </Appbar>
  )
}
