import { StyleSheet } from 'react-native'

export const homeStyle = StyleSheet.create({
  content: {
    display: 'flex',
    flex: 1,
    paddingTop: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff'
  },
  fab: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    margin: 16
  },
  card: {
    display: 'none'
  }
})

// #F2F2F2 "white" | #010A26 black | #BF4B81 wine | #90A66F green
