import { createAsyncThunk, createSlice, } from '@reduxjs/toolkit'

import axios from 'axios'

const initialState = {
  loading: false,
  posts: [
    {
      postId: 1,
      userId: 2,
      title: 'Post 1',
      body: 'This is the body of post 1',
      image: 'https://picsum.photos/200',
      comments: ['This is the comment n° 1','This is the comment n° 2','This is the comment n° 3']
    },
    {
      postId: 2,
      userId: 3,
      title: 'Post 2',
      body: 'This is the body of post 2',
      image: 'https://picsum.photos/202',
      comments: ['This is the comment n° 1','This is the comment n° 2','This is the comment n° 3']
    }
  ],
  post: null,
  error: '',
}

export const fetchPosts = createAsyncThunk('post/fetchPosts', 
  async (payload, {rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:8080/post')
      .then(res => res.data)
      return response // Return a value synchronously using Async-await
    } catch (err) {
      if (!err.response) {
        throw err
      }
      return rejectWithValue(err.response)
    }
  }
)

export const fetchPostsById = createAsyncThunk('post/fetchPostsById', 
  async (payload, {rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:8080/post/' + payload)
      .then(res => res.data)
      return response // Return a value synchronously using Async-await
    } catch (err) {
      if (!err.response) {
        throw err
      }
      return rejectWithValue(err.response)
    }
  }
)



const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: 
  (builder) => {
    builder.addCase(fetchPostsById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPostsById.fulfilled, (state,action) => {
      state.loading = false;
      state.post = action.payload;
      state.error = '';
    });
    builder.addCase(fetchPostsById.rejected, (state,action) => {
      state.loading = false;
      state.posts = [];
      state.error = action.error.message;
    });

    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state,action) => {
      state.loading = false;
      state.posts = action.payload;
      state.error = '';
    });
    builder.addCase(fetchPosts.rejected, (state,action) => {
      state.loading = false;
      state.posts = [];
      state.error = action.error.message;
    });
    
  }  
})

// export const {} = postsSlice.actions
export default postsSlice.reducer

// Redux action types:
