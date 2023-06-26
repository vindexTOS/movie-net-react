import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  reviews: [],
}

const ReviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    getReviews: (state, actions) => {
      state.reviews = actions.payload
    },
  },
})

export default ReviewsSlice.reducer
export const { getReviews } = ReviewsSlice.actions
