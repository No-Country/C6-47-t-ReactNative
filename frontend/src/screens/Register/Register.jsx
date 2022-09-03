import axios from 'axios'
import * as React from 'react'
import { useState } from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import { Button, TextInput, Text } from 'react-native-paper'
import { HeaderComponent } from '../../components/header/header.component'
import { useAxios } from '../../utils/customHooks/useAxios'
import handleCheckPass from '../../utils/validators/validateCheckPass'
import validateEmail from '../../utils/validators/validateEmail'
import validatePass from '../../utils/validators/validatePass'
import validatePhone from '../../utils/validators/validatePhone'
import { registerStyle } from './register.style'

export default function Register({ navigation }) {
  const [secureTextEntry, setSecureTextEntry] = useState(true)
  const [username, setUSername] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [checkPass, setCheckPass] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passError, setPassError] = useState('')
  const [passCheckError, setPassCheckError] = useState('')
  const [loginError, setLoginError] = useState('')
  const [phoneError, setPhoneError] = useState('')

  const api = useAxios()

  const handleEmailInput = function (e) {
    setEmailError(validateEmail(e))
    setEmail(e)
  }

  const handlePassInput = function (e) {
    setPassError(validatePass(e))
    setPassword(e)
  }

  const handlePhoneInput = function (e) {
    setPhoneError(validatePhone(e))
    setPhone(e)
  }

  const handleCheckPassInput = function (original, pass) {
    setPassCheckError(handleCheckPass(original, pass))
    setCheckPass(pass)
  }

  const register = () => {
    try {
      if (email && password && !emailError && !passError && !passCheckError) {
        setLoginError('')
        api.post('/register', { username, email, password }).then((res) => {
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
            secureTextEntry={secureTextEntry}
            value={password}
            right={
              <TextInput.Icon
                onPress={() => {
                  setSecureTextEntry(!secureTextEntry)
                  return false
                }}
                name="eye-off-outline"
                color={registerStyle.icon.color}
              />
            }
          />
          {passError ? <Text>Error: {passError}</Text> : null}
          <TextInput
            onChangeText={(text) => handleCheckPassInput(password, text)}
            label="Confirm password"
            secureTextEntry={secureTextEntry}
            value={checkPass}
            right={
              <TextInput.Icon
                onPress={() => {
                  setSecureTextEntry(!secureTextEntry)
                  return false
                }}
                name="eye-off-outline"
                color={registerStyle.icon.color}
              />
            }
          />
          {passCheckError ? <Text>Error: {passCheckError}</Text> : null}
          <TextInput
            onChangeText={(text) => handlePhoneInput(text)}
            label="Phone number"
            keyboardType="phone-pad"
            value={phone}
          />
          {phoneError ? <Text>Error: {phoneError}</Text> : null}
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
