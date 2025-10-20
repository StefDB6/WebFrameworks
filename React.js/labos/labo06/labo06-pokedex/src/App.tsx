import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

interface Pokemon {
  name:string;
  url:string;
}

const App = () => {

  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [limit, setLimit] = useState<number>(151)

  useEffect(() => {
    const fetchApi = async() => {
      setError("");
      setLoading(true)
      try {
        let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=" + limit)
        if(response.ok) {
          let json = await response.json();
          setPokemon(await json.results);
        } else {
          setError("Error fetching pokemon info")
        }
      } catch (e: any) {
        setError(e.message)
      }
      setLoading(false)
    }
    fetchApi();
  }, [limit])

  return(
    <>
      <input type="number" value={limit} onChange={(e) => {setLimit(Number(e.target.value))}}/>
      <p>{error}</p>
      <BeatLoader loading={loading}/>
      {pokemon && (
        pokemon.map((poke, index) => {
          return(
           <p key={index}>{poke.name}</p>
          )
        })
      )}
    </>
  )
}

export default App;