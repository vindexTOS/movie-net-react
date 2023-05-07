import { useState } from 'react'
import MainPage from './pages/mainPage'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/navbar/NavBar'
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  )
}

export default App
