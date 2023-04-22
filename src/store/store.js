import { configureStore } from '@reduxjs/toolkit'
import urlSlice from './url/urlSlice'
import authSlice from './auth/authSlice'

export const store = configureStore({
  reducer: {
    url: urlSlice,
    auth: authSlice
  }
})
