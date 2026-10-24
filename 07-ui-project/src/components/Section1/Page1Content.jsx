import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='pb-20 pt-6 gap-16 px-18 items-center flex justify-between h-[90vh]'>
     <LeftContent/>
     <RightContent users={props.users}/>
    </div>
  )
}

export default Page1Content
