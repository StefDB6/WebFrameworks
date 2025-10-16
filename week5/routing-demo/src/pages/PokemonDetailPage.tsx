import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import type { Pokemon } from "../types";


const PokemonDetailPage = () => {

    const { id } = useParams();

        const pokemonId: number = Math.max(parseInt(id ?? "0"), 1);
        const [pokemon, setPokemon] = useState<Pokemon | undefined>();
        const [loading, setLoading] = useState<boolean>(false);
        const [error, setError] = useState<Error | null>(null);
    
        useEffect(() => {
            let ignore = false;
    
            const fetchPokemon = async() => {
                try{
                    const response = await fetch(`https://sampleapis.assimilate.be/pokemon/pokemon/${id}`)
                    if(response.ok) {
                        const pokemon : Pokemon = await response.json();
                        if (ignore) return;
                        setPokemon(pokemon)
                    } else {
                            throw new Error(response.statusText);
                    }
                } catch (e) {
                    setError(e as Error);
                } finally {
                    setLoading(false);
                }
    
            }
            fetchPokemon();
    
            return() => {
                ignore = true;
            }
        }, [id])
        
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