import React from 'react';

const Card = ({ name, index}) => {
  return (
    <div className='bg-yellow-500 w-72 h-52 rounded-lg shadow-md p-4 transition-transform duration-300 transform hover:-translate-y-1 hover:shadow-lg'>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`}
        alt={`${name} sprite`}
        className='w-32 h-32 object-contain mx-auto'
      />
      <h2 className='mt-2 text-lg text-gray-800'>{name}</h2>
    </div>
  );
};

export default Card;
