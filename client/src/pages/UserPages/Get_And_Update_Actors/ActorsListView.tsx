import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import ActorMappedCard from './ActorMappedCard'
import { GetActors } from '../../../redux/features/Thunks/ActorCrud'
import { ThunkDispatch } from '@reduxjs/toolkit'
export type ActorMapProp = {
  _id: string
  name: string
  img: string
}
const ActorsListView = () => {
  const actorsData = useSelector((state: any) => state.actorsReducer.actorData)
  const style = {
    section: `w-[100%]   h-[100vh] flex  items-center justify-center`,
    mainDiv: `py-10 w-[60%] ZindexMinus max_md:bg-transparent    md:boxshaddow   gridSystem  gap-2 items-center justify-center md:backdrop-blur-sm md:bg-white/10 rounded-[12px]     `,
  }

  return (
    <div onClick={() => console.log(actorsData)} className={style.mainDiv}>
      {actorsData?.actorsData?.map((val: ActorMapProp) => (
        <ActorMappedCard key={val._id} data={val} />
      ))}
    </div>
  )
}

export default ActorsListView
