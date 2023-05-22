import React from 'react'

const Length = () => {
  const style = {
    input: `w-[2.2rem] outline-none rounded-[5px] px-1   appearance-none `,
    inputDiv: `flex outline-none gap-1`,
    movieLength: `flex flex-col items-center  justify-center gap-2`,
  }
  return (
    <div className={style.movieLength}>
      <h1>Movie Length</h1>
      <div className={style.inputDiv}>
        <input
          type="number"
          className={style.input}
          maxLength={2}
          placeholder="hr"
        />
        <input
          type="number"
          className={style.input}
          maxLength={2}
          placeholder="min"
        />
        <input
          type="number"
          className={style.input}
          maxLength={2}
          placeholder="sec"
        />
      </div>
    </div>
  )
}

export default Length
