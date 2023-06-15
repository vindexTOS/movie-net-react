import { ThunkDispatch, createAsyncThunk } from '@reduxjs/toolkit'
import { getMovieData } from '../slices/dataSlice'

import axios from 'axios'
import { UpdatedValuesType } from '../../../pages/UserPages/UpdateMovie/UpdateMovie'
type MovieObjectType = {
  title: string
  color: string
  color2: string
  img: string
  video: string
  description: string

  rating: {
    IMDb: number
    RottenTomatos: number
  }
  actors: string[]
  metadata: {
    hr: string
    year: number
    genre: string
  }
  userId: string
}

type GetMoviesType = {
  dispatch: ThunkDispatch<any, any, any>
  pages: number
  year: string
  genre: string
  sort: string
}

const baseUrl = `http://localhost:5119`

const CreateMovie = createAsyncThunk(
  'movie/post',
  async (obj: MovieObjectType) => {
    const apiKey = `${baseUrl}/v1/Movies/AddMovie`
    await axios
      .post(apiKey, obj)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  },
)

const GetAllMovies = createAsyncThunk(
  'movie/get',
  async (val: GetMoviesType) => {
    const apiKey = `${baseUrl}/v1/Movies/GetAllMovies?PageNumber=${String(
      val.pages,
    )}&PageSize=8&sortBy=${val.sort}&genre=${val.genre}&year=${val.year}`
    // /GetAllMovies?PageNumber=3&PageSize=5&sortBy=Year&genre=ujas&year=2008&isDeleted=false
    const data = await axios
      .get(apiKey)
      .then((res) => res.data)
      .catch((err) => console.log(err))
    val.dispatch(getMovieData(data))
    console.log(data)
  },
)

const DeleteMovie = createAsyncThunk('movie/delete', async (id: number) => {
  const apiUrl = `${baseUrl}/v1/Movies/DeleteMovie/?id=${String(id)}`

  await axios
    .delete(apiUrl)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
})

const UpdateMovieThunk = createAsyncThunk(
  'movie/put',
  async ({ id, obj }: { id: string; obj: UpdatedValuesType }) => {
    const apiUrl = `${baseUrl}/v1/Movies/UpdateMovie`

    // obj.actors = [
    //   {
    //     id: 0,
    //     name: 'Tim Robbins',
    //     img: 'https://www.example.com/images/tim_robbins.jpg',
    //   },
    // ]
    await axios
      .put(apiUrl, obj)
      .then((res) => console.log(res))
      .then((err) => console.log(err))
  },
)
export { CreateMovie, GetAllMovies, DeleteMovie, UpdateMovieThunk }
