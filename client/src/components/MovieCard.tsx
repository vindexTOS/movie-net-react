import React, { FC } from 'react'
import { movieDataType } from '../assets/dummydata/data'
const MovieCard: FC<movieDataType> = (data) => {
  const style = {
    mainDiv: ` w-[340px] h-[400px]  flex items-center flex-col rounded-[20px] `,
    img: `w-[90%] h-[80%] rounded-[20px] `,
  }
  return (
    <div className={style.mainDiv} style={{ backgroundColor: data.color2 }}>
      <h1 style={{ color: data.color }}>{data.title}</h1>
      <img
        className={style.img}
        src={data.img}
        style={{ border: `1px solid ${data.color}` }}
      />
    </div>
  )
}

export default MovieCard
