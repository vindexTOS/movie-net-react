import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: '',
  description: '',
  photoUrl: '',
  length: ``,
  year: '',
  genere: '',
  actorName: '',
  img: '',
  imDb: '',
  rottenTomatoes: '',
  video: '',
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
      // console.log(action.payload)
    },
    getYear: (state, action) => {
      console.log(action.payload)
      state.year = action.payload
    },
    getGenre: (state, action) => {
      // console.log(action.payload)
      state.genere = action.payload
    },
    getActor: (state, action) => {
      state.actorName = action.payload
    },
    getImg: (state, action) => {
      state.img = action.payload
    },
    getImDb: (state, action) => {
      state.imDb = action.payload
    },
    getTomatos: (state, action) => {
      state.rottenTomatoes = action.payload
    },
    getVideo: (state, action) => {
      state.video = action.payload
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
  getActor,
  getImg,
  getImDb,
  getTomatos,
  getVideo,
} = CreateMovieSlice.actions
