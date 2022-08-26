import * as React from 'react'
import { useState } from 'react'
import { Alert, SafeAreaView, View } from 'react-native'
import { Button, Card, Text, TextInput } from 'react-native-paper'
import { loginStyle } from './login.style'

export function validateEmail(email) {
  let emailError = ''

  if (!email) {
    emailError = 'El email es necesario'
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    emailError = 'Email invalido'
  }

  return emailError
}

export function validatePass(pass) {
  let passError = ''

  if (!pass) {
    passError = 'El password es necesario'
  } else if (!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{5,16}$/.test(pass)) {
    passError = 'El password es invalido.';
  }

  return passError
}

export default function Login({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [emailError, setEmailError] = useState('')
  const [passError, setPassError] = useState('')

  const [loginError, setLoginError] = useState('')

  const handleEmailInput = function (e) {
    setEmailError(validateEmail(e))
    setEmail(e)
  }

  const handlePassInput = function (e) {
    setPassError(validatePass(e))
    setPassword(e)
  }

  const navigateHome = () => {
    if (!emailError && !passError && email && password) {
      setLoginError('');
      navigation.navigate('Home');
    } else {
      setLoginError('Ingrese email y contraseña por favor.');
    }
  }

  const navigateRegister = () => {
    navigation.navigate('Register')
  }

  return (
    <SafeAreaView style={loginStyle.content}>
      <View style={loginStyle.view}>
        <Card>
          <Card.Title title="Titulo App" titleStyle={loginStyle.cardTitle} />
          <Card.Content>
            <TextInput
              onChangeText={(text) => handleEmailInput(text)}
              label="Email"
              keyboardType="email-address"
              value={email}
            />
            {emailError ? <Text>Error: {emailError}</Text> : null}
            <TextInput
              onChangeText={(text) => handlePassInput(text)}
              label="Password"
              secureTextEntry={true}
              value={password}
            />
            {passError ? <Text>Error: {passError}</Text> : null}
            <Button uppercase={false} style={loginStyle.cardButton}>
              ¿Olvido su contraseña?
            </Button>
            <Button
              onPress={navigateHome}
              mode="contained"
              style={loginStyle.cardButton}
            >
              Login
            </Button>
            {loginError ? <Text>Error: {loginError}</Text> : null}
            <Button onPress={navigateRegister} style={loginStyle.cardButton}>
              Register
            </Button>
          </Card.Content>
        </Card>
      </View>
    </SafeAreaView>
  )
}
