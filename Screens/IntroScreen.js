import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";

const IntroScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Image
          style={styles.introImage1}
          source={require("../Images/hx1.png")}
        />
      </View>

      {/* Description */}
      <View style={styles.descriptionText}>
        <Text style={styles.text}>
          Fitness can{"\n"}be so <Text style={styles.editedText}>easy</Text>
        </Text>
      </View>

      {/* Button */}
      <View style={styles.buttonView}>
        <Text style={styles.buttonText}>Get Started</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Question1");
          }}
          style={styles.button}
        ></TouchableOpacity>
      </View>
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    display: "flex",
    justifyContent: "center",
    // alignItems: "center",
    height: "100vh",
  },
  // Image
  introImage1: {
    height: 430,
    width: 430,
    right: "12%",
  },

  // Text Description
  descriptionText: {
    paddingLeft: 25,
  },
  text: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
  },
  editedText: {
    color: "gold",
    fontStyle: "italic",
  },

  // Button
  buttonView: {
    height: "11%",
    width: "80%",
    backgroundColor: "#232227",
    alignSelf: "center",
    borderRadius: 50,
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // padding: 30,
    paddingRight: 10,
    paddingLeft: 50,
  },

  buttonText: {
    color: "#ffffff",
    marginRight: 10,
    fontSize: 17,
    fontWeight: "700",
  },
  button: {
    height: 60,
    width: 90,
    backgroundColor: "black",
    borderRadius: 40,
  },
});
