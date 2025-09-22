import { useState } from "react";

const InputField = () => {
  const [inputValue, setInputValue] = useState<string>();

  return(
    <div>
      {
        Array.from({length:5}, (_, i)=> <input onChange={(e) => setInputValue(e.target.value)} value={inputValue}/>)
      }
    </div>
  )
}

const App = () => {

  return(
    <>
      <InputField/>
    </>
  )
}

export default App