import React, { useState } from 'react'

const App = () =>{

  const [num,setNum] = useState(0)

  const btnClicked = () =>{
    {/*batch update */}
    setNum(prev => (prev +1))
    setNum(prev => (prev +1))
    setNum(prev => (prev +1))
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )

}

export default App

// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   const [num, setNum] = useState([10,20,30])

//   const btnClicked = () =>{
//     const newNum = [...num]
//     newNum.push(50)
//     setNum(newNum)
//   }
//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={btnClicked}>click</button>
      
//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'

// const App = () => {

//   const [num, setNum] = useState({user: 'Suraj', age:25})

//   const btnClicked = () =>{
//     const newNum = {...num}
//     newNum.user = 'Salman'
//     newNum.age = 24
//     setNum(newNum)
//   }


//   return (
//     <div>
//       <h1>{num.user}, {num.age}</h1>
//       <button onClick={btnClicked}>click</button>
//     </div>
//   )
// }

// export default App
