import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from './screens/Login/Login'
import Home from './screens/Home/Home'
import Register from './screens/Register/Register'
import Create from './screens/Create/Create'
import Detail from './screens/Detail/Detail'
import Edit from './screens/Edit/Edit'


const { Navigator, Screen } = createNativeStackNavigator()

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Screen name="Login" component={Login}></Screen>
        <Screen name="Home" component={Home}></Screen>
        <Screen name="Register" component={Register}></Screen>
        <Screen name="Create" component={Create}></Screen>
        <Screen name="Detail" component={Detail}></Screen>
        <Screen name="Edit" component={Edit}></Screen>

      </Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
