import { useContext } from "react";
import { Link } from "react-router-dom";
import { PokemonContext } from "../Providers/PokemonProvider";


const PokemonPage = () => {

    const { loading, error, pokemon } = useContext(PokemonContext)

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