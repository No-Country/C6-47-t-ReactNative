import { StyleSheet } from 'react-native'

export const homeStyle = StyleSheet.create({
  content: {
    display: 'flex',
    paddingTop: '5%',
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
    backgroundColor: '#010A26'
    
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
    flex: 1,
    padding: 5,
    backgroundColor: '#010A26'

  }
})

// #F2F2F2 "white" | #010A26 black | #BF4B81 wine | #90A66F green
