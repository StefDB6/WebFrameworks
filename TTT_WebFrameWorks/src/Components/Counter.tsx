import { useEffect, useState } from "react";


const Counter = () => {

    const [counter, setCounter] = useState<number>(0)
    const [paused, setPaused] = useState<boolean>(false)
    const [color, setColor] = useState<string>("green")

    //Dont know why pausing or color doesn work
    useEffect(() => {
        const handle = setInterval(() => {
            if(counter <= 50) {
                setColor("green")
            } else if(counter <= 75) {
                setColor("orange")
            }   else if(counter <= 100) {
                setColor("red")
            }
            setCounter(counter => {
                return paused ? counter : (counter >= 100 ? 0 : counter + 1)
            });
        }, 100);

        return () => {
            clearInterval(handle)
        }
    }, [])

    return(
        <>
            {/* Debug */}
            <p>{paused.toString()}</p>
            
            <button onClick={() => setPaused(true)}>Stop</button>
            <button onClick={() => setPaused(false)}>Start</button>
            <button onClick={() => setCounter(0)}>Reset</button>
            <h1>{counter}</h1>
            <progress value={counter} max={100} style={{ width: '100%', accentColor: color }}></progress>
        </>
    )
}

export default Counter;