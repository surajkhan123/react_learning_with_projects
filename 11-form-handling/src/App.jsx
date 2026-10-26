import React from 'react'

const App = () => {

  const submitHandler = (e) => {
    console.log('Form submitted')

  }
  return (
    <div>
      <form onSubmit={(e)=>{
        e.preventDefault()
        submitHandler(e)
      }}>
        <input type="text" placeholder='Enter your Name'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
App