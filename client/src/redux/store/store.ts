import { combineReducers, configureStore } from '@reduxjs/toolkit'
import infoReducer from '../features/slices/infoSlice'
import slideReducer from '../features/slices/slideMovieSlice'
import dataSlice from '../features/slices/dataSlice'
import AuthReducer from '../features/slices/AuthSlice'
import CreateMoveiReducer from '../features/slices/CreateMovieSlice'
import MovieInnerReducer from '../features/slices/movieInner'
import ActorsReducer from '../features/slices/actorSlice'
const rootReducer = combineReducers({
  info: infoReducer,
  slide: slideReducer,
  data: dataSlice,
  auth: AuthReducer,
  createMovie: CreateMoveiReducer,
  movieInner: MovieInnerReducer,
  actorsReducer: ActorsReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default store
