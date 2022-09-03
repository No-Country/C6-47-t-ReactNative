import { StyleSheet } from 'react-native'

export const createStyle = StyleSheet.create({
  content: {
    display: 'flex',
    paddingTop: 24,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tagList: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
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