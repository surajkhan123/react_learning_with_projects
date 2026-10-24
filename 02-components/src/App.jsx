import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'
// import Card from './components/Card'

const App = () => {

  const name = "Suraj"
  const age  = 25
  return (
    <div>
      {/* <div className='card'>
        <h1>Suraj Khan</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, eum!</p>
      </div>
      {Card()} */}
      <h1>Hello, Friends I'm {name}</h1>
      <h2>and I'm {age} years old</h2>

      <Navbar/>

    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </div>
  )
}

export default App
