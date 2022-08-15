import { View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import RoundButton from './RoundButton'
import { COLORS } from '../utils/constants'

// eslint-disable-next-line react/prop-types
const Footer = ({ handleChoice }) => {
  return (
    <View
      style={tw`absolute bottom-4 flex-row w-1/3 justify-between items-center`}
    >
      <RoundButton
        name="times"
        size={30}
        color={COLORS.nope}
        onPress={() => handleChoice(-1)}
      />
      <RoundButton
        name="heart"
        size={30}
        color={COLORS.like}
        onPress={() => handleChoice(1)}
      />
    </View>
  )
}

export default Footer
