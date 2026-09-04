import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="enter new task" style={styles.textInput} />
        <Button title="submit" />
      </View>
      <View>
        <Text>list of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },

  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  textInput: {
    borderWidth: 2,
    borderColor: "#cccccc",
    borderRadius: 5,
    width: "80%",
    marginRight: 8,
    padding: 8,
  },
});
