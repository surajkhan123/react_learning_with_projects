import axios from 'axios'
import { useState } from 'react'
const App = () => {

  // async function getData() {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')

  //   console.log(response)
  // }

  // const getData = async() => {
  //   const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
  
  //   console.log(data)
  // }
  const [data, setData] = useState([])

  const getData = async ()=>{
    const {data} =await axios.get('https://picsum.photos/v2/list')
    console.log(data)
    setData(data)
  }


  return (
    <div>
      <button onClick={getData}>get Data</button>
      <div>
        {data.map(function(elem,idx){
          return <h3>hello, {elem.author} {idx}</h3>
        })}
      </div>
    </div>
  )
}

export default App
