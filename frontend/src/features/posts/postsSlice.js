import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  posts: [
    {
      postId: 1,
      userId: 2,
      title: 'Post 1',
      body: 'This is the body of post 1',
      img: 'https://picsum.photos/200'
    },
    {
      postId: 2,
      userId: 3,
      title: 'Post 2',
      body: 'This is the body of post 2',
      img: 'https://picsum.photos/202'
    }
  ]
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {}
})

export const {} = postsSlice.actions
export default postsSlice.reducer

// Redux action types:
