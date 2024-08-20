import React, { useEffect, useState } from "react";
import PokemonGridSearch from "src/components/pokemon/PokemonGridSearch.tsx";

interface Pokemon {
    name: string;
    url: string;
}

const PokemonGrid: React.FC = () => {
    const [list, setList] = useState<Pokemon[]>([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
            .then(response => response.json())
            .then(data => setList(data.results));
    }, []);

    return (
        <>
            <PokemonGridSearch />
            <div className="grid grid-cols-2 lg:grid-cols-4">
                {list.map((Pokemon) => {
                    const parts = Pokemon.url.split('/');
                    const id = parts[parts.length - 2];

                    return (
                        <a href="#" key={id} className="bg-slate-100 rounded p-4 m-4 hover:shadow-2xl transition-shadow">
                            <div className="flex justify-between">
                                <span className="text-2xl capitalize">{Pokemon.name}</span>
                                <span>#{id}</span>
                            </div>
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt={Pokemon.name}/>
                        </a>
                    );
                })}
            </div>
        </>
    );
};

export default PokemonGrid;