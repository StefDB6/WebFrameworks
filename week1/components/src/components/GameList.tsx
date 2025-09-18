import ListItem from "./ListItem";
import type {Game} from "./types"

interface GameListProps {
  games: Game[];
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

export default GameList