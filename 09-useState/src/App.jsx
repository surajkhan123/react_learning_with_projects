import React from 'react'
import { useState } from 'react'

const App = () => {

  const[num, setNum] = useState(20)

  function incNum(){
    setNum(num+1)
  }
  function decNum(){
    setNum(num-1)
  }
  function jumpNum(){
    setNum(num+5)
  }
  return (
    <div className='btn'>
      <h1>{num}</h1>
      <button onClick={incNum}>increase</button>
      <button onClick={decNum}>decrease</button>
      <button onClick={jumpNum}>Increase by 5</button>
    </div>
  )
}

export default App
