import React, { FC } from 'react'
import { BsCalendarDate } from 'react-icons/bs'
import { BiTimeFive } from 'react-icons/bi'
type MetaDataType = {
  year: number
  hr: string
  genre: string
}

const MetaData: FC<MetaDataType> = ({ year, hr, genre }) => {
  const style = {
    metaData: `flex justify-around boxshaddow     items-start  shaddow-md text-[1.1rem]   bg-gray-300/40 w-[100%] text-white p-5 rounded-t-[6px] rounded-b-[20px]`,
    p: `flex items-center justify-center  gap-1 text-[1.2rem]`,
  }
  return (
    <div className={style.metaData}>
      <p className={style.p}>
        Relase Year <span className="text-red-400">{year}</span>
      </p>
      <p className={style.p}>
        Length <span className="text-green-400">{hr}</span>
      </p>
      <p className={style.p}>
        Genere <span className="text-yellow-400">{genre}</span>
      </p>
    </div>
  )
}

export default MetaData
