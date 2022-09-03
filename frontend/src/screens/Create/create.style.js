import { StyleSheet } from 'react-native'

export const createStyle = StyleSheet.create({
  content: {
    display: 'flex',
    paddingTop: 24,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tagList: {
    justifyContent:'space-between',
    flexDirection: 'row'
  }
})