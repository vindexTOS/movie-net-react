import React, { FC } from 'react'

type InputProps = {
  placeholder: string
  type: string
}

const Input: FC<InputProps> = ({ placeholder, type }) => {
  const style = {
    input: `bg-transparent w-[90%] text-white  rounded-md py-2 px-4 placeholder-white   outline-none   `,
  }
  return (
    <input
      className={style.input}
      type={`${type}`}
      placeholder={`${placeholder}`}
    />
  )
}

export default Input
