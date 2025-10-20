import React from "react";
import ColorSquare from "./components/ColorSquare";

const App = () => {

  const colorArray : string[] = [
    "red",
    "green",
    "blue",
    "black",
    "white",
    "pink",
    "yellow",
    "purple",
    "brown",
    "red"
  ];

  const getRandomColor = () => {
    return colorArray[Math.floor(Math.random() * 11)]
  }

  return(
    <>
    {
      Array.from({length:10}, (_, i) => <ColorSquare size={150} color={getRandomColor()}/>)
    }
    </>
  )
}

export default App