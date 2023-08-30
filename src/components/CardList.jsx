import React, {useEffect, useState} from 'react'
import Card from './Card'
import '../App.css'

const CardList = () =>{
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(response => {
      if (response.status !== 200) {
        console.log("Oops..." + response.status);
        return;
      }
      response.json().then(data => {
        setPokemons(data.results);
      });
    })
    .catch(err => {
      console.log(err);
    });
  }, []);

  
  return (
    <div className='font-sans flex flex-wrap justify-center items-center gap-4 px-2 w-[20%] mx-20 my-24 h-screen overflow-hidden pt-24 pb-24 overflow-y-scroll scroll-hide'>
        {pokemons.map((pokemon, index)=>(
        <Card key={index} name={pokemon.name} index={index + 1}/>
        
        ))}
        
      
    </div>
  )
}

export default CardList
