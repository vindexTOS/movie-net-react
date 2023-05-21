import React, { useEffect } from 'react'
import { getCookies, LogOut } from '../../redux/features/slices/AuthSlice'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'
const UserPannel = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      dispatch(getCookies())
    }, 1000)
  }, [])
  const hanndleLogout = () => {
    dispatch(LogOut())
    navigate('/login')
  }
  const userData = useSelector((state: any) => state.auth.userDecoded)
  if (userData && userData.unique_name) {
    return (
      <div className="w-[100%] h-[100vh] flex-col flex items-center justify-center">
        <h1 className="text-white text-[4rem]"> {userData.unique_name}</h1>
        <button
          className="text-red-600 text-[2rem]"
          onClick={() => hanndleLogout()}
        >
          LOG OUT
        </button>
      </div>
    )
  } else {
    return <div>Loading</div>
  }
}

export default UserPannel
