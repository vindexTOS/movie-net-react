import React from 'react'
import { GetReviews } from '../../../../redux/features/Thunks/ReviewsCrud'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'

const ReviewsMain = ({ id }: { id: string }) => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
  const reviews = useSelector((state: any) => state.reviews.reviews)

  React.useEffect(() => {
    if (id !== 'asfasf') {
      dispatch(GetReviews({ dispatch, movieId: id }))
    }
    console.log(id)
  }, [id])
  return <div></div>
}

export default ReviewsMain
