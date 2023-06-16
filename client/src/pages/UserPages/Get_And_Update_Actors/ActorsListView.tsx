import React from 'react'
import { useSelector } from 'react-redux/es/exports'
import ActorMappedCard from './ActorMappedCard'
export type ActorMapProp = {
  _id: string
  name: string
  img: string
}
const ActorsListView = () => {
  const actorsData = useSelector((state: any) => state.actorsReducer.actorData)
  const style = {
    section: `w-[100%] h-[100vh] flex  items-center justify-center`,
    mainDiv: `py-10 w-[60%]  gridSystem  gap-2 items-center justify-center backdrop-blur-sm bg-white/10 rounded-[12px] boxshaddow    `,
  }
  return (
    <div className={style.mainDiv}>
      {actorsData?.actorsData?.map((val: ActorMapProp) => (
        <ActorMappedCard key={val._id} data={val} />
      ))}
    </div>
  )
}

export default ActorsListView
