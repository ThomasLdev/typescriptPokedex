import React from 'react';
import { Link } from 'react-router-dom';
import { config } from '@/config';

interface PokemonCardProps {
    pokemon: {
        id: string;
        name: string;
    };
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => (
    <Link to={`/pokemons/${pokemon.id}`} className="bg-slate-100 rounded p-4 hover:shadow-2xl transition-shadow">
        <div className="flex justify-between">
            <span className="text-2xl capitalize">{pokemon.name}</span>
            <span>#{pokemon.id}</span>
        </div>
        <img
            src={config.apiSpriteUrl + pokemon.id + ".png" }
            alt={pokemon.name}
        />
    </Link>
);

export default PokemonCard;