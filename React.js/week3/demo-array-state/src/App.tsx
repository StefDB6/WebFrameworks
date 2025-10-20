import React, { useState } from "react"

interface Person {
  name:string;
  age:number;
}

const App = () => {

  const[numbers, setNumbers] = useState<number[]>([0, 1, 2, 3, 4, 5, 6]);
  const[number, setNumber] = useState<number>(0);

  const [person, setPerson] = useState<Person>({
    name: "Stef",
    age: 19
  })

  const [selectedDinosaurs, setSelectedDinosaurs] = useState<string[]>([])

  const addNumber = () => {
    setNumbers(numbers => [...numbers, number]);
  }

  const removeNumber = (index: number) => {
    setNumbers(numbers => numbers.filter((_, i) => i !== index));
  }

  const updateNumber = (index: number) => {
    const promptResult = prompt("Enter a number")

    if(promptResult) {
      let newNumber: number = parseInt(promptResult);
      setNumbers(numbers => numbers.map((oldValue, i) => (i === index) ? newNumber : oldValue));
    }
  }

  return(
    <>
      <ul>
        {
          numbers.map((number, i) => (
            <li key={i}>{number} <button onClick={() => removeNumber(i)}>Delete</button> <button onClick={() => updateNumber(i)}>Update</button></li> 
          ))
        }

        <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))}/>
        <button onClick={addNumber}>Add</button>
      </ul>

      <input type="text" value={person.name} onChange={(e) => setPerson(person=>({...person, name: e.target.value}))}/>
      <input type="number" value={person.age} onChange={(e) => setPerson(person=>({...person, age: parseInt(e.target.value)}))}/>

      <p>{person.name}</p>
      <p>{person.age}</p>

      <select multiple value={selectedDinosaurs} onChange={(e) => {
        // setSelectedDinosaurs(Array.from(e.target.selectedOptions).map(option => selectedDinosaurs.push(option.value)))
      }}>
        <option value="Stegosaurus">Stegosaurus</option>
        <option value="T-Rex">Rex</option>
        <option value="Triceratops">Triceratops</option>
        <option value="Raptor">Raptor</option>
      </select>
    
    </>
  )
}

export default App