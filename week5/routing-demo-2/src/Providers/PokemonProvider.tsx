import { createContext, useEffect, useState, type ReactNode } from "react";
import type { Pokemon } from "../types";

interface IPokemonContext{
    pokemon: Pokemon[];
    loading: boolean;
    error: Error | null;
    getPokemonById: (id: number) => (Pokemon | undefined);
}

//export const PokemonContext = createContext<IPokemonContext | undefined>(undefined)
export const PokemonContext = createContext<IPokemonContext>({pokemon: [], loading: false, error: null, getPokemonById: (id: number) => { return undefined }})

const PokemonProvider = ({children} : { children: ReactNode}) => {

    const [pokemon, setPokemon] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    const getPokemonById = (id: number) : Pokemon | undefined => {
        return pokemon.find(p => p.id === id);
    }

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
        <PokemonContext.Provider value={{pokemon, loading, error, getPokemonById}}>
            {children}
        </PokemonContext.Provider>
    )
}

export default PokemonProvider