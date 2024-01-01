import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
// import { Entypo } from "@expo/vector-icons";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { Ionicons } from "@expo/vector-icons";

const Question2 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{ color: "white" }}>Hello world</Text>
      </View>
    </SafeAreaView>
  );
};

export default Question2;

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: "#000",
  },
});
