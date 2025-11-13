import { Text, View, StyleSheet, ScrollView, FlatList } from "react-native";
// import * as React from "react";
import { HexColor, rainbow } from "rainbow-colors-array-ts";
import Constants from 'expo-constants';
import React, { useState } from "react";

const Index = () => {
  const [colorMode, setColorMode] = useState<boolean>(false)
  const barColor : HexColor[] = rainbow(6, "hex", colorMode)

  const data =   
    Array.from(
      {length: barColor.length}, 
      (_, i) => <Rainbow width={10} height={500} color={barColor[i]} margin={0}/>
    )

  return (
    <View style={styles.container}>
      {/* <View key={barColor[0].hex}>
        {
          Array.from(
            {length: barColor.length}, 
            (_, i) => <Rainbow width={415} height={10} color={barColor[i]} margin={0}/>
          )
        }
      </View> */}
      <FlatList 
        data={data}
        keyExtractor={datatest => datatest.props}
        renderItem={({item, index}) => (
          <Rainbow margin={0} color={barColor[index]} width={415} height={10}/>
        )}
      />
      <ScrollView horizontal={true} >
        <FlatList 
          horizontal={true}
          data={data}
          keyExtractor={datatest => datatest.props}
          renderItem={({item, index}) => (
            <Rainbow margin={0} color={barColor[index]} width={10} height={500}/>
          )}
        />
        <FlatList 
          data={data}
          keyExtractor={datatest => datatest.props}
          renderItem={({item, index}) => (
            <Rainbow margin={10} color={barColor[index]} width={50} height={50}/>
          )}
        />
      </ScrollView>
    </View>
    
  );
}

interface RainbowProps {
  margin: number;
  color : HexColor;
  width: number;
  height: number;
}

const Rainbow = (props: RainbowProps) => {
  return(
    <View style={{width: props.width, height: props.height, backgroundColor:props.color.hex, margin: props.margin}}></View>
  )
}

interface RainbowArrayProps {
  margin: number;
  colorArray : HexColor[];
  width: number;
  height: number;
}

const RainbowArray = (props: RainbowArrayProps) => {
  return(
    <View key={props.colorArray[0].hex} style={{flex: props.colorArray.length, width:props.width}}>
      {
        Array.from(
          {length: props.colorArray.length}, 
          (_, i) => <Rainbow width={props.width} height={props.height} color={props.colorArray[i]} margin={props.margin}/>
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: Constants.statusBarHeight,
  }
});

export default Index;