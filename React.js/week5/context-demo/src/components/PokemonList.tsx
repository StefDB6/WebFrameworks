    import { useContext } from "react"
    import { PokemonContext } from "../providers/PokemonProvider"

    const PokemonList = () => {
        const { pokemon } = useContext(PokemonContext)

        return(
            <>
                <ul>
                    {pokemon.map(poke => <li key={poke.id}>{poke.name}</li>)}
                </ul>
            </>
        )
    }

    export default PokemonList