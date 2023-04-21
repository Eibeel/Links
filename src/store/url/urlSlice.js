import { createSlice } from '@reduxjs/toolkit'

export const urlSlice = createSlice({
  name: 'url',
  initialState: {
    urls: [],
    email: '',
    password: ''
  },
  reducers: {
    setUrl: (state, action) => {
      state.urls = action.payload.urls
    },
    setEmail: (state, action) => {
      state.email = action.payload.email
    },
    setPassword: (state, action) => {
      state.password = action.payload.password
    }
  }
})

export const { setUrl, setEmail, setPassword } = urlSlice.actions
export default urlSlice.reducer
