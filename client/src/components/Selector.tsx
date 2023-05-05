import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { selectorHanddler } from '../redux/features/slideMovieSlice'
import { motion as m } from 'framer-motion'
const Selector = () => {
  const movieData = useSelector((state: any) => state.data.movieData)
  const dispatch = useDispatch()
  const style = {
    mainDiv: `flex absolut flex     w-[100%] justify-end pb-20 px-10 gap-2   `,
    img: `w-[150px] h-[150px] rounded-[10px] cursor-pointer`,
  }
  const i = useSelector((state: any) => state.slide.index)
  const [mouseOver, setMouseOver] = React.useState<boolean[]>(
    new Array(movieData.length).fill(false),
  )
  const mouseIn = (index: number) => {
    let newVal = [...mouseOver]
    newVal[index] = true
    setMouseOver(newVal)
  }
  const mouseOut = (index: number) => {
    let newVal = [...mouseOver]
    newVal[index] = false
    setMouseOver(newVal)
  }
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
              onMouseOver={() => mouseIn(index)}
              onMouseLeave={() => mouseOut(index)}
              animate={{
                scale: i === index ? 1.1 : 1,
                y: i === index ? 0 : 10,
                boxShadow: mouseOver[index]
                  ? `0px 0px 3rem ${val.color2}`
                  : `0px 0px 0.8rem ${val.color2}`,
              }}
              style={{
                borderRadius: '2rem',
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
