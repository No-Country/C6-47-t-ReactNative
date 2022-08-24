import DetailScreen from '../screens/DetailScreen'
import HomeScreen from '../screens/HomeScreen'
import { Ionicons } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import SettingsScreen from '../screens/SettingsScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()
const NavigatorBottomTabs = () => {
  const iconRender = (iconName, color) => {
    return <Ionicons name={iconName} size={24} color={color} />
  }
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName
            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home'
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-settings' : 'ios-settings'
            } else if (route.name === 'Details') {
              iconName = focused ? 'logo-ionic' : 'logo-ionic'
            }
            return iconRender(iconName, color)
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          tabBarVisible: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#fff',
            position: 'absolute',
            bottom: 20,
            left: 20,
            right: 20,
            borderRadius: 10,
            height: 40
          },
          headerStyle: {
            backgroundColor: '#d9f99d'
          }
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Details" component={DetailScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default NavigatorBottomTabs
