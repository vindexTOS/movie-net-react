import React from 'react'
import Screen from './Screen'

import { motion as m } from 'framer-motion'
const TVcomponent = () => {
  const style = {
    mainDiv: `w-[100%] h-[100%] gap-20 flex items-start justify-start  rounded-[4px]`,
    screenOutlineDiv: `w-[100%] h-[100%]    bg-[#172a36] rounded-[5px] depthshaddow flex items-center justify-center  p-1 `,
  }

  return (
    <div className={style.mainDiv}>
      <Screen />
    </div>
  )
}

export default TVcomponent
