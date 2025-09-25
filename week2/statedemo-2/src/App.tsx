import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState<number>(0);
  const [light, setLight] = useState<boolean>(false);
  const buttonHandler : React.MouseEventHandler<HTMLButtonElement> = () => {
    setCounter(counter+1)
    setCounter(counter+1) 
    // Counter isn't updated yet, so counter only increases by 1
    // Counter value is locked in function, so only updates after function completes

    setTimeout(() => {
      setCounter(counter => counter+1)
      setCounter(counter => counter+1)
    }, 250)
    // Makes sure counter gets updated to reflect previous value, increases by 2
  }
  return (
    <>
      <button onClick={buttonHandler}>{counter}</button>

      <input type="checkbox" onChange={() => {
        setLight(light => !light)
        setTimeout(() => {
          setLight(light => !light)
        }, 500)
      }} checked={light}></input>
    </>
  )
}

export default App