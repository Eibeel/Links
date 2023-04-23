import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'checking', // success
    email: '',
    name: '',
    token: '',
    id: ''
  },
  reducers: {
    setUser: (state, { payload }) => {
      state.status = 'success'
      state.email = payload.email
      state.name = payload.name
      state.token = payload.token
      state.id = payload.id
    },
    logout: (state) => {
      state.email = ''
      state.name = ''
      state.status = ''
      state.token = ''
      state.id = ''
    }
  }
})

export const { setUser, logout } = authSlice.actions
export default authSlice.reducer
