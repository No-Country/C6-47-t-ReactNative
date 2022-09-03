import { StyleSheet } from 'react-native'

export const cardStyle = StyleSheet.create({
  view: {
    flexWrap: 'wrap',
    paddingTop: 20
  },
  body: {
    marginTop: 10,
  },
  content: {
    minWidth: 350,
    maxWidth: 380
  },
  bottomLine: {
    textAlign: 'right',
    padding: 10,    
  },
  button: {
    width: '40%',
    borderRadius: 10,
    backgroundColor: '#ffff8d',
    marginTop: 10
  },
  buttonText: {
    color: '#010A26',
    fontSize: 10
  },
  buttonPressed: {
    width: '40%',
    borderRadius: 10,
    backgroundColor: '#aaaaaa',
    marginTop: 10
  }
})
