import React from 'react';
import PokemonGrid from "src/components/pokemon/PokemonGrid.tsx";

const PokemonListPage: React.FC = () => {
    return (
        <div>
            <h1>The list of all pokemons</h1>
            <section>
                <PokemonGrid/>
            </section>
        </div>
    );
};

export default PokemonListPage;