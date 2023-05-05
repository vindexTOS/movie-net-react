import { createSlice } from '@reduxjs/toolkit'
import { filmData, movieDataType } from '../../assets/dummydata/data'
import { RootState } from '../store/store'
import { createSelector } from '@reduxjs/toolkit'
export const initialState = {
  movieData: filmData,
}

const dataSlice = createSlice({
  name: 'film-data',
  initialState,
  reducers: {},
})

export const selectData = createSelector(
  (state: RootState) => state.data.movieData,
  (movieData: any) => movieData,
)

export default dataSlice.reducer
