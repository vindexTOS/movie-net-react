import React from 'react'
import Auth from './Auth'
import { useNavigate } from 'react-router-dom'
const NavBar = () => {
  const navigate = useNavigate()
  const style = {
    nav: `w-[100%] h-[100px] bg-white bg-opacity-10  flex items-center justify-end px-20`,
  }
  return (
    <nav className={style.nav}>
      <button className="text-white" onClick={() => navigate('/')}>
        HOME
      </button>
      <Auth />
    </nav>
  )
}

export default NavBar
