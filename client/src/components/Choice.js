/* eslint-disable react/jsx-no-useless-fragment */
import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'

// eslint-disable-next-line react/prop-types
const Choice = ({ type }) => {
  return (
    <>
      {type === 'Like' ? (
        <View
          style={tw`border-[5px] px-2 rounded-xl border-green-500 bg-[rgba(0,0,0,0.2)]`}
        >
          <Text
            style={tw`text-[46px] font-semibold uppercase tracking-wide text-green-500`}
          >
            {type}
          </Text>
        </View>
      ) : (
        <View
          style={tw`border-[5px] px-2 rounded-xl border-red-500 bg-[rgba(0,0,0,0.2)]`}
        >
          <Text
            style={tw`text-[46px] font-semibold uppercase tracking-wide text-red-500`}
          >
            {type}
          </Text>
        </View>
      )}
    </>
  )
}

export default Choice
