import React, { FC } from 'react'
import { motion as m } from 'framer-motion'
type DescriptionTypeProps = {
  dec: string
  color1: string
  color2: string
}

const Description: FC<DescriptionTypeProps> = ({ dec, color2, color1 }) => {
  return (
    <m.div
      className="absolute  top-40 p-4 ml-20 text-start font-medium w-[900px]"
      style={{ backgroundColor: `${color1}` }}
    >
      <p style={{ color: color2 }}>{dec}</p>
    </m.div>
  )
}

export default Description
