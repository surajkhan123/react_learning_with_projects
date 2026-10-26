import React from 'react'

const App = () => {

  async function getData(){
    const response =await fetch('https://jsonplaceholder.typicode.com/posts/1')

  console.log(response)
  }

  return (
    <div>
      <button onClick={getData}>get Data</button>
    </div>
  )
}

export default App
