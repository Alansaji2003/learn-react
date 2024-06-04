import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  //state
  const [counter, setCounter]= useState(0)

  //function
  const addValue = () => {
    setCounter(counter + 1);
    console.log(counter);
  }
  const subValue = () => {
    setCounter(counter - 1)
    console.log(counter);
  }

  const reset = () => {
    setCounter(0)
    console.log(counter);
  }



  return (
    <>
      <h1>Counter project</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={subValue} >Subtract value</button>
      <button onClick={reset}>Reset value</button>
      <footer>{counter}</footer>
    </>
  )
}

export default App
