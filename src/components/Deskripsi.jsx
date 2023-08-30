import React from 'react'
import char from '../assets/char.gif'
import element from '../assets/petirpng.png'

const Deskripsi = () => {
  return (
    <div className='bg-yellow-300 shadow-2xl bg-opacity-25 w-[500px] p-4 h-auto mt-24 rounded-lg font-bold text-6xl text-center'>
      <h1>PikaChu</h1>
      <p className='font-normal text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta accusantium odio tenetur rerum minus consectetur. Illum beatae error obcaecati voluptatibus enim doloremque, nemo, nesciunt, incidunt perferendis similique eaque suscipit et!</p>
      
    <div className='w-24 h-24 mt-10 p-3 gap-4 text-sm flex items-center'>
      <img src={char} alt="" />PikaChu
      
    </div>

    <div className='w-14 ml-4  gap-6 text-sm flex items-center'>
    <img src={element} alt="" /> Lightning
    </div>
      
    </div>
  )
}

export default Deskripsi
