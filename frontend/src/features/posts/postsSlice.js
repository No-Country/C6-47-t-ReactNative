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
  error: '',
  wordFilter: '',
  allTags: [],
  tagFilter: ''
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

export const fetchTags = createAsyncThunk(
  'post/fetchTags',
  async (payload, { rejectWithValue }) => {
    if (payload) return payload
    return rejectWithValue(payload)
  }
)

export const setLoading = createAsyncThunk(
  'post/setLoading',
  async (payload, { rejectWithValue }) => {
    if (payload || !payload) {
      return payload
    }
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
      return {
        ...state,
        currentPage: action.payload
      }
    },
    changeCurrentWordFilter(state, action) {
      return {
        ...state,
        wordFilter: action.payload
      }
    },
    changeCurrentTagFilter(state, action) {
      return {
        ...state,
        tagFilter: action.payload
      }
    },
    sumLikesCount(state, action) {
      const count = state['post'].likesCount
      return {
        ...state,
        posts: state.posts.map((post, i) => {
          if (post.id === action.payload) {
            return {
              ...post,
              likesCount: count + 1
            }
          } else {
            return post
          }
        }),
        post: { ...state.post, likesCount: count + 1 }
      }
    },
    restLikescount(state, action) {
      const count = state['post'].likesCount
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id === action.payload) {
            return {
              ...post,
              likesCount: count + -1
            }
          } else {
            return post
          }
        }),
        post: { ...state.post, likesCount: count - 1 }
      }
    },
    setCommentPost(state, action) {
      const { postId, content } = action.payload
      state.posts.forEach((post) => {
        if (post.id === postId) {
          post.comments.push({ content })
        }
      })
      state.post.comments.push({ content })
    },
    deleteCurrentPost(state, action) {
      const postId = action.payload
      return {
        ...state,
        posts: state.posts.filter((post) => post.id != postId)
      }
    }
  },
  extraReducers: (builder) => {
    /* setLoading  */
    builder
      .addCase(setLoading.pending, (state) => {
        state.loading = true
      })

      .addCase(setLoading.fulfilled, (state, action) => {
        state.loading = action.payload
      })

      .addCase(setLoading.rejected, (state, action) => {
        state.loading = true
      })

    /* fetchPostById */
    builder
      .addCase(fetchPostsById.pending, (state) => {
        state.loading = true
      })

      .addCase(fetchPostsById.fulfilled, (state, action) => {
        state.loading = false
        state.post = action.payload
        state.error = ''
      })

      .addCase(fetchPostsById.rejected, (state, action) => {
        state.loading = false
        state.post = {}
        state.error = action.error
      })

    /* fetchPosts */
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true
      })

      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false
        state.posts = action.payload.rows
        state.postCount = action.payload.count
        state.error = ''
      })

      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false
        state.posts = []
        state.error = action.error.message
      })

    /* fetchTags */
    builder
      .addCase(fetchTags.pending, (state) => {
        state.loading = true
      })

      .addCase(fetchTags.fulfilled, (state, action) => {
        state.loading = false
        state.allTags = action.payload.rows
        state.error = ''
      })

      .addCase(fetchTags.rejected, (state, action) => {
        console.log(action)
        state.loading = false
        state.allTags = []
        state.error = action.error
      })
  }
})
export const {
  add_postId,
  changeCurrentPage,
  changeCurrentWordFilter,
  changeCurrentTagFilter,
  sumLikesCount,
  restLikescount,
  setCommentPost,
  deleteCurrentPost
} = postsSlice.actions
export default postsSlice.reducer
