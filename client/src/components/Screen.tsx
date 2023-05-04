import React, { useReducer } from 'react'
import { movieData } from '../assets/dummydata/data'
import imbd from '../assets/icons/imdb.png'
import tomato from '../assets/icons/tomato.png'
import RatingComponent from './RatingComponent'
import { motion as m } from 'framer-motion'
import Description from './Description'
import Button from './Button'
import Actors from './Actors'

export type Action = {
  type: string
}
type State = {
  showDec: boolean
  showActors: boolean
}

const Screen = () => {
  const style = {
    screenDiv: `w-[99%] h-[99%]    rounded-[8px] flex items-center justify-between px-2`,
    img: `w-[50%] h-[90%] rounded-[40px]  `,
    btnDiv: `px-20   justify-between flex`,
    btn: `border-b-[1px]  text-[1.4rem] border-black w-[12rem] py-1 font-medium tracking-widest`,

    ratingDiv: `flex gap-5 absolute top-20`,
  }

  const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case 'dec':
        return {
          ...state,
          showDec: state.showDec = true,
          showActors: state.showActors = false,
        }
      case 'actors':
        return {
          ...state,
          showDec: state.showDec = false,
          showActors: state.showActors = true,
        }
      case 'cancel':
        return {
          ...state,
          showDec: state.showDec = false,
          showActors: state.showActors = false,
        }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    showDec: false,
    showActors: false,
  })

  return (
    <div
      className={style.screenDiv}
      style={{
        background: ` ${movieData[0].color}   `,
      }}
    >
      {/* <button onClick={() => console.log(showDec)}>ON CLICK</button> */}
      <div className={style.ratingDiv}>
        <RatingComponent
          img={imbd}
          num={movieData[0].rating.IMDb}
          color={movieData[0].color2}
          secVal={`/10`}
        />
        <RatingComponent
          img={tomato}
          num={movieData[0].rating.RottenTomatos}
          color={movieData[0].color2}
          secVal={`%`}
        />
      </div>
      <div className="flex flex-col justify-around h-[100%] ">
        <h1
          style={{ color: `${movieData[0].color2}` }}
          className="text-center text-[5rem] font-bold tracking-widest"
        >
          {movieData[0].title}
        </h1>
        <div className={style.btnDiv}>
          <Button
            color={movieData[0].color2}
            spec={'border-l-[1px]'}
            title={'Description'}
            clickEvent={dispatch}
            type={'dec'}
          />
          <Button
            color={movieData[0].color2}
            spec={'border-t-[1px]'}
            title={'Title'}
            clickEvent={dispatch}
            type={'cancel'}
          />
          <Button
            color={movieData[0].color2}
            spec={'border-r-[1px]'}
            title={'Actors'}
            clickEvent={dispatch}
            type={'actors'}
          />
        </div>
        {state.showDec && (
          <Description
            dec={movieData[0].dec}
            color1={movieData[0].color}
            color2={movieData[0].color2}
          />
        )}
        {state.showActors && (
          <Actors
            actors={movieData[0].actors}
            color1={movieData[0].color}
            color2={movieData[0].color2}
          />
        )}
      </div>
      <img className={style.img} src={movieData[0].img} />
    </div>
  )
}

export default Screen
