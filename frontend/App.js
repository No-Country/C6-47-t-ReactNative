import * as React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import Login from './src/screens/Login/Login'
import { theme } from './App.style'
import Register from './src/screens/Register/Register'
import AppNavigator from './src/app.navigator'
import { Provider } from 'react-redux'
import store from './src/store/store'
import FetchFunctions from './src/utils/fetch/FetchFunctions'

export default function App() {
  return (
    <Provider store={store}>
      <FetchFunctions>
        <PaperProvider theme={theme}>
          <AppNavigator />
        </PaperProvider>
      </FetchFunctions>
    </Provider>
  )
}
