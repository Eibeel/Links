import { createSlice } from '@reduxjs/toolkit'

export const urlSlice = createSlice({
  name: 'url',
  initialState: {
    urls: []
  },
  reducers: {
    createUrls: (state, { payload }) => {
      state.urls = payload.urls
    },
    deleteUrls (state) {
      state.urls = []
    }
  }
})

export const { createUrls, deleteUrls } = urlSlice.actions
export default urlSlice.reducer
