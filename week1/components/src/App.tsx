import React from "react";

interface Game {
  id: number
  name: string,
  releaseYear: number,
  sales: number
}

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

interface Game {
  id: number
  name: string,
  releaseYear: number,
  sales: number
}

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


interface ListItemProps {
  game : Game;
}

interface GameListProps {
  games: Game[];
}

const ListItem = (props: ListItemProps) => {
  return (
    <React.Fragment >
      <h2>{props.game.name} ({props.game.releaseYear})</h2>
      <p>Aantal keer verkocht: {props.game.sales}</p>
    </React.Fragment>
  )
}

const GameList = (props: GameListProps) => {
  return (
    <>
      {props.games.map((game: Game) => 
        <ListItem key={game.id} game={game}/>
      )}
    </>
  );
}

interface ColorSquareProps {
  color? : string;
  size? : number;
}

const ColorSquare = ({size = 100, color = "red"}: ColorSquareProps) => {
  return (
    <div style={{width:size, height:size, backgroundColor: color}}></div>
  )
}

const App = () => {
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