import React, { useReducer } from 'react'
import { filmData, movieDataType } from '../assets/dummydata/data'
import imbd from '../assets/icons/imdb.png'
import tomato from '../assets/icons/tomato.png'
import RatingComponent from './RatingComponent'
import { motion as m } from 'framer-motion'
import Description from './Description'
import Button from './Button'
import Actors from './Actors'
import Video from './Video'
import Selector from './Selector'
import { increment, decrement } from '../redux/features/slideMovieSlice'
import { useDispatch, useSelector } from 'react-redux'

export type Action = {
  type: string
}
type State = {
  showDec: boolean
  showActors: boolean
  showVideo: boolean
}

const Screen = () => {
  const style = {
    screenDiv: `w-[100%] h-[100%]    rounded-[8px] flex flex-col    `,
    img: `w-[30%] h-[500px] rounded-[40px]  `,
    btnDiv: ` gap-10 mt-20 ml-20 items-center justify-between flex`,
    btn: `border-b-[1px]  text-[1.4rem] border-black w-[12rem] py-1 font-medium tracking-widest`,

    ratingDiv: `flex gap-5 absolute top-20 left-40`,
  }

  const dispatchRedux = useDispatch()
  const index = useSelector((state: any) => state.slide.index)
  const movieData = useSelector((state: any) => state.data.movieData)

  const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case 'dec':
        return {
          ...state,
          showDec: state.showDec = true,
          showActors: state.showActors = false,
          showVideo: state.showVideo = false,
        }
      case 'actors':
        return {
          ...state,
          showDec: state.showDec = false,
          showActors: state.showActors = true,
          showVideo: state.showVideo = false,
        }
      case 'video':
        return {
          ...state,
          showDec: state.showDec = false,
          showActors: state.showActors = false,
          showVideo: state.showVideo = true,
        }
      case 'closeall':
        return {
          ...state,
          showDec: state.showDec = false,
          showActors: state.showActors = false,
          showVideo: state.showVideo = false,
        }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    showDec: false,
    showActors: false,
    showVideo: false,
  })
  const titleCheck = state.showDec || state.showActors || state.showVideo
  return (
    <div
      className={style.screenDiv}
      style={{
        background: ` ${movieData[index].color}   `,
      }}
    >
      {/* <button onClick={() => console.log(movieData)}>ON CLICK</button> */}
      <section className=" flex items-center justify-around w-[100%] h-[100%] px-10  ">
        <div className={style.ratingDiv}>
          <RatingComponent
            img={imbd}
            num={movieData[index].rating.IMDb}
            color={movieData[index].color2}
            secVal={`/10`}
          />
          <RatingComponent
            img={tomato}
            num={movieData[index].rating.RottenTomatos}
            color={movieData[index].color2}
            secVal={`%`}
          />
        </div>
        <div className="flex flex-col justify-around items-center h-[100%] ">
          <div className="flex flex-col items-center justify-center mt-20 space-between gap-10">
            <h1
              style={{
                color: titleCheck
                  ? `${movieData[index].color}`
                  : `${movieData[index].color2}`,
              }}
              className={`text-center w-[600px]  mt-5  text-[4rem] font-bold tracking-widest  h-[200px]  `}
            >
              {movieData[index].title}
            </h1>
            <p
              className="text-bold text-[1.5rem] w-[400px] text-center "
              style={{
                color: titleCheck
                  ? `${movieData[index].color}`
                  : `${movieData[index].color2}`,
              }}
            >
              „ {movieData[index].quote}"
            </p>
          </div>
          <div className={style.btnDiv}>
            <Button
              color={movieData[index].color2}
              spec={'border-l-[1px]'}
              title={'Description'}
              clickEvent={dispatch}
              type={'dec'}
            />
            <Button
              color={movieData[index].color2}
              spec={'border-t-[1px]'}
              title={'Video'}
              clickEvent={dispatch}
              type={'video'}
            />
            <Button
              color={movieData[index].color2}
              spec={'border-r-[1px]'}
              title={'Actors'}
              clickEvent={dispatch}
              type={'actors'}
            />
            <Button
              color={movieData[index].color2}
              spec={'border-r-[1px]'}
              title={'Title'}
              clickEvent={dispatch}
              type={'closeall'}
            />
          </div>
          {state.showDec && (
            <Description
              dec={movieData[index].dec}
              color1={movieData[index].color}
              color2={movieData[index].color2}
            />
          )}
          {state.showActors && (
            <Actors
              actors={movieData[index].actors}
              color1={movieData[index].color}
              color2={movieData[index].color2}
            />
          )}
          {state.showVideo && (
            <Video
              video={movieData[index].video}
              color={movieData[index].color2}
            />
          )}
        </div>
        <img className={style.img} src={movieData[index].img} />
        {/* <button
        className="text-black text-[3rem]"
        onClick={() => dispatchRedux(increment(movieData.length))}
      >
        +
      </button>
      <button
        className="text-black text-[3rem]"
        onClick={() => dispatchRedux(decrement())}
      >
        -
      </button> */}
      </section>
      <Selector />
    </div>
  )
}

export default Screen
