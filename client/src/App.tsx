import { useState } from 'react'
import MainPage from './pages/mainPage'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/navbar/NavBar'
import LogIn from './pages/Registration/LogIn'
import Signup from './pages/Registration/Signup'
import AuthPage from './pages/Registration/AuthPage'
import UserPannel from './pages/UserPages/UserPannel'
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/authorisation" element={<AuthPage />} />
        <Route path="/user-main" element={<UserPannel />} />
      </Routes>
    </>
  )
}

export default App
