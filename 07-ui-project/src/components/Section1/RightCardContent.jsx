import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between'>
        <h2 className=' text-xl font-semibold bg-white rounded-full h-12 w-12 flex justify-center items-center'>{props.id+1}</h2>
        <div>
        <p className='mb-14 text-xl text-shadow-2xs leading-relaxed text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nesciunt possimus magni cum reiciendis. Accusantium.</p>
        <div className='flex justify-between'>
          <button style={{backgroundColor:props.color}} className=' rounded-full font-medium text-white px-7 py-2'>{props.tag}</button>
          <button className='rounded-full  text-white px-3 py-2'><i className='ri-arrow-right-line'></i></button>
        </div>
        </div>
      </div>
  )
}

export default RightCardContent
