import { DefaultTheme, NavigationContainer } from '@react-navigation/native'

import DetailScreen from '../screens/DetailScreen'
import HomeScreen from '../screens/HomeScreen'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import SettingsScreen from '../screens/SettingsScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import tw from 'twrnc'

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6200EE',
    text: '#000',

  }
};

const NavigatorBottomTabs = () => {
  const Tab = createBottomTabNavigator()
  return (
    <NavigationContainer theme={MyTheme}>      
      <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: {display: 'flex', marginBottom:20, marginHorizontal:20, borderRadius:20, paddingVertical: 20, paddingBottom: 20, alignItems:'center', justifyContent: 'center',  height: 80, backgroundColor:'#fff' }}}  >
        <Tab.Screen name="Home" component={HomeScreen} 
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),}}
        />
        <Tab.Screen name="Favoritos" component={DetailScreen} 
        options={{ 
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" color={color} size={size} />
          ),}}/>
        <Tab.Screen name="Settings" component={SettingsScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings" color={color} size={size} />
            ),}} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default NavigatorBottomTabs;