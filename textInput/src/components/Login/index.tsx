import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  Alert,
  Image,
} from "react-native";
import React from "react";

export default function Login() {
  const [username, onChangeUsername] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: "https://seeklogo.com/images/U/utfpr-universidade-tecnologica-federal-do-parana-logo-6CF2B55F31-seeklogo.com.png",
          }} // substitua pelo URL da sua imagem
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeUsername}
          value={username}
          placeholder="Username"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="Password"
          secureTextEntry={true}
        />
        <Button
          title="Login"
          onPress={() =>
            console.log(`username: ${username},\npassword: ${password}`)
          }
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: 300,
    height: 50,
    margin: 12,
    borderWidth: 1,
    borderColor: "#acaaad",
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: 300,
    height: 110,
    marginBottom: 30,
  },
});
