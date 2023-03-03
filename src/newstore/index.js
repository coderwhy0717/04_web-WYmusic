import { configureStore } from '@reduxjs/toolkit'

import searchPageMessage from './modules/searchPage'

const newstore = configureStore({
  reducer: {
    searchPage: searchPageMessage
  }
})

export default newstore
