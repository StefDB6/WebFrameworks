import { useState } from "react"


const ColorPicker = () => {
  const [color, setColor] = useState<string>("#000000")

  return(
    <>
      <input type="color" onChange={(e) => {setColor(e.target.value)}} value={color}></input>
      <div style={{backgroundColor:color, width:100, height:100}}></div>
      <select name="colors" id="colors" onChange={(e) => {setColor(e.target.value)}}>
        <option value="#000000">#000000</option>
        <option value="#FF0000">#FF0000</option>
        <option value="#00FF00">#00FF00</option>
        <option value="#0000FF">#0000FF</option>
      </select>
    </>
  )
}

const App = () => {

  return(
    <>
      <ColorPicker/>
    </> 
  )
}

export default App