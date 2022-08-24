import React from "react";
import { createNativeStackNavigator }  from '@react-navigation/native-stack'
import { NavigationContainer } from "@react-navigation/native";
import Login from "./screens/Login/Login";
import Home from "./screens/Home/Home";
import Register from "./screens/Register/Register";

const { Navigator, Screen } = createNativeStackNavigator();

const AppNavigator = () => {
    return(
        <NavigationContainer>
            <Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
                <Screen name='Login' component={Login}></Screen>
                <Screen name='Home' component={Home}></Screen>
                <Screen name='Register' component={Register}></Screen>
            </Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;