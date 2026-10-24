import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/section2'
import Page1Content from './components/Section1/Page1Content'


const App = () => {

      const users =[
        {
            img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
            intro: '',
            color: '#2563eb',
            tag: 'Satisfied'
        },
        {
            img: 'https://plus.unsplash.com/premium_photo-1661584005925-f27a82cd667a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
            intro: '',
            color: '#16A34A',
            tag: 'Served'
        },
        {
            img: 'https://plus.unsplash.com/premium_photo-1661499894814-552676556099?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
            intro: '',
            color: '#7C3AED',
            tag: 'Underserved'
        },
        {
            img: 'https://plus.unsplash.com/premium_photo-1661723065706-e51b21f413c8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
            intro: '',
            color: '0891B2',
            tag: 'Underbanked'
        },
        {
          img: 'https://plus.unsplash.com/premium_photo-1661722243182-ac6e3f12d879?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
          intro: '',
          color: '#EA580C',
          tag: 'Average'

        }
    ]

  return (
    <div className='py-10 '>
      <Section1 users= {users}/>
      <Section2/>
      
      
    </div>
  )
}

export default App
