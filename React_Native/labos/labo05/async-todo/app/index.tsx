import React, { useEffect, useState } from "react";
import { Button, KeyboardAvoidingView, Pressable, Text, TextInput, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"


interface Todo {
  id: number;
  title: string;
  completed: boolean;
  dateCompleted: Date | undefined;
}

const Index = () => {
  const [maxId, setMaxId] = useState<number>(0)
  const [tempTodo, setTempTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (title:string) => {
    const todosCpy : Todo[] = [...todos]
    setMaxId(maxId => maxId + 1)
    todosCpy.push({title, dateCompleted: undefined, id: maxId, completed: false})
    setTodos([...todosCpy])
  }

  useEffect(() => {
    const getData = async () => {
      const value : string | null = await AsyncStorage.getItem("todos");
      if (value !== null) {
        let todos : Todo[] = JSON.parse(value);
        setTodos(todos)
      } else {
        alert("No Data found");
      }
    };
    getData();
  }, [])

  useEffect(() => {
    const storeData = async() => {
      await AsyncStorage.setItem("todos", JSON.stringify(todos));
    }
    storeData();
  }, [todos])

  const completeTodo = async(id:number) => {
    const todosCpy : Todo[] = todos.map(todo => {
      if(todo.id === id) {
        return {...todo, dateCompleted: new Date(), completed: true}
      } else {
        return todo;
      }
    })
    setTodos(todos => todos = [...todosCpy])
  }

  const removeTodo = async(id:number) => {
    const todosCpy : Todo[] = todos
    const index : number = todosCpy.findIndex(todo => todo.id === id)
    todosCpy.splice(index, 1)
    setTodos(todos => todos = [...todosCpy])
  }

  return (
    <KeyboardAvoidingView
      style={{
        height: "auto",
        margin: 30,
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
      behavior='padding'
    >
      <View>
      {
        todos.map((todo) => 
          <Pressable 
            key={todo.id} 
            onPress={() => completeTodo(todo.id)} 
            onLongPress={() => removeTodo(todo.id)}
            style={{backgroundColor:"lightblue", width: 250, alignItems:'center', marginBottom:10}}
          >  
            <View style={{width:'auto'}} >
              <Text style={{textDecorationLine: todo.completed ? "line-through" : "none"}}>{todo.title}</Text>
              {
                todo.dateCompleted !== undefined ? todo.dateCompleted.toDateString !== undefined ?
                <Text>Todo completed on {todo.dateCompleted.toDateString()}</Text> : null :
                <Text></Text>
              }
            </View>
          </Pressable>
        )
      }
      </View>

      <View
        style={{
          maxHeight: 70,
          flex:1,
          flexDirection: "row",
          justifyContent: "space-evenly"
        }}
      >
        <TextInput placeholder="Add your todo:" onChangeText={(value) => setTempTodo(value)} style={{padding:20}}></TextInput>
        <Button title="Add Item"  onPress={() => addTodo(tempTodo)}></Button>
      </View>
    </KeyboardAvoidingView>
  );
}

export default Index;