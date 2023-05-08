import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion as m } from 'framer-motion'
type buttonProps = {
  title: string
  styling: string
  link: string
  color: string
}
const ButtonComponent: FC<buttonProps> = ({ title, styling, link, color }) => {
  const style = {
    mainDiv: `w-[14rem] h-[5rem] max_smd:w-[9rem]  max_smm:w-[6rem]  max_smm:h-[3rem]  cursor-pointer rounded-[100px] flex items-center justify-center ${styling} `,
  }
  const [hover, setHover] = React.useState<boolean>(false)
  const navigate = useNavigate()
  return (
    <m.div
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      initial={{
        outlineWidth: 0,
      }}
      animate={{
        y: [4, 2, 0, -2, -4, -2, 0, 2],
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: 'linear',
      }}
      style={{
        padding: '1rem',
        border: 'none',
        outline: 'none',
        borderRadius: '4rem',
        boxShadow: `0 0.25rem 0.5rem ${color}`,

        borderColor: `${color}`,
        backgroundColor: hover ? color : styling,
      }}
      className={style.mainDiv}
      onClick={() => navigate(link)}
    >
      <h2
        className={` text-[2rem] text-white font-bolder max_smm:text-[12px] max_smd:text-[1.5rem] `}
      >
        {title}
      </h2>
    </m.div>
  )
}

export default ButtonComponent
