import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';

// Define the structure of our Pokemon data
interface PokemonData {
    id: number;
    name: string;
    height: number;
    weight: number;
    types: Array<{
        type: {
            name: string;
        }
    }>;
    abilities: Array<{
        ability: {
            name: string;
        }
    }>;
    moves: Array<{
        move: {
            name: string;
        }
    }>;
    stats: Array<{
        base_stat: number;
        effort: number;
        stat: {
            name: string;
        }
    }>;
}

const PokemonDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPokemonData = async () => {
            if (!id) return;

            setIsLoading(true);
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
                if (!response.ok) {
                    throw new Error('Pokemon not found');
                }
                const data: PokemonData = await response.json();
                setPokemonData(data);
                console.table(data);
                setError(null);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
                setPokemonData(null);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPokemonData();
    }, [id]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!pokemonData) {
        return <div>No pokemon data found</div>;
    }

    return (
        <div>
            <Link to="/pokemons">Back to list</Link>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                alt={pokemonData.name}/>
            <h1>{pokemonData.name}</h1>
            <p>ID: {pokemonData.id}</p>
            <p>Height: {pokemonData.height}</p>
            <p>Weight: {pokemonData.weight}</p>
            <p>Types: {pokemonData.types.map(t => t.type.name).join(', ')}</p>
            <p>Abilities: {pokemonData.abilities.map(t => t.ability.name).join(', ')}</p>
            <p>Moves: {pokemonData.moves.map(t => t.move.name).join(', ')}</p>

            <table>
                <thead>
                <tr>
                    <th>Stat</th>
                    <th>Base Stat</th>
                    <th>Effort</th>
                </tr>
                </thead>
                <tbody>
                {pokemonData.stats.map((Stat) => {
                    return (
                        <tr key={Stat.stat.name}>
                            <td>{Stat.stat.name}</td>
                            <td>{Stat.base_stat}</td>
                            <td>{Stat.effort}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
};

export default PokemonDetail;