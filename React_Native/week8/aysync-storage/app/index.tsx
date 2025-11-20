
import { Text, View, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react";

interface Item {
  id: number;
  price:number;
  name: string;
  amount: number;
}

const items: Item[] = [
  {id:0, price:10, name:"cursor", amount:0},
  {id:1, price:50, name:"grandma", amount:0},
  {id:2, price:500, name:"farm", amount:0},
  {id:3, price:1000, name:"factory", amount:0},
  {id:4, price:5000, name:"bank", amount:0},
]

const Index = () => {

  const [inventory, setInventory] = useState<Item[]>(items)
  const [counter, setCounter] = useState<number>(0)

  useEffect(() => {
    const cb = setInterval(() => {
      setCounter(counter => counter + 1)
    }, 500)

    return () => {
      clearInterval(cb)
    }
  }, [])

  useEffect(() => {
    const storeData = async() => {
      await AsyncStorage.setItem("inventory", JSON.stringify(inventory));
    }
    storeData()
  }, [inventory])

  const storeDataName = async() => {
    await AsyncStorage.setItem("name", "Jon Doe");
  }
  
  const loadData = async() => {
    const value = await AsyncStorage.getItem("name");
    if(value !== null){
      alert(value)
    } else {
      alert("No Data Found")
    }
    const inventory = await AsyncStorage.getItem("inventory")
    if (inventory !== null) {
      setInventory(JSON.parse(inventory))
    }
  }

  const buyItem = (id:number) => {
    const inventoryCpy : Item[] = inventory.map(item => {
      if(item.id === id) {
        return {...item, amount: item.amount + 1}
      } else {
        return item;
      }
    })
    let foundItem = items.find(item => item.id === id)
    if(foundItem) {
      setCounter(counter => counter - foundItem.price)
    }
    setInventory([...inventoryCpy])
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        <Text>Async Storage.</Text>
        <Button title="Store data" onPress={storeDataName}></Button>
        <Button title="Load data" onPress={loadData}></Button>

        <Button title={counter.toString()}></Button>
      </View>
      <View>
        {
          items.map(item => 
            <Button key={item.id} title={`${item.name}: (${item.price}) Owned: ${item.amount}`} onPress={() => buyItem(item.id)}></Button>
          )
        }
      </View>
    </View>


  );
}

export default Index;