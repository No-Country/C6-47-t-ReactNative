import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  access_token: 'axia', 
  refresh_token: 'gnume'
}

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

  }
})

export const { add_access_token, add_refresh_token } = userSlice.actions
export default userSlice.reducer
