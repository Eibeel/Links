import { createSlice } from '@reduxjs/toolkit'

export const urlSlice = createSlice({
  name: 'url',
  initialState: {
    urls: []
  },
  reducers: {
    setUrl: (state, action) => {
      state.urls = action.payload.urls
    }
  }
})

export const { setUrl } = urlSlice.actions
export default urlSlice.reducer
