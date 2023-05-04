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
    screenDiv: `w-[99%] h-[99%]    rounded-[8px] flex items-center justify-between px-2`,
    img: `w-[50%] h-[90%] rounded-[40px]  `,
    btnDiv: `px-20   justify-between flex`,
    btn: `border-b-[1px]  text-[1.4rem] border-black w-[12rem] py-1 font-medium tracking-widest`,

    ratingDiv: `flex gap-5 absolute top-20`,
  }

  const [movieData, setmovieData] = React.useState<movieDataType[]>(filmData)
  const dispatchRedux = useDispatch()
  const index = useSelector((state: any) => state.slide.index)
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
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    showDec: false,
    showActors: false,
    showVideo: false,
  })

  return (
    <div
      className={style.screenDiv}
      style={{
        background: ` ${movieData[index].color}   `,
      }}
    >
      {/* <button onClick={() => console.log(index)}>ON CLICK</button> */}
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
      <div className="flex flex-col justify-around h-[100%] ">
        <h1
          style={{ color: `${movieData[index].color2}` }}
          className="text-center text-[5rem] font-bold tracking-widest  h-[200px]"
        >
          {movieData[index].title}
        </h1>
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
      <button
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
      </button>
    </div>
  )
}

export default Screen
