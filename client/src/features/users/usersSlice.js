import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [
    {
      user_id: 1,
      name: 'John Doe',
      email: 'jhon@email.com',
      password: '123456',
      created_at: '2020-01-01',
      updated_at: '2020-01-01'
    },
    {
      user_id: 2,
      name: 'Jorge Doe',
      email: 'jorge@email.com',
      password: '123456',
      created_at: '2020-01-01',
      updated_at: '2020-01-01'
    }
  ]
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
})

export const {} = usersSlice.actions
export default usersSlice.reducer

//  Redux action types:
