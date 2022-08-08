import { Text, View } from 'react-native'
import tw from 'twrnc'
import { store } from './src/store/store.js'
import { Provider } from 'react-redux'

export default function App() {
  return (
    // Add Redux provider to the app
    <Provider store={store}>
      <View style={tw`bg-red-400 flex h-full items-center justify-center `}>
        <Text style={tw`text-white`}>
          Open up App.js to start working on your app!
        </Text>
      </View>
    </Provider>
  )
}
