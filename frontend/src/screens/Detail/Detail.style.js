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
    width: '80%',
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
  },
  button: {
    width: '35%',
    borderRadius: 10,
    backgroundColor: '#ffff8d',
    marginTop: 10
  },
  buttonText: {
    color: '#010A26',
    fontSize: 10
  },
  tagList: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginTop: 10
  },
  deleteButton: {
    marginHorizontal: 6,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: 'red'
  },
  editButton: {
    borderRadius: 999,
    borderWidth: 2,
    borderColor: 'green'
  },
  textAlert: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    padding: 10
  },
  cancelButton: {
    marginHorizontal: 6,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: 'green',
    marginVertical: 10,
  },
  deleteButtonForever: {
    marginHorizontal: 6,
    borderRadius: 999,
    margin: 10,
    backgroundColor: 'red'
  },
  deleteCancelView: {
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginTop: 10
  }
})