import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import postsReducer from '../features/posts/postsSlice'
import usersReducer from '../features/users/usersSlice'

const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})

export default store
