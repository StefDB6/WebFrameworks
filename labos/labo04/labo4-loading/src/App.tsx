import { useState } from "react"


const App = () => {

  const [loading, setLoading] = useState<boolean>(false)

  return(
    <>
      <button onClick={() => {
        setLoading(true)
        setTimeout(() => {
          setLoading(false)
        }, 3000)
      }}>Start Loading</button>
      <div style={{display: loading ? "block" : "none"}}>

        <div style={{height:100, width: 100, backgroundColor:"red"}}/>
        Loading
      </div>
    </>
  )
}

export default App