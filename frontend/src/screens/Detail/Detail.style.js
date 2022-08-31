import { StyleSheet } from 'react-native'

export const detailStyle = StyleSheet.create({
  content: {
    display: 'flex',
    paddingTop: 24,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  view: {
    display: 'flex',
    alignItems:'center',
  }
})