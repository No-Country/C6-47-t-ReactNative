import { StyleSheet } from 'react-native'

export const homeStyle = StyleSheet.create({
  content: {
    display: 'flex',
    paddingTop: 24,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  fab: {
    position: 'absolute',
    margin: 16,
    alignSelf: 'center',
    bottom: 0
  },
  fabNext: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#010A26'
  },
  fabPrev: {
    position: 'absolute',
    margin: 16,
    left: 0,
    bottom: 0,
    backgroundColor: '#010A26'
  },
  view: {
    display: 'flex',
    alignItems: 'center'
  }
})

// #F2F2F2 "white" | #010A26 black | #BF4B81 wine | #90A66F green
