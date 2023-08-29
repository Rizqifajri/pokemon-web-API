import React from 'react'
import bolapoke from '../assets/bolapoke.png'
import logopoke from '../assets/logopoke.png'
import face from '../assets/piface.png'

const Header = () => {
  return (
    <div className='bg-yellow-400 min-h-10 py-2 flex justify-between px-5 fixed w-full top-0' >
      
    <div className='w-12 animate-bounce mt-5'>
        <img src={bolapoke} className=""/>
    </div>
    <div className='w-32'>
        <img src={logopoke} alt="" />
    </div>
    
    

      
    
     
     
    </div>
  )
}

export default Header
