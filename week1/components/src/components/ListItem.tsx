import React from "react";
import type { Game } from "./types";

interface ListItemProps {
  game : Game;
}

const ListItem = (props: ListItemProps) => {
  return (
    <React.Fragment >
      <h2>{props.game.name} ({props.game.releaseYear})</h2>
      <p>Aantal keer verkocht: {props.game.sales}</p>
    </React.Fragment>
  )
}

export default ListItem