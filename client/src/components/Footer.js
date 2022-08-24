import { View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import RoundButton from './RoundButton'
import { COLORS } from '../utils/constants'

// eslint-disable-next-line react/prop-types
const Footer = ({ handleChoice }) => {
  return (
    <View
      // style={tw`flex-row justify-center items-center`}
      style={tw` flex-row w-1/5 justify-between items-center`}
    >
      <RoundButton
        name="times"
        size={25}
        color={COLORS.nope}
        onPress={() => handleChoice(-1)}
      />
      <RoundButton
        name="check"
        size={25}
        color={COLORS.like}
        onPress={() => handleChoice(1)}
      />
    </View>
  )
}

export default Footer
