import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import IntroScreen from "./Screens/IntroScreen";

export default function App() {
  return (
    <View>
      <IntroScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
