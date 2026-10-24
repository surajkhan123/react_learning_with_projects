import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      {/*fregments*/}
      <Card user= 'Suraj' age={25} img='https://lh3.googleusercontent.com/a/ACg8ocKCoVr1aS_dluSE4ZYWHgFlf0TeSaVKLJPxYFAjVaN4U01GeDauzA=s288-c-no'/>
      <Card user= 'Salman'age={55} img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Tv_aEgoPbZ1Gj8kATEtRCtJesGu01c-iZFcM_Qms8w&s=10'/>
      <Card user= 'Plane' age={10} img='https://media.istockphoto.com/id/155429973/photo/passenger-jet-airplane-over-clouds.jpg?s=612x612&w=0&k=20&c=d9QuSsiAlXw_FyPD0Ork4zdxori0L3k2Sr44BRlPj90='/>
    </div>
  )
}

export default App
