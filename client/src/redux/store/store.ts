import { configureStore } from '@reduxjs/toolkit'
import infoReducer from '../features/infoSlice'
import slideReducer from '../features/slideMovieSlice'
const store = configureStore({
  reducer: {
    info: infoReducer,
    slide: slideReducer,
  },
})

export default store
