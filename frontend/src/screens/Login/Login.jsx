import * as React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Alert, SafeAreaView, View } from 'react-native'
import { Button, Card, Text, TextInput } from 'react-native-paper'
import { loginStyle } from './login.style'
import { useDispatch, useSelector } from 'react-redux'
import { add_access_token, add_refresh_token } from '../../features/user/userSlice'

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
    passError = 'El password es invalido.'
  }

  return passError
}

export default function Login({ navigation }) {
  const access_token = useSelector((state) => state.user.access_token);
  const refresh_token = useSelector((state) => state.user.refresh_token);

  const dispatch = useDispatch();

  const [email, setEmail] = useState('ezegeek@gmail.com')
  const [password, setPassword] = useState('H3adsh0t')

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

  const login = () => {
    try {
      if (!emailError && !passError && email && password) {
        setLoginError('')
        
        axios
          .post(
            'http://186.182.43.178:8080/login',
            { username: email, password }, // TODO <<-- Cambiar campo de email a username
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            // Almacenamos los tokens en el slice tokens
            dispatch(add_access_token(res.data.tokens.access_token));
            dispatch(add_refresh_token(res.data.tokens.refresh_token));
            // Luego de guardalos navega a "Home"
            navigation.navigate('Home')
          })
          .catch((err) => {
            //console.log(err.response.data.message)
            setLoginError(err.response.data.message);
          })
          //navigation.navigate('Home')

      } else {
        setLoginError('Ingrese email y contraseña por favor.')
      }
    } catch (error) {
      setLoginError('Error inesperado')
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
              // keyboardType="email-address"
              keyboardType="default"
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
              onPress={login}
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
