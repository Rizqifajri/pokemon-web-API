import React from 'react'
import {FaGithub} from 'react-icons/fa'
// import {MdCatchingPokemon} from 'react-icons/md'
import bolapoke from '../assets/bolapoke.png'
import logopoke from '../assets/logopoke.png'


const Header = () => {
  return (
    <div className='bg-yellow-400 min-h-10 py-2 flex justify-between px-5 fixed w-full top-0' >
      
      <div className='w-10'>
      <img src={bolapoke} className=""/>
      </div>
    <div className='w-24'>
    <img src={logopoke} alt="" />
    </div>

      <FaGithub size={35} />
     
     
    </div>
  )
}

export default Header
