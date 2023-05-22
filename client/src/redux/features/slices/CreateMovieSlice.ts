import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: '',
  description: '',
  photoUrl: '',
  length: ``,
  year: '',
  genere: '',
}

const CreateMovieSlice = createSlice({
  name: 'create-movie',
  initialState,
  reducers: {
    getTitle: (state, action) => {
      state.title = action.payload
    },
    getDescription: (state, action) => {
      state.description = action.payload
    },
    getPhotoUrl: (state, action) => {
      state.photoUrl = action.payload
    },
    getLength: (state, action) => {
      state.length = action.payload
    },
    getYear: (state, action) => {
      console.log(action.payload)
      state.year = action.payload
    },
    getGenre: (state, action) => {
      state.genere = action.payload
    },
  },
})

export default CreateMovieSlice.reducer
export const {
  getTitle,
  getDescription,
  getPhotoUrl,
  getLength,
  getYear,
  getGenre,
} = CreateMovieSlice.actions
