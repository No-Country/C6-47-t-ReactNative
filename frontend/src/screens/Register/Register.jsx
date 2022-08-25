import * as React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { HeaderComponent } from '../../components/header/header.component';
import { registerStyle } from './register.style';

export default function Register({navigation}) {
  const navigateHome = () => {
    navigation.navigate('Home');
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <HeaderComponent title='Register' />
        <View style={registerStyle.content}>
          <TextInput label='Name' />
          <TextInput label='Email' keyboardType='email-address' />
          <TextInput label='Password' secureTextEntry={true} right={<TextInput.Icon name='eye-off-outline' color={registerStyle.icon.color} />} />
          <TextInput label='Confirm password' secureTextEntry={true} right={<TextInput.Icon name='eye-off-outline' color={registerStyle.icon.color} />} />
          <TextInput label='Phone number' keyboardType='phone-pad' />
          <Button onPress={navigateHome} mode='contained' style={registerStyle.button}>Register</Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}