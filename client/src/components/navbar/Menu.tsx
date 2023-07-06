import React from 'react'
import { useNavigate } from 'react-router-dom'
const Menu = () => {
  const navigate = useNavigate()

  return (
    <div className="  absolute top-20 right-0  bg-gray-300/50 w-[100vw] h-[100%]    Zindex ">
      <section className="   top-20 right-0 bg-gray-900 flex  flex-col w-[100%] h-[100px]  justify-around">
        <button className="text-white" onClick={() => navigate('/')}>
          HOME
        </button>
        <button className="text-white" onClick={() => navigate('/actors')}>
          ACTORS
        </button>
      </section>
    </div>
  )
}

export default Menu
