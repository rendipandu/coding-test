"use client"
import { useState, useEffect } from 'react'
import PokeCard from './PokeCard';

const PokeList = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const response = await fetch('/api/pokemon');
                const data = await response.json();

                setPokemons(data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchPokemons();
    }, []);

    return (
        <div className='pokemons'>
            {pokemons.map((pokemon, index) => (
                <PokeCard key={index} name={pokemon.name} url={pokemon.url} />
            ))}
        </div>
    )
}

export default PokeList;