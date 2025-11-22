import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Play from './Pages/Play.jsx'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/play/:id'  element= {<Play/>}/>
      </Routes>
    </>
  )
}

export default App
