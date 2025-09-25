import { useState } from "react"


const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return(
    <div style={{display:"flex", justifyContent: "space-evenly"}}>
      <button onClick={() => setCount(count - 1)}>Omlaag</button>
      <p style={{color: count > 0 ? "green" : (count < 0 ? "red" : "")}}>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Omhoog</button>
    </div>
  )
}

const App = () => {
  return(
    <>
      <Counter/>
      <Counter/>
      <Counter/>
    </>
  )
}

export default App