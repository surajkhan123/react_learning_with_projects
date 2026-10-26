import React from 'react'

const App = () => {

  // function inputChanging(val) {
  //   console.log(val)
  // }
  function pageScroll(elem){
    console.log('speed:',elem)
  }
  return (
    <div onWheel={(elem)=> {
      pageScroll(elem.deltaY)
    }}>
      {/* <button onClick={()=>{
        console.log('Button Clicked');
      }}>
        Click here
      </button>
      <button onClick={fn}>Hello button</button> */}
      {/* <input onChange={()=>{
        console.log('typing...')
      }} type="text" placeholder='Enter Name:'/> */}
      {/* <input onChange={function(elem){
        console.log(elem.target.value)
      }} type="text" placeholder='Enter Name:'/> */}
      {/* <input onChange={function(elem){
        inputChanging(elem.target.value)
      }} type="text" placeholder='Enter Name:'/> */}

      {/* <div onMouseMove={(elem) =>{
        console.log(elem.clientY)
      }} className='box'> 

      </div>
      */}

      <div className='page1'></div>
      <div className='page2'></div>
      <div className='page3'></div>

    </div>
  )
}

export default App
