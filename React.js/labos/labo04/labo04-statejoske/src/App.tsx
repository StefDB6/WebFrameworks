import { useState } from "react";
import "./App.css";

const ColorSquare = () => {
  const [color, setColor] = useState<number>(0)
  const colorArr = ["red", "blue", "green"]
  const [name, setName] = useState<string>("Joske")
  const [emotion, setEmotion] = useState<string>(":(")
  const [shape, setShape] = useState<string>("square")
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", borderRadius: 0}}>
      <p><b>{name}</b></p>
      <div className={shape} style={{backgroundColor: colorArr[color]}} onClick={() => color < 2 ? setColor(color + 1) : setColor(0)}>
        <p>{emotion}</p>
      </div>

      <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      <button onClick={() => setName("Joske")}>Reset</button>
      <select onChange={(e) => setEmotion(e.target.value)}>
        <option value=":)">:)</option>
        <option value=":|">:|</option>
        <option value=":(">:(</option>
      </select>
      <input type="checkbox" onChange={() => shape === "square" ? setShape("circle") : setShape("square")}/>
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