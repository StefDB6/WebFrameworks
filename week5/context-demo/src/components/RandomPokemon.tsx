import { useContext } from "react"
import { PokemonContext } from "../providers/PokemonProvider"

const RandomPokemon = () => {

    const { pokemon } = useContext(PokemonContext)
    
    

    return(
        <>
            { pokemon.length > 0 && <img src={pokemon[Math.floor(Math.random() * pokemon.length)].image}></img>}
        </>
    )
}

export default RandomPokemon