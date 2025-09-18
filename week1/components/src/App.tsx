import ColorSquare from "./components/ColorSquare";
import GameList from "./components/GameList";
import type { Game } from "./components/types";

const App = () => {
  const games : Game[] = [
    {
      id: 0,
      name: "World of Warcraft",
      releaseYear: 2004,
      sales: 5
    },
    {
      id: 1,
      name: "Valheim",
      releaseYear: 2021,
      sales: 10
    },
    {
      id: 2,
      name: "Minecraft",
      releaseYear: 2011,
      sales: 20
    }
  ]

  const altGames : Game[] = [
    {
      id: 0,
      name: "Hollow Knight: Silksong",
      releaseYear: 2025,
      sales: 500000
    },
    {
      id: 1,
      name: "Skyrim",
      releaseYear: 2001,
      sales: 212121
    },
    {
      id: 2,
      name: "Trimps",
      releaseYear: 2014,
      sales: 200
    }
  ]
  
  return (
    <>
      <h1>Game List:</h1>
      <GameList games={games}/>
      <h1>Another Game List:</h1>
      <GameList games={altGames}/>

      <ColorSquare/>
      <ColorSquare color="yellow"/>
      <ColorSquare color="green"/>
      <ColorSquare color="blue" size={150}/>
    </>
  );
}
export default App;