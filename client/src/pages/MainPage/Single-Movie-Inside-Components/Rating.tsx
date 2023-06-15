import React, { FC } from 'react'
import IMDbIcon from '../../../assets/icons/imdb.png'
import Tomato from '../../../assets/icons/tomato.png'

type RatingPropType = {
  IMDb: number
  RottenTomatos: number
  color2: string
}

const Rating: FC<RatingPropType> = ({ IMDb, color2, RottenTomatos }) => {
  const style = {
    ratingDiv: `flex items-center justify-between px-10     `,
  }
  return (
    <div className={style.ratingDiv}>
      <div className="flex items-center gap-5 justify-center">
        <img className="w-[100px]" src={IMDbIcon} />{' '}
        <p style={{ color: color2 }} className="text-[2rem]">
          {IMDb}
        </p>
      </div>
      <div className="flex items-center gap-5 justify-center">
        <img className="w-[90px] h-[70px]" src={Tomato} />
        <p style={{ color: color2 }} className="text-[2rem]">
          {RottenTomatos}%
        </p>
      </div>
    </div>
  )
}

export default Rating
