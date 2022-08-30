import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import postsReducer from '../features/posts/postsSlice'
import usersReducer from '../features/users/usersSlice'
import userReducer from '../features/user/userSlice'

const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
    user: userReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})

export default store
