import PokemonGridSearch from "@/components/pokemon/PokemonGridSearch.tsx";
import PokemonCard from '@/components/pokemon/PokemonCard';
import usePokemonList from '@/hooks/UsePokemonList';

const PokemonGrid: React.FC = () => {
    const baseLimit = 10;
    const { list } = usePokemonList(baseLimit);

    return (
        <>
            <PokemonGridSearch />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 p-2 lg:p-4">
                {list.map((pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
            <button>
                See more
            </button>
        </>
    );
};

export default PokemonGrid;