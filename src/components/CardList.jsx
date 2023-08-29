import React from 'react'
import Card from './Card'
import '../App.css'

const CardList = () => {
  return (
    <div className='flex flex-wrap justify-center items-center gap-4 px-2 w-[20%] mx-20 h-screen overflow-hidden pt-24 pb-24 overflow-y-scroll scroll-hide'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        
        
      
    </div>
  )
}

export default CardList
