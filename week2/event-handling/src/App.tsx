import "./App.css"

const App = () => {
  
  const handleChange = (value: string, index: number) => {
    console.log(`Textbox ${index} changed to ${value}`)
  }

  const handleCheckboxChange = (checked: boolean, index: number) => {
    console.log(`Checkbox ${index} changed to ${checked}`)
  }

  const onSubmit : React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const year = formData.get("year")

    console.log(name, year)
  }
  return (
    <>
      {
        Array.from({length: 10}, (_, i) => <input type="text" onChange={(e) => handleChange(e.target.value, i)}/>)
      }

      {
        Array.from({length: 10}, (_, i) => <input type="checkbox" onChange={(e) => handleCheckboxChange(e.target.checked, i) }/>)
      }

      <select onChange={(e) => console.log(e.target.value)}>
        <option value="volvo">volvo</option>
        <option value="ford">Ford</option>
        <option value="tesla">Tesla</option>
      </select>
      <div>
        <form onSubmit={onSubmit}>
          <input type="text" name="name" id="name"/>

          <input type="number" name="year" id="year"/>

          <button type="submit">Submit</button>
        </form>
      </div>
      <button onClick={() => alert("I was clicked")}>Click me!</button>

    </>
  );
}

export default App;