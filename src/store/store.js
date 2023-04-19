import { configureStore } from '@reduxjs/toolkit'
import urlSlice from './url/urlSlice'

export const store = configureStore({
  reducer: { url: urlSlice }
})
