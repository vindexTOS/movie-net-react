import { ThunkDispatch, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { getAllActors } from '../slices/actorSlice'

type ObjType = {
  name: string
  img: string
  id?: number
}
type GetActors = {
  dispatch: ThunkDispatch<any, any, any>
}
export const CreateActor = createAsyncThunk(
  'actor/post',
  async (obj: ObjType) => {
    const apiUrl = `http://localhost:5119/v1/Actors/AddActor`

    await axios
      .post(apiUrl, obj)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  },
)

export const GetActors = createAsyncThunk(
  'actor/get',
  async (val: GetActors) => {
    const apiUrl = `http://localhost:5119/v1/Actors/GetAllActors`

    const data = await axios
      .get(apiUrl)
      .then((res) => {
        console.log(res)
        return res.data
      })
      .catch((err) => console.log(err))

    val.dispatch(getAllActors(data))
  },
)

export const updateActor = createAsyncThunk(
  'actor/update',
  async (obj: ObjType) => {
    const apiUrl = `http://localhost:5119/v1/Actors/UpdateActor`
    await axios
      .put(apiUrl, obj)
      .then((res) => console.log(res))
      .then((err) => console.log(err))
  },
)
