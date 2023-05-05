import { combineReducers, configureStore } from '@reduxjs/toolkit'
import infoReducer from '../features/infoSlice'
import slideReducer from '../features/slideMovieSlice'
import dataSlice from '../features/dataSlice'
const rootReducer = combineReducers({
  info: infoReducer,
  slide: slideReducer,
  data: dataSlice,
})

const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default store
