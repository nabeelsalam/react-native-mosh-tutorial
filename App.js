import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Image,
  Button,
  Platform,
} from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";

export default function App() {
  console.log("starting app");
  console.log(useDeviceOrientation());
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity
          onPress={() => {
            console.log("pressed");
          }}
          onLongPress={() => {
            console.log("long press");
          }}
        >
          <Text>Hello to this demo</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Button
          title="Click Me"
          onPress={() => {
            console.log("button pressed");
            alert("Button Clicked");
          }}
        ></Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
