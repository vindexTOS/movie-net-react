import { combineReducers, configureStore } from '@reduxjs/toolkit'
import infoReducer from '../features/infoSlice'
import slideReducer from '../features/slideMovieSlice'
import dataSlice from '../features/dataSlice'
import AuthReducer from '../features/slices/AuthSlice'
const rootReducer = combineReducers({
  info: infoReducer,
  slide: slideReducer,
  data: dataSlice,
  auth: AuthReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default store
