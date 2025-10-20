import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, Image, TextInput, Pressable, ImageBackground, useColorScheme } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Open up App.tsx to start working on your app!</Text>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button title='button' onPress={() => alert("YOLO")}>button</Button>

      <Pressable onPress={() => alert("YOLO")} style={styles.image}>
        <Image 
          style={styles.image} 
         source={require("./assets/icon.png")}
        />
      </Pressable>



      <TextInput style={{borderStyle: 'solid'}} onChangeText={(str) => alert(str)}>test</TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  }, 
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button : {
    margin: 10
  },
  image : {
    resizeMode:"contain",
    width: 100,
    height: 100
  }
});

export default App;
