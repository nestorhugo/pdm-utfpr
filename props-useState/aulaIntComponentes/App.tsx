import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Post from "./src/components/Post";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Post author="Nestor" title="Oláaa" content="Teste post" />
      <Post author="Pedro" title="hehhehe" content="alvinho" />
      <Post author="gi" title="gato" content="amo telinho" likes={30000} />
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
