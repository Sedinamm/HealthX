import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";

const IntroScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Image
          style={styles.introImage1}
          source={require("../Images/hx1.png")}
        />
      </View>

      {/* Description */}
      <View>
        <Text style={{ color: "white" }}>
          Hello World This is a Description
        </Text>
      </View>
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  introImage1: {
    height: 450,
    width: 500,
    right: 50,
    top: 50,
  },
});
