import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function App() {
  return <ExamplePage />;
}

function ExamplePage() {
  return (
    <View style={styles.container}>
      <Text>Esta é a página de exemplo!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
