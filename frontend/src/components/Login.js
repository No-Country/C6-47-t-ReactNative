import { SafeAreaView, Text, TextInput } from 'react-native';

import React from "react";
import tw from 'twrnc'

const Login = ({ navigation }) => {
    const [userName, setUserName] = React.useState("");
    const [pass, setPass] = React.useState("");

    return(
        <SafeAreaView style={tw`flex-1 items-center justify-center`}>
            <Text>Login</Text>
            <Text></Text> 
            <Text>Username</Text>
            <TextInput
                style={tw`h-10 w-50 border-2 px-2.5 mb-2`}
                onChangeText={setUserName}
                value={userName}
            />
            <Text>Password</Text>
            <TextInput
                style={tw`h-10 w-50	border-2 px-2.5 mb-2`}
                onChangeText={setPass}
                value={pass}
            />
            <Text onPress={() =>  navigation.navigate('Details')}>¿No tienes una cuenta? Registrate AQUI</Text>
        </SafeAreaView>
    )
}

export default Login;