import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/cards.jsx'


function App() {
  

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Testing vite with tailwind</h1>
      <Cards username="Alan" /> 
      <Cards /> 
      <Cards /> 
    
    </>
  )
}

export default App
