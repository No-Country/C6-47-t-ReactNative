import axios from 'axios'
import * as React from 'react'
import { useState } from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import { Button, TextInput, Text } from 'react-native-paper'
import { HeaderComponent } from '../../components/header/header.component'
import { registerStyle } from './register.style'

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
    passError =
      'El password es invalido. La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. NO puede tener otros símbolos.'
  }

  return passError
}

export function handleCheckPass(original, pass) {
  let passCheckError = ''

  if (original !== pass) {
    passCheckError = 'Los passwords no coinciden'
  } else {
    console.log('matchean. Original: ', original, ' pass: ', pass)
  }

  return passCheckError
}

export default function Register({ navigation }) {
  const [username, setUSername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checkPass, setCheckPass] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passError, setPassError] = useState('')
  const [passCheckError, setPassCheckError] = useState('')
  const [loginError, setLoginError] = useState('')

  const handleEmailInput = function (e) {
    setEmailError(validateEmail(e))
    setEmail(e)
  }

  const handlePassInput = function (e) {
    setPassError(validatePass(e))
    setPassword(e)
  }

  const handleCheckPassInput = function (original, pass) {
    setPassCheckError(handleCheckPass(original, pass))
    setCheckPass(pass)
  }

  const register = () => {
    try {
      if (email && password && !emailError && !passError && !passCheckError) {
        // TODO <<<<< Agregar validación de username
        setLoginError('')
        axios
          .post(
            'http://localhost:8080/register',
            { username, email, password },
            { withCredentials: true }
          )
          .then((res) => {
            console.log(res.data)
            navigation.navigate('Login')
          })
      } else {
        setLoginError('Ingrese todos los campos por favor.')
      }
    } catch (error) {
      setLoginError('Error inesperado')
    }
  }

  return (
    <SafeAreaView style={registerStyle.safeArea}>
      <ScrollView>
        <HeaderComponent title="Register" navigation={navigation} />
        <View style={registerStyle.content}>
          <TextInput label="Name" />
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
            right={
              <TextInput.Icon
                name="eye-off-outline"
                color={registerStyle.icon.color}
              />
            }
          />
          {passError ? <Text>Error: {passError}</Text> : null}
          {/* <TextInput label='Password' secureTextEntry={true} right={<TextInput.Icon name='eye-off-outline' color={registerStyle.icon.color} />} /> */}
          <TextInput
            onChangeText={(text) => handleCheckPassInput(password, text)}
            label="Confirm password"
            secureTextEntry={true}
            value={checkPass}
            right={
              <TextInput.Icon
                name="eye-off-outline"
                color={registerStyle.icon.color}
              />
            }
          />
          {passCheckError ? <Text>Error: {passCheckError}</Text> : null}
          <TextInput label="Phone number" keyboardType="phone-pad" />
          <Button
            onPress={register}
            mode="contained"
            style={registerStyle.button}
          >
            Register
          </Button>
          {loginError ? <Text>Error: {loginError}</Text> : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
