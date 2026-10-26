import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')

  const submitHandler =(e)=>{
    e.preventDefault()
    console.log('writing')
    setTitle('')
  }
  return (
    <div>
      <form action="" onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text"

        value={title}
        
        placeholder='Enter your name' onChange={(e)=>{
          setTitle(e.target.value)
          console.log(e.target.value)
        }}/>
        <button>click</button>
      </form>
      
    </div>
  )
}

export default App
