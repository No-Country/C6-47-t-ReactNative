import * as React from 'react'
// import { Text, View } from 'react-native'
import { Provider } from 'react-redux'
import { store } from './src/store/store'
import NavigatorBottomTabs from './src/components/NavigatorBottomTabs'

export default function App() {
  return (
    // Add Redux provider to the app
    <Provider store={store}>
      <NavigatorBottomTabs />
    </Provider>
  )
}
