import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import { getPassword, getEmail } from '../../redux/features/slices/AuthSlice'
import { Login } from '../../redux/features/Thunks/AuthThunk'
import { useNavigate } from 'react-router-dom'
const LogIn = () => {
  const style = {
    section: ``,
  }
  const navigate = useNavigate()
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

  const { username, password, jwt } = useSelector((state: any) => state.auth)
  const loginhanddler = () => {
    if (username && password) {
      dispatch(Login({ dispatch, password, username }))
      navigate('/user-main')
    }
  }

  return (
    <section className={style.section}>
      <input
        onChange={(e) => dispatch(getEmail(e.target.value))}
        type="email"
        placeholder="email"
      />
      <input
        onChange={(e) => dispatch(getPassword(e.target.value))}
        type="password"
        placeholder="password"
      />
      <button onClick={() => loginhanddler()}>Login</button>
      <h1 onClick={() => console.log(jwt)}>LOG</h1>
    </section>
  )
}

export default LogIn
