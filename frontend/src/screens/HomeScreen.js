/* eslint-disable no-console */
import { View } from 'react-native'
import tw, { useAppColorScheme, useDeviceContext } from 'twrnc'
import React from 'react'
import PostsList from '../features/posts/PostsList'

const HomeScreen = () => {
  useDeviceContext(tw, { withDeviceColorScheme: false })
  // eslint-disable-next-line no-unused-vars
  const [colorScheme, toggleColorScheme, setColorScheme] = useAppColorScheme(tw)
  //   const [toggleColorScheme] = useAppColorScheme(tw)

  //  ....................// ...................

  return (
    <View style={tw`flex-1 items-center bg-lime-200 -z-50`}>
      <PostsList />
    </View>
  )
}

export default HomeScreen
