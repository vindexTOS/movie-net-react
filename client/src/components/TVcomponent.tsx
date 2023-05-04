import React from 'react'
import Screen from './Screen'
import { motion as m } from 'framer-motion'
const TVcomponent = () => {
  const style = {
    mainDiv: `w-[70%] h-[80%]   flex   pt-10 justify-center bg-[#151d22] rounded-[4px]`,
    screenOutlineDiv: `w-[90%] h-[90%]    bg-[#172a36] rounded-[5px] depthshaddow flex items-center justify-center  p-1 `,
  }

  return (
    <div className={style.mainDiv}>
      <m.div
        animate={{
          backgroundColor: ['#82f5f1', '#befaf8', '#59fff9'],
          boxShadow: ['0 0 10px #fff', '0 0 10px #befaf8', '0 0 10px #fff'],
        }}
        transition={{ duration: 2, times: [0, 0.5, 1], repeat: Infinity }}
        className={style.screenOutlineDiv}
      >
        <Screen />
      </m.div>
    </div>
  )
}

export default TVcomponent
