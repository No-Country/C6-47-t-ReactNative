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
  },
  tagList: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  close: {
    alignSelf: 'center',
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 999
  },
  buttonText: {
    margin: 4,
    borderRadius: 10,
    borderColor: '#ffff8d',
    borderWidth: 4,
    marginTop: 10
  },
  buttonTextPressed: {
    margin: 4,
    borderRadius: 10,
    backgroundColor: '#ffff8d',
    borderWidth: 4,
    marginTop: 10
  },
})

// #F2F2F2 "white" | #010A26 black | #BF4B81 wine | #90A66F green
