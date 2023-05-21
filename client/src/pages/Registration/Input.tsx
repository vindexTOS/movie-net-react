import { ThunkDispatch } from '@reduxjs/toolkit'
import React, { FC } from 'react'
import { useDispatch } from 'react-redux'

type InputProps = {
  placeholder: string
  type: string
  fun: (e: string) => void
}

const Input: FC<InputProps> = ({ placeholder, type, fun }) => {
  const style = {
    input: `bg-transparent w-[90%] text-white  rounded-md py-2 px-4 placeholder-white   outline-none   `,
  }

  return (
    <input
      onChange={(e) => fun(e.target.value)}
      className={style.input}
      type={`${type}`}
      placeholder={`${placeholder}`}
    />
  )
}

export default Input
