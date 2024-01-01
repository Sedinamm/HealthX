import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Question2 = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Back button and Number count */}
      <View>
        {/* back button */}
        <View></View>
        {/* Number count */}
        <View></View>
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
