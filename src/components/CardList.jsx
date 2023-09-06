// CardList.js
import React, { useEffect, useState } from 'react';
import Card from './Card';
import Deskripsi from './Deskripsi'; // Import komponen Deskripsi

const CardList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null); // State untuk pokemon yang dipilih

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setPokemons(data.results);
      })
      .catch(err => {
        console.error("Fetch error:", err);
      });
  }, []);

  // Event handler untuk menangani klik pada kartu
  const handleCardClick = (pokemon) => {
    setSelectedPokemon(pokemon); // Menyimpan pokemon yang dipilih dalam state
  };

  return (
    <div className='font-sans flex flex-wrap justify-center items-center gap-4 px-2 w-[20%] mx-20 my-24 h-screen overflow-hidden pt-24 pb-24 overflow-y-scroll scroll-hide'>
      {pokemons.map((pokemon, index) => (
        <Card
          key={index}
          name={pokemon.name}
          index={index + 1}
          onClick={() => handleCardClick(pokemon)} // Menghubungkan event handler ke Card
        />
      ))}
      
      {/* Menampilkan komponen Deskripsi dengan prop selectedPokemon */}
      {selectedPokemon && (
        <Deskripsi selectedPokemon={selectedPokemon} />
      )}
    </div>
  );
}

export default CardList;
