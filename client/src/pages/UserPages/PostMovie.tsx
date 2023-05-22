import { color } from 'framer-motion'
import React, { useState } from 'react'
import TitleAndDec from './TitleAndDec'
import ImgUpload from './ImgUpload'
import ColorDiv from './ColorDiv'
import { useMainContext } from '../../context'
import MetaData from './MetaData'

const PostMovie = () => {
  const { color1, color2 } = useMainContext()
  const style = {
    mainDiv: `flex flex-col items-center justify-center gap-5 w-[90%] h-[700px]  backdrop-blur-sm bg-white/10 rounded-[12px] boxshaddow`,
    TitleAndImg: `flex`,
  }
  const { htmlImg } = useMainContext()

  return (
    <div
      style={{ backgroundColor: `${color1}`, color: `${color2}` }}
      className={style.mainDiv}
    >
      <h1 className="text-[3rem]">Add A Movie</h1>
      <div className="flex flex-col gap-5">
        <div className={style.TitleAndImg}>
          <TitleAndDec />
          <ImgUpload htmlImg={htmlImg} />
          <MetaData />
        </div>
        <ColorDiv />
      </div>
    </div>
  )
}

export default PostMovie
