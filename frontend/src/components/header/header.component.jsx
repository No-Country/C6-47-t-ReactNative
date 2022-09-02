import React from 'react'
import { Appbar } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import { add_postId } from '../../features/posts/postsSlice'

export const HeaderComponent = ({ title, navigation }) => {
  const dispatch = useDispatch()
  const setPostNull = () => {
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
