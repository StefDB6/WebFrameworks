import React from "react";
import { Text, View, StyleSheet, Button, Image, TextInput } from "react-native";

const App = () => {

  const random0To10 = () => {
    return Math.floor(Math.random() * 10)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Het getal is: <Text style={styles.boldText}>{random0To10().toString()}</Text></Text>
      <TextInput secureTextEntry={true} style={styles.textInput} defaultValue="Enter Password" onSubmitEditing={(str) => alert(str)}></TextInput>
      <View style={styles.subView}>
        <Text style={styles.subViewText}>SubView</Text>
      </View>
      <Image source={require("./assets/icon.png")} style={{width:100, height:100, margin:10}}/>
      <Image 
        style={{width: 100, height: 100, margin:10}}
        source={{
          uri: "https://i.pinimg.com/736x/98/16/a5/9816a5f7c4fdb8ba3397f4e2b83cba28.jpg",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff",
    alignItems: 'center',
    justifyContent: "center"
  },
  text : {
    fontSize: 20
  },
  boldText : {
    fontWeight: "bold"
  },
  subView : {
    width: 100,
    borderWidth: 2,
    borderColor: "red",
    padding: 10
  },
  subViewText: {
    backgroundColor: "blue",
    color: "white"
  },
  textInput: {
    borderWidth: 2,
    borderColor: "black",
    width: 200
  }
});

export default App;