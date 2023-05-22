import React from 'react'
import Length from './MetaData/Length'
import Genre from './MetaData/Genre'
import Year from './MetaData/Year'
const MetaData = () => {
  const style = {
    mainDiv: `w-[400px] h-[300px]  bg-gray-300 boxshaddow rounded-[10px] flex flex-col items-center justify-center`,
  }

  return (
    <div className={style.mainDiv}>
      <Length />
      <div className="flex gap-2">
        <Year />
        <Genre />
      </div>
    </div>
  )
}

export default MetaData
