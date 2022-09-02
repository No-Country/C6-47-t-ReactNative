/* eslint-disable no-param-reassign */
/* eslint-disable prefer-template */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: true,
  posts: [],
  post: {},
  postId: null,
  currentPage: null,
  postCount: 0,
  error: ''
}

export const fetchPosts = createAsyncThunk(
  'post/fetchPosts',
  async (payload, { rejectWithValue }) => {
    if (payload) return payload
    return rejectWithValue(payload)
  }
)

export const fetchPostsById = createAsyncThunk(
  'post/fetchPostsById',
  async (payload, { rejectWithValue }) => {
    if (payload) return payload
    return rejectWithValue(payload)
  }
)

export const setLoading = createAsyncThunk(
  'post/setLoading',
  async (payload, { rejectWithValue }) => {
    if (payload) return payload
    return rejectWithValue(payload)
  }
)

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    add_postId(state, action) {
      return {
        ...state,
        postId: action.payload
      }
    },
    changeCurrentPage(state, action) {
      console.log(action)
      return {
        ...state,
        currentPage: action.payload
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(setLoading.pending, (state) => {
      state.loading = true
    })

    builder.addCase(setLoading.fulfilled, (state, action) => {
      state.loading = action.payload
    })

    builder.addCase(setLoading.rejected, (state, action) => {
      state.loading = true
    })

    builder.addCase(fetchPostsById.pending, (state) => {
      state.loading = true
    })

    builder.addCase(fetchPostsById.fulfilled, (state, action) => {
      state.loading = false
      state.post = action.payload
      state.error = ''
    })

    builder.addCase(fetchPostsById.rejected, (state, action) => {
      state.loading = false
      state.post = {}
      state.error = action.error
    })

    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true
    })

    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false
      state.posts = action.payload.rows
      state.postCount = action.payload.count
      state.error = ''
    })

    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false
      state.posts = []
      state.error = action.error.message
    })
  }
})
export const { add_postId, changeCurrentPage } = postsSlice.actions
export default postsSlice.reducer
