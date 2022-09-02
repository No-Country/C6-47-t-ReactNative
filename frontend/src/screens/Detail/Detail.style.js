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
  },
  title: {
    fontSize: 20
  },
  postView: {
    marginTop: 20,
    width: '80%'
  },
  image: {
    marginTop: 20,
    width: '100%',
    height: 200
  },
  likes: {
    alignSelf: 'flex-end'
  },
  createdBy: {
    marginVertical: 8,
    alignSelf: 'flex-end'
  },
  username: {
    fontWeight: 'bold',
    color: '#010A26'
  },
  commentContainer: {
    marginVertical: 10
  }
  ,
  comment: {
    borderWidth: 2,
    borderRadius: 5,
    padding: 10
  },
  likesArrow: {
    paddingRight: 10,
  }
})