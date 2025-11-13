import { Duckie } from "@/types";
import React, { useEffect, useState } from "react";
import { Text, View, Image, ScrollView, FlatList, ActivityIndicator } from "react-native";

const Index = () => {

  const [duckies, setDuckies] = useState<Duckie[]>([])
  const [error, setError] = useState<Error | undefined>(undefined)
  const [loading, setLoading] = useState<boolean>(false)
  const [trigger, setTrigger] = useState<number>(0);

  useEffect(() => {
    let cancelled: boolean = false;
    const fetchDuckies = async () => {
      try {
        setLoading(true)
        const response = await fetch("https://raw.githubusercontent.com/similonap/json/refs/heads/master/duckies/duckies.json")

        if (!response.ok) throw new Error("Fetching duckies failed")

        const duckiesJson: Duckie[] = await response.json();

        if (cancelled) return;

        setDuckies(duckiesJson);
      } catch (e) {
        setError(e as Error)
      } finally {
        setLoading(false)
      }
    }

    fetchDuckies();

    return () => {
      cancelled = true;
    }
  }, [trigger])

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {
        error != undefined ? <Text>{error.message}</Text> : ""
      }

      {/* Independant loading indicator */}
      {/* <ActivityIndicator animating={loading}></ActivityIndicator> */}

      <FlatList
        refreshing={loading}
        onRefresh={() => {setTrigger(trigger => trigger + 1)} }
        data={duckies}
        keyExtractor={duckie => duckie.id}
        renderItem={({ item }) => (
          <View key={item.id}>
            <Text>{item.name}</Text>
            <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
          </View>
        )}
        ListHeaderComponent={<View><Text>Header</Text></View>}
        ListFooterComponent={<View><Text>Footer</Text></View>}

        // horizontal={true} (funny)
      />

      {/* Scrollview is very inefficient, loads all elements in list even if not on screen */}
      {/* <ScrollView horizontal={true}>
        {
          duckies.map((duckie) => (
            <View key={duckie.id}>
              <Text>{duckie.name}</Text>
              <Image source={{uri: duckie.image}} style={{width:100, height:100}}/>
            </View>
          ))
        }
      </ScrollView> */}

    </View>
  );
}

export default Index;