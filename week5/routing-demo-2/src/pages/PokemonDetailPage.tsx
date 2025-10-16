import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { PokemonContext } from "../Providers/PokemonProvider";
import type { Pokemon } from "../types";


const PokemonDetailPage = () => {

    const { id } = useParams();

        const pokemonId: number = Math.max(parseInt(id ?? "0"), 1);
        const { loading, error, getPokemonById } = useContext(PokemonContext)
        const pokemon: Pokemon | undefined = getPokemonById(pokemonId)
        
    return(
        <>
            { loading && <p>Loading...</p>}
            { error && <p>{error.message}</p>}
            {pokemon && (
                <div>                
                    <h1>{pokemon.name} ({pokemonId})</h1>
                    <img src={pokemon.image} alt={pokemon.name} />
                    <p>types: <ul>{pokemon.types.map(type => <li>{type}</li>)}</ul></p>
                </div>
            )}
            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", width:"100px"}}>            
                <Link to={`/pokemon/${pokemonId - 1}`}>Previous</Link>
                <Link to={`/pokemon/${pokemonId + 1}`}>Next</Link>
            </div>
        </>
    )
}

export default PokemonDetailPage;