import React from 'react'
import { topMovieGenres } from '../../assets/dummydata/data'
const MetaData = () => {
  const style = {
    mainDiv: `w-[400px] h-[300px] bg-gray-300 boxshaddow rounded-[10px] flex items-center justify-center`,
    input: `w-[2.2rem] outline-none rounded-[5px] px-1`,
    inputDiv: `flex outline-none gap-1`,
    movieLength: `flex flex-col items-center  justify-center gap-2`,
  }

  const yearArray = Array.from(
    { length: 2024 - 1900 },
    (_, index) => 1900 + index,
  )

  return (
    <div className={style.mainDiv}>
      <div className={style.movieLength}>
        <h1>Movie Length</h1>
        <div className={style.inputDiv}>
          <input className={style.input} maxLength={2} placeholder="hr" />
          <input className={style.input} maxLength={2} placeholder="min" />
          <input className={style.input} maxLength={2} placeholder="sec" />
        </div>
      </div>
    </div>
  )
}

export default MetaData
