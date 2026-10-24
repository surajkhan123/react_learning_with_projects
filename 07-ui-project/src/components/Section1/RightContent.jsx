import React from 'react'
import RightCard from './RightCard'


const RightContent = (props) => {
  return (
    <div id='right' className='flex flex-nowrap rounded-4xl overflow-x-auto gap-10 h-full p-6 w-2/3'>
      {/* <RightCard/>
      <RightCard/>
      <RightCard/>
      <RightCard/> */}
      {props.users.map(function(elem,idx){
        return <RightCard key={idx} id={idx} color={elem.color} img={elem.img} tag={elem.tag}/>
      })}
      
    </div>
  )
}

export default RightContent
