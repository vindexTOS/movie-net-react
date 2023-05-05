import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { selectorHanddler } from '../redux/features/slideMovieSlice'
import { motion as m } from 'framer-motion'
const Selector = () => {
  const movieData = useSelector((state: any) => state.data.movieData)
  const dispatch = useDispatch()
  const style = {
    mainDiv: `flex absolut flex  w-[100%] justify-end pb-20 px-10 gap-2   `,
    img: `w-[140px] h-[100px] rounded-[30px]`,
  }
  const i = useSelector((state: any) => state.slide.index)
  return (
    <m.div className={style.mainDiv}>
      {movieData.map((val: any, index: number) => {
        return (
          <m.div
            key={movieData.color1}
            onClick={() => dispatch(selectorHanddler(index))}
            style={{
              zIndex: i === index ? 50 : 10,
              //   position: i === index ? 'absolute' : '',
            }}
          >
            <m.img
              animate={{
                scale: i === index ? 1.1 : 1,
                y: i === index ? 0 : 10,
              }}
              style={{
                borderRadius: '0.5rem',
                boxShadow: `0px 0px 0.8rem ${val.color2}`,
                zIndex: i === index ? 50 : 10,
              }}
              className={style.img}
              src={val.img}
            />
          </m.div>
        )
      })}
    </m.div>
  )
}

export default Selector
