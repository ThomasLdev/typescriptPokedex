import { useState, useEffect } from 'react';
import { config } from '@/config';

interface Pokemon {
    id: string;
    name: string;
    url: string;
}

const usePokemonList = (limit) => {
    const [list, setList] = useState<Pokemon[]>([]);

    useEffect(() => {
        fetch(config.apiUrl + "pokemon?limit=" + limit)
            .then(response => response.json())
            .then(data => {
                const pokemonList = data.results.map((pokemon: { name: string, url: string }) => {
                    const parts = pokemon.url.split('/');
                    const id = parts[parts.length - 2];
                    return { ...pokemon, id };
                });
                setList(pokemonList);
            });
    }, [limit]);

    return { list };
};

export default usePokemonList;