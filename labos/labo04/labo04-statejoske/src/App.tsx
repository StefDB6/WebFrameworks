import { useState } from "react";
import "./App.css";

const ColorSquare = () => {
  const [color, setColor] = useState<number>(0)
  const colorArr = ["red", "blue", "green"]
  let emotion = ":(";
  let name = "Joske";
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <p><b>{name}</b></p>
      <div className="square" style={{backgroundColor: colorArr[color]}} onClick={() => color < 2 ? setColor(color + 1) : setColor(0)}>
        <p>{emotion}</p>
      </div>
    </div>
  )
}

const App = () => {

  return(
    <>
      <ColorSquare/>
    </>
  )
}

export default App