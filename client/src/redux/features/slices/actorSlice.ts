import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  actorData: [],
}

const ActorSlice = createSlice({
  name: 'actor-data',
  initialState,
  reducers: {
    getAllActors: (state, action) => {
      console.log(action.payload)
      console.log('actor')
      state.actorData = action.payload
    },
  },
})

export default ActorSlice.reducer
export const { getAllActors } = ActorSlice.actions
