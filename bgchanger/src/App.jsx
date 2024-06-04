import { useState } from 'react'

import './App.css'

function App() {
 
  const [color, setColor] = useState('red')

  return (
    
     <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      <div className='flex fixed flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-6 shadow-lg  px-3 py-2 rounded-3xl bg-white'>
       
        <button onClick={() => setColor("olive")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg bg-olive-500'>olive</button>
        <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg bg-blue-500'>blue</button>
      </div>

      </div>
     </div>
    
  )
}

export default App
