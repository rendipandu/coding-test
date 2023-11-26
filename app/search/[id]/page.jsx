"use client"
import { useEffect, useState } from 'react'
import PokeCard from '@/components/PokeCard';

const SearchPage = () => {
    const [pokemons, setPokemons] = useState([]);

    const [searchText, setSearchText] = useState('');
    const [searchTimeout, setSearchTimeout] = useState(null);
    const [searchedResults, setSearchedResults] = useState([]);

    useEffect(() => {
        try {
            const fetchPokemons = async () => {
                const response = await fetch('/api/pokemon');
                const data = await response.json();

                setPokemons(data.data);
            }

            fetchPokemons();
        } catch (error) {
            console.error('Error fetching data:', error);
        }

    }, []);

    const filterPokemons = (searchtext) => {
        const regex = new RegExp(searchtext, "i");
        return pokemons.filter(
            (item) =>
                regex.test(item.name) || regex.test(item.url)
        );
    };

    const handleSearchChange = (e) => {
        clearTimeout(searchTimeout);
        setSearchText(e.target.value);

        // debounce method
        setSearchTimeout(
            setTimeout(() => {
                const searchResult = filterPokemons(e.target.value);
                setSearchedResults(searchResult);
            }, 500)
        );
    };

    return (
        <section className='w-full'>
            <form className='relative w-full flex-center mb-10'>
                <input
                    type="text"
                    placeholder='Search for pokemon'
                    value={searchText}
                    onChange={handleSearchChange}
                    required
                    className='search_input peer'
                />
            </form>

            <div className='pokemons'>
                {searchText ? (
                    searchedResults.map((pokemon, index) => (
                        <PokeCard
                            key={index}
                            name={pokemon.name}
                            url={pokemon.url}
                        />
                    ))
                ) : ''}
            </div>
        </section>
    )
}

export default SearchPage