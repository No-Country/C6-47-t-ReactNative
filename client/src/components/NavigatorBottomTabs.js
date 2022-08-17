import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import HomeScreen from '../screens/HomeScreen'
import DetailScreen from '../screens/DetailScreen'
import SettingsScreen from '../screens/SettingsScreen'

const Tab = createBottomTabNavigator()
const NavigatorBottomTabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName
            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home'
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-settings' : 'ios-settings'
            } else if (route.name === 'Details') {
              iconName = focused ? 'logo-ionic' : 'logo-ionitron'
            }
            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: true,
          tabBarVisible: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#7e4b67f2',
            position: 'absolute',
            bottom: 20,
            left: 20,
            right: 20,
            borderRadius: 10,
            height: 40
          }
        })}
      >
        {/* //   {
        //   showLabel: false,
        //   tabBarStyle: {
        //     position: 'absolute',
        //     bottom: 20,
        //     left: 20,
        //     right: 20,
        //     borderRadius: 10,
        //     backgroundColor: '#fff',
        //     shadowColor: '#000',
        //     shadowOffset: {
        //       width: 0,
        //       height: 2
        //     },
        //     shadowOpacity: 0.25,
        //     shadowRadius: 3.84,
        //     elevation: 5
        //   }
        // } */}
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Details" component={DetailScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default NavigatorBottomTabs
