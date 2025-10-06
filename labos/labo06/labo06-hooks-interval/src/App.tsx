import { useEffect, useState } from "react";


const App = () => {

  const [timer, setTimer] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [randomValue, setRandomValue] = useState<number>(0)

  useEffect(() => {
    const handle = setInterval(() => {
      setTimer((timer => timer + 1))
      setCurrentTime(new Date());
      setRandomValue(Math.random())
    }, 1000)

    return () => {
      clearInterval(handle)
    }
  }, [])

  return(
    <>
      <div>timer: {timer}</div>
      <div>current time: {currentTime.toLocaleTimeString().toString()}</div>
      <div>1-100: {Math.ceil(randomValue * 100)}</div>
      <div>100-200: {Math.ceil(randomValue * 100 + 100)}</div>
    </>
  )
}

export default App;