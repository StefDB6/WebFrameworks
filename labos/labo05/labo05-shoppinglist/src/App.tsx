import { useState } from "react"

interface Item {
  name: string;
  amount: number;
}

const App = () => {

  const [shoppingList, setshoppingList] = useState<Item[]>([])
  const [newItem, setNewItem] = useState<Item>({
    name: "",
    amount: 0
  })
  const [error, setError] = useState<string>("")

  const submitHandler = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    if(newItem.amount <= 0) {
      setError("Amount has to be 1 or more!")
      return
    } else if(newItem.name === "") {
      setError("Item has to have a name!")
      return
    } else {
      console.log("Name: " + newItem.name,"Amount: " + newItem.amount)
      setshoppingList(shoppingList => [...shoppingList, newItem])
      setNewItem(newItem => ({...newItem, name:"", amount:0}))
      setError("")
    }

  }
  return(
    <>
      <form>
        <input type="text" placeholder="name" value={newItem.name} onChange={(e) => setNewItem(newItem => ({...newItem, name:e.target.value}))}/>
        <input type="number" value={newItem.amount} onChange={(e) => setNewItem(newItem => ({...newItem, amount: parseInt(e.target.value)}))}/>
        <button onClick={(e) => submitHandler(e)}>Submit</button>
      </form>

      {
        error ? <p>{error}</p> : error
      }
      <ul>
        {
          shoppingList.map((item, i) => <li key={i}>{item.name} | {item.amount} <button onClick={(e) => setshoppingList(shoppingList => [...shoppingList].filter((_value, index) => i != index))}>remove</button></li>)
        }
      </ul>

    </>
  )
}

export default App