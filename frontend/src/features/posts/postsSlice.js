/* eslint-disable no-param-reassign */
/* eslint-disable prefer-template */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import axios from 'axios'

const initialState = {
  loading: false,
  posts: [],
  post: {},
  error: ''
}

export const fetchPosts = createAsyncThunk(
  'post/fetchPosts',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios
        .get('http://186.182.43.178:8080/post') // TODO <<<--- Establecer en un archivo una configuración para guardar la URL base para reciclarlo en todos los request, ejemplo: https://localhost:8080
        .then((res) => res.data)

      return response // Return a value synchronously using Async-await
    } catch (err) {
      if (!err.response) {
        throw err
      }
      return rejectWithValue(err.response)
    }
  }
)

export const fetchPostsById = createAsyncThunk(
  'post/fetchPostsById',
  async (payload, { rejectWithValue }) => {
    //console.log('my payload: ',payload)
    try {
      const response = await axios
        .get('http://186.182.43.178:8080/post/' + payload)
        .then((res) => res.data)
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
  extraReducers: (builder) => {
    builder.addCase(fetchPostsById.pending, (state) => {
      console.log('loading')
      state.loading = true
    })

    builder.addCase(fetchPostsById.fulfilled, (state, action) => {
      //console.log(action.payload)
      state.loading = false
      state.post = action.payload
      state.error = ''
    })
    
    builder.addCase(fetchPostsById.rejected, (state, action) => {
      //console.log('rejected')
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
      state.error = ''
    })
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false
      state.posts = []
      state.error = action.error.message
    })
  }
})

export default postsSlice.reducer
