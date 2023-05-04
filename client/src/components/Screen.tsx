import React from 'react'
import { movieData } from '../assets/dummydata/data'
const Screen = () => {
  const style = {
    screenDiv: `w-[99%] h-[99%]    rounded-[8px] flex items-center justify-center`,
    img: `w-[300px] boxshaddow `,
    video: `boxshaddow `,
  }

  return (
    <div
      className={style.screenDiv}
      style={{ backgroundColor: `${movieData[0].color}` }}
    >
      <img className={style.img} src={movieData[0].img} />
      <h1>{movieData[0].title}</h1>
      <iframe
        className={style.video}
        width="560"
        height="315"
        src={movieData[0].video}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
    </div>
  )
}

export default Screen
