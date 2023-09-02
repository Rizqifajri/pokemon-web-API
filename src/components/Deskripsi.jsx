import React from 'react'
import char from '../assets/char.gif'
import element from '../assets/petirpng.png'

const Deskripsi = () => {
  return (
    <div className='bg-yellow-300 shadow-2xl bg-opacity-25 w-[500px] p-4 h-auto mt-24 rounded-lg font-bold text-6xl text-center'>
      <h1 className='poppins-font'>PikaChu</h1>
      
      <div className='flex flex-col items-center '>
        <img src={char} alt="" className='w-24 h-20 text-sm font-bold mt-10 p-3 gap-4 text-sm flex justify-center'/>
        <p className='text-sm mt-2'>PikaChu</p>
      </div>

      <div className='flex flex-col items-center mt-10'>
        <img src={element} alt="" className='w-14 gap-6 text-sm flex justify-center'/> 
        <p className='text-sm mt-5'>Lightning</p>
      </div>
    
      <p className='font-normal text-sm mt-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta accusantium odio tenetur rerum minus consectetur. Illum beatae error obcaecati voluptatibus enim doloremque, nemo, nesciunt, incidunt perferendis similique eaque suscipit et!</p>
    </div>
  )
}

export default Deskripsi
