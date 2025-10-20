import { useState } from "react"
import "./App.css"

const App = () => {
 
  const [name, setName] = useState<string>("");
  const [lightStatus, setLightStatus] = useState<boolean>(false);
  const [selectedCar, setSelectedCar] = useState<string>("bmw");
  
  const reset = () => {
    setName("")
  }

  console.log("Render")
  return(
    <>
      <p>Hallo {name}</p>
      <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>

      <input type="checkbox" onChange={(e) => {
        setLightStatus(e.target.checked) 
        console.log("click")
      }} checked={lightStatus} />

      <div style={{width:100, height:100, backgroundColor: lightStatus ? "yellow" : "black"}}>
      </div>
      
      <select onChange={(e) => setSelectedCar(e.target.value)} value={selectedCar}>
        <option value="volvo">volvo</option>         
        <option value="ford">ford</option>         
        <option value="bmw">bmw</option>             
      </select>

      <p>You have selected {selectedCar}</p>

      <button onClick={reset}>Reset</button>
    </>
  )
}

export default App