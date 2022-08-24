/* eslint-disable no-console */

import tw, { useAppColorScheme, useDeviceContext } from 'twrnc'

import Login from '../components/Login'
import PostsList from '../features/posts/PostsList'
import React from 'react'
import Register from '../components/Register'
import { View } from 'react-native'

const HomeScreen = ({ navigation }) => {
  useDeviceContext(tw, { withDeviceColorScheme: false })
  // eslint-disable-next-line no-unused-vars
  const [colorScheme, toggleColorScheme, setColorScheme] = useAppColorScheme(tw)
  //   const [toggleColorScheme] = useAppColorScheme(tw)

  //  ....................// ...................

  let login = false;
  let register = false;
  return (
    <View style={tw`flex-1 items-center  -z-50`}>

      {!login && <Login navigation={navigation} />}
      {register && <Register navigation={navigation} />}
      {login && <PostsList />}
    </View>
  )
}

export default HomeScreen
