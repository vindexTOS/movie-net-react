import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import {
  getPassword,
  getEmail,
  getCookies,
} from '../../redux/features/slices/AuthSlice'
import { Login } from '../../redux/features/Thunks/AuthThunk'
import { useNavigate, Navigate } from 'react-router-dom'
const LogIn = () => {
  const style = {
    section: ``,
  }
  const navigate = useNavigate()
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
  const userData = useSelector((state: any) => state.auth.userDecoded)

  const { username, password, jwt } = useSelector((state: any) => state.auth)
  const loginhanddler = async () => {
    if (username && password) {
      await dispatch(Login({ dispatch, password, username }))
      dispatch(getCookies())
      navigate('/user-main')
    }
  }

  if (!userData.unique_name) {
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
  } else {
    return <Navigate to="/user-main" />
  }
}

export default LogIn
