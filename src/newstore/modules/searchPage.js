import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchsearchPageAction = createAsyncThunk(
  'searchPage',
  (payload, { dispatch, getState }) => {}
)

const searchPageMessage = createSlice({
  name: 'searchPage',
  initialState: {
    searchPageMessage: 123
  },
  reducers: {}
})

export const {} = searchPageMessage.actions

export default searchPageMessage.reducer
