import React, { FC } from 'react'
import Navbtn from './Navbtn'
import { MdFavorite } from 'react-icons/md'
import { IoMdAdd } from 'react-icons/io'
import { RiLogoutCircleLine } from 'react-icons/ri'
import { LogOut } from '../../redux/features/slices/AuthSlice'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import { CgProfile } from 'react-icons/cg'
import { useNavigate } from 'react-router-dom'
type NavDropDownProp = {
  setDropDown: React.Dispatch<React.SetStateAction<boolean>>
}

const NavDropDown: FC<NavDropDownProp> = ({ setDropDown }) => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
  const style = {
    mainDiv: `w-[300px] py-2 h-[370px] dropdownbg  boxshaddow absolute right-3 top-[6rem] flex flex-col justify-start pt-10 gap-5 items-center px-10   rounded-[20px]`,
  }
  const navigate = useNavigate()
  return (
    <div className={style.mainDiv}>
      <Navbtn
        fun={() => navigate('/user-main')}
        title="Profile"
        Icon={CgProfile}
      />{' '}
      <Navbtn fun={LogOut} title="Add Movie" Icon={IoMdAdd} />{' '}
      <Navbtn fun={LogOut} title="Favorite Movies" Icon={MdFavorite} />
      <button
        onClick={() => {
          dispatch(LogOut()), setDropDown(false)
        }}
      >
        <Navbtn fun={LogOut} title="Log out" Icon={RiLogoutCircleLine} />{' '}
      </button>
    </div>
  )
}

export default NavDropDown
