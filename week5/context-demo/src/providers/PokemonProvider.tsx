import { createContext, useEffect, useState, type ReactNode } from "react";
import type { Pokemon } from "../types";

interface IPokemonContext {
    pokemon: Pokemon[];
    reload: () => void;
}

export const PokemonContext = createContext<IPokemonContext>({pokemon : [], reload: () => {}});

const PokemonProvider = ({children}: {children : ReactNode}) => {

    const [pokemon, setPokemon] = useState<Pokemon[]>([])
    const [trigger, setTrigger] = useState<number>(0);

    useEffect(() => {
        let ignore = false;

        const fetchPokemon = async() => {
            const response = await fetch("https://sampleapis.assimilate.be/pokemon/pokemon")
            if(response.ok) {
                const pokemon : Pokemon[] = await response.json();
                if(!ignore) {
                    setPokemon(pokemon)
                }
            }
        }
        fetchPokemon();

        return() => {
            ignore = true;
        }
    }, [trigger])

    const reload = () => {
        setTrigger(trigger => trigger + 1)
    }


    return(
        <PokemonContext.Provider value={{pokemon : pokemon, reload: reload}}>
            {children}
        </PokemonContext.Provider>
    )
}

export default PokemonProvider;