import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Post from "./src/components/Post";
import Carro from "./src/components/Carro";

let fusca = {
  car: "Fusca",
  brand: "VW",
  hp: 150,
};

let onix = {
  car: "Onix",
  brand: "Chevrolet",
  hp: 200,
};

let civic = {
  car: "Civic",
  brand: "Honda",
  hp: 300,
};

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Carro car={fusca.car} brand={fusca.brand} hp={fusca.hp} />
      <Carro car={onix.car} brand={onix.brand} hp={onix.hp} />
      <Carro car={civic.car} brand={civic.brand} hp={civic.hp} />
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
