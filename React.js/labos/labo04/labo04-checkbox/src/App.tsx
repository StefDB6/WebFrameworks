import { useState } from "react";

const Checkbox = () => {
  const [inputValue, setInputValue] = useState<boolean>(true);
  return(
    <>
      <input name="checkbox" type="checkbox" checked={inputValue} onChange={(e) => setInputValue(e.target.checked)}/>
      <label htmlFor="checkbox">Show/Hide</label>

      <div style={{display: inputValue ? "block" : "none", height:100, widows:100, backgroundColor:'red'}}></div>
    </>
  )
}

const App = () => {

  console.log("render")
  return(
    <>
      <p>Hallo test</p>
      <Checkbox/>
    </>
  )
}

export default App