import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { changeLoading, setLoading } from '../posts/postsSlice'

const initialState = {
  access_token: '',
  refresh_token: '',
  loadingTokens: false
}

export const fetchTokens = createAsyncThunk(
  'user/fetchTokens',
  async (payload, { rejectWithValue }) => {
    if (payload) return payload
    return rejectWithValue(payload)
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    add_access_token(state, action) {
      return {
        ...state,
        access_token: action.payload
      }
    },
    add_refresh_token(state, action) {
      return {
        ...state,
        refresh_token: action.payload
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTokens.pending, (state) => {
      state.loadingTokens = true
    })

    builder.addCase(fetchTokens.fulfilled, (state, action) => {
      state.loadingTokens = false
      state.access_token = action.payload.access_token
      state.refresh_token = action.payload.refresh_token
    })

    builder.addCase(fetchTokens.rejected, (state, action) => {
      state.loadingTokens = false
      state.access_token = ''
      state.refresh_token = ''
    })
  }
})

export const { add_access_token, add_refresh_token } = userSlice.actions
export default userSlice.reducer
