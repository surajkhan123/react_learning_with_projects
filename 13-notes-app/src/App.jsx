import React, { useState } from 'react'
import human from './assets/human.png'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task]

    copyTask.push({ title, details })
    setTask(copyTask)
    

    setTitle('')
    setDetails('')
  }

  const noteDelete = (idx)=>{
    const copyTask = [...task]

    copyTask.splice(idx,1)
    setTask(copyTask)
  }


  return (

    <div className='bg-black h-screen p-10 lg:flex text-white'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='gap-4 lg:w-1/2 p-10 flex flex-col items-start ' >
        <h2 className='text-3xl'>Add Notes</h2>

        <input
          className='border-2 outline-none rounded px-5 w-full py-2' type="text"
          placeholder='Enter Notes Heading'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
           
          }} />

        <textarea
          className='border-2 flex h-32 items-start  outline-none rounded w-full px-5 py-2'
          type="text"
          placeholder='Write Details'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
            
          }}
        />
        <button className='active:scale-95 bg-white outline-none text-black px-5 py-2 w-full rounded '>Add Note</button>
      </form>
      <div className='lg:w-1/2 p-10 lg:border-l-2'>
        <h2 className='text-3xl'>Recent Notes</h2>
        <div className='flex flex-wrap gap-5 items-start justify-start mt-5 h-[90%] overflow-auto'>
          {task.map(function (elem, idx) {
            return <div key={idx} className="flex justify-between flex-col items-start relative h-52 w-40  bg-cover px-3 py-3 rounded-xl text-black p-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
              <div>
                <h3 className='text-lg font-bold leading-tight'>{elem.title}</h3>
                <p className='mt-4 text-sm leadinng-tight font-medium text-gray-500'>{elem.details}</p>
              </div>
              <button
              onClick={()=>{
                noteDelete(idx)
              }}
              className='w-full bg-red-500 text-white rounded font-semibold text-xs py-1 cursor-pointer active:scale-95'>Delete</button>
            </div>
          })}

        </div>
      </div>
      <img src={human} alt="Human" className='rotate-y-180  w-40 h-40 object-contain' />
    </div>
  )
}

export default App
