import React from 'react'

const App = () => {

  // localStorage.setItem('name','Suraj')
  // localStorage.setItem('user','LG')

  // localStorage.clear()

//   localStorage.setItem('user','suraj')
//  const users = localStorage.getItem('user')
//   localStorage.setItem('age','25') 
//   const age = localStorage.getItem('age')
 
// localStorage.removeItem('age')
//  console.log(users,age)

const user = {
  name: 'suraj',
  age:25,
  role:'software developer'
}

localStorage.setItem('user',user) //storing object form 
// localStorage.setItem('user',JSON.stringify(user)) //storing string form 
console.log(user)

// const user = JSON.parse(localStorage.getItem('user'))
// console.log(user)
  return (
    <div>
      
      
    </div>
  )
}

export default App
