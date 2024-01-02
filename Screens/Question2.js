import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Question2 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          paddingLeft: 20,
          paddingRight: 20,
          marginTop: 40,
          justifyContent: "space-between",
        }}
      >
        {/* back button */}
        <TouchableOpacity
          style={{
            height: 50,
            width: 50,
            backgroundColor: "#232227",
            borderRadius: 50,
          }}
        >
          <Ionicons
            name="chevron-back-outline"
            color="white"
            size={32}
            style={styles.backBtn}
          />
        </TouchableOpacity>
        {/* Number count */}
        <View
          style={{
            height: 50,
            width: 50,
            backgroundColor: "#232227",
            borderRadius: 50,
          }}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              marginTop: 15,
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            2/3
          </Text>
        </View>
      </View>

      {/* Question */}
      <View style={{ marginTop: 30 }}>
        <Text
          style={{
            color: "white",
            textAlign: "center",
            justifyContent: "center",
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          What do you seek {"\n"}to achieve?
        </Text>
      </View>

      {/* Buttons */}
      <View style={{ marginTop: 30 }}>
        {/* Question 1 */}
        <TouchableOpacity
          style={{
            height: 120,
            width: 330,
            borderRadius: 20,
            // backgroundColor: "#28b4c6",
            backgroundColor: "rgb(108, 227, 225)",
            alignSelf: "center",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              height: 90,
              width: 90,
              backgroundColor: "white",
              borderRadius: 20,
              alignSelf: "center",
              marginLeft: 10,
            }}
          ></View>
          <Text style={{ color: "black" }}>hello</Text>
          <Text style={{ color: "black" }}>hello</Text>
        </TouchableOpacity>
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
  backBtn: {
    alignSelf: "center",
    marginTop: 5,
  },
});
