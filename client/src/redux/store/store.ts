import { combineReducers, configureStore } from '@reduxjs/toolkit'
import infoReducer from '../features/infoSlice'
import slideReducer from '../features/slideMovieSlice'
import dataSlice from '../features/dataSlice'
import AuthReducer from '../features/slices/AuthSlice'
import CreateMoveiReducer from '../features/slices/CreateMovieSlice'
const rootReducer = combineReducers({
  info: infoReducer,
  slide: slideReducer,
  data: dataSlice,
  auth: AuthReducer,
  createMovie: CreateMoveiReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default store
