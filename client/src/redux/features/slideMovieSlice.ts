import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  index: 0,
}

const slideSlice = createSlice({
  name: 'slid',
  initialState,
  reducers: {
    increment: (state, { payload }: { payload: number }) => {
      console.log(payload, state.index)
      if (state.index > payload - 2) {
        state.index = 0
      } else {
        state.index++
      }
    },
    decrement: (state) => {
      if (state.index <= 0) {
        state.index = 0
      } else {
        state.index--
      }
    },
  },
})

export default slideSlice.reducer

export const { increment, decrement } = slideSlice.actions
