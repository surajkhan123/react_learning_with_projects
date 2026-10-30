
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [userData, setUserData] = useState([])

  const getData = async () => {
    const response = await axios.get(
      'https://picsum.photos/v2/list?page=2&limit=28'
    )

    setUserData(response.data)
    console.log(response.data)
  }

  useEffect(function(){
  getData()
  }, [])

  let printUserData = <h3 className='text-gray-400 text-xs'>NO User Found</h3>

  if(userData.length > 0){
    printUserData = userData.map(function(elem, idx){

      return <div key={idx}>
        <a href={elem.url} target='_blank'></a>
        <div className='h-40 w-44 overflow-hidden rounded-xl'>
          <img className='h-full w-full object-cover' src={elem.download_url} alt="" /></div>
          <h2 className='font-bold text-lg'>{elem.author}</h2>
      </div>
    })
  }

  return(
    <div className='bg-black overflow-auto h-screen p-4 text-white'>
      <div className='flex flex-wrap gap-4'>
        {printUserData}
      </div>

      <div className='gap-4'>
        <button className=' bg-amber-400'>prev</button>
        <button className=' bg-amber-400'>next</button>
      </div>
    </div>
  )

  // return (
  //   <div className="bg-black min-h-screen p-5">
  //     <button
  //       onClick={userData}
  //       className="bg-red-500 text-lg active:scale-95 text-white mb-3 px-5 py-2 rounded"
  //     >
  //       Click Me
  //     </button>

  //     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  //       {user.map((elem, idx) => {
  //         return (
  //           <div 
  //           key={idx}
  //           className='overflow-hidden '
            
  //           >
  //             <img
  //               src={elem.download_url}
  //               alt={elem.author}
  //               className="w-full h-48 object-cover rounded-xl"
  //             />
  //             <p className="text-white">{elem.author}</p>

              
  //           </div>
  //         )
  //       })}
  //     </div>
  //   </div>
  // )
}

export default App
