import * as React from 'react'
import { SafeAreaView, View } from 'react-native'
import { Button, Card, TextInput } from 'react-native-paper'
import { loginStyle } from './login.style'

export default function Login({navigation}) {
  const navigateHome = () => {
    navigation.navigate('Home');
  }

  const navigateRegister = () => {
    navigation.navigate('Register');
  }

  return (
    <SafeAreaView style={loginStyle.content}>
      <View style={loginStyle.view}>
        <Card>
          <Card.Title title="Titulo App" titleStyle={loginStyle.cardTitle} />
          <Card.Content>
            <TextInput label="Email" keyboardType="email-address" />
            <TextInput label="Password" secureTextEntry={true} />
            <Button uppercase={false} style={loginStyle.cardButton}>
              ¿Olvido su contraseña?
            </Button>
            <Button onPress={navigateHome} mode="contained" style={loginStyle.cardButton}>
              Login
            </Button>
            <Button onPress={navigateRegister} style={loginStyle.cardButton}>Register</Button>
          </Card.Content>
        </Card>
      </View>
    </SafeAreaView>
  )
}
