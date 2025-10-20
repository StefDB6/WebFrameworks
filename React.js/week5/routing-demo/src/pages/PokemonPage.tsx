import { useEffect, useState } from "react";
import type { Pokemon } from "../types";
import { Link } from "react-router-dom";


const PokemonPage = () => {

    const [pokemon, setPokemon] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        let ignore = false;

        const fetchPokemon = async() => {
            try{
                const response = await fetch("https://sampleapis.assimilate.be/pokemon/pokemon")
                if(response.ok) {
                    const pokemon : Pokemon[] = await response.json();
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
    }, [])

    return(
        <>
            { loading && <p>Loading...</p>}
            { error && <p>{error.message}</p>}
            { pokemon.length > 0 && (
                <div>
                    <ul>
                        {pokemon.map(poke => <li key={poke.id}><Link to={`/pokemon/${poke.id}`}>{poke.name}</Link></li>)}
                    </ul>
                </div>
            )}
        </>
    )
}

export default PokemonPage