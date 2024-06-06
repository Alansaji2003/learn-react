import { useState } from 'react'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'
import UserContextProvider from './context/userContextProvider.jsx'
import './App.css'

function App() {
  
//all components that are wrapped in the userContextProvider will have access to the user and setUser (are aware of the context)
  return (
    <UserContextProvider>
      <h1>ContextAPI</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
