import React from 'react'
import { Appbar } from 'react-native-paper'
import { headerStyle } from './header.style'

export const HeaderComponent = ({ title, navigation }) => {
  return (
    <Appbar>
      {title !== 'Home' ? (
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      ) : null}
      <Appbar.Content title={title} />
    </Appbar>
  )
}
