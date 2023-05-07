import React, { FC } from 'react'
import { movieDataType } from '../assets/dummydata/data'
import RatingComponent from './RatingComponent'
import imbd from '../assets/icons/imdb.png'
import { AiOutlineHeart } from 'react-icons/ai'
import tomato from '../assets/icons/tomato.png'
const MovieCard: FC<movieDataType> = (data) => {
  const style = {
    mainDiv: ` relatie w-[360px] h-[600px] relative   flex items-center justify-between flex-col rounded-[20px] rounded-b-[30px] `,
    img: `w-[100%] h-[70%] rounded-t-[20px] `,
    dec: `  absolute bottom-0 blackbg w-[100%] h-[35%] rounded-b-[20px]    `,
  }
  return (
    <div className={style.mainDiv} style={{ backgroundColor: data.color2 }}>
      <div className="  rounded-t-[20px] text-white flex items-end justify-end p-2 px-5  absolute  bg-opacity-10 w-[100%] ">
        <AiOutlineHeart className="text-[2rem] text-white hover:text-pink-600 cursor-pointer " />
      </div>
      <img className={style.img} src={data.img} />

      <div className={style.dec}>
        <h1 className="text-white    text-[1.5rem] pl-3  ">{data.title}</h1>
        <p className="text-white p-4  text-start pl-3 absolute mb-20 w-[100%]  gradiantCardText">
          {data.dec.slice(0, 150)}...
        </p>

        <div className="relative flex top-[8rem] left-[1rem] gap-4">
          <RatingComponent
            img={imbd}
            num={data.rating.IMDb}
            color={data.color2}
            secVal={`/10`}
          />
        </div>
      </div>
    </div>
  )
}

export default MovieCard
