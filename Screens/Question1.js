import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const Question1 = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 6 }}>
        <Image style={styles.image} source={require("../Images/mw.jpg")} />
      </View>
      <View
        style={{
          flex: 3.5,
          width: "100%",
          backgroundColor: "red",
          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            marginTop: 15,
            fontSize: 22,
            fontWeight: "bold",
            color: "white",
          }}
        >
          Select your gender
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "700",
            color: "white",
            marginTop: 8,
          }}
        >
          Let's get to know each other a little
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
            alignSelf: "center",
          }}
        >
          <TouchableOpacity>
            {/* Male */}
            <View
              style={{
                backgroundColor: "#000",
                height: 140,
                width: 110,
                borderRadius: 20,
                marginRight: 10,
              }}
            >
              <Image
                style={{ width: "130%", height: "120%" }}
                source={require("../Images/male.png")}
              />
              <Text style={{ color: "white" }}>Male</Text>
            </View>
          </TouchableOpacity>
          {/* Female */}
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: "#232227",
                height: 140,
                width: 110,
                borderRadius: 20,
                marginRight: 10,
              }}
            ></View>
          </TouchableOpacity>
          {/* Others */}
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: "#232227",
                height: 140,
                width: 110,
                borderRadius: 20,
              }}
            ></View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 0.5, backgroundColor: "black" }}>
        <Text
          style={{
            textAlign: "center",
            marginTop: 6,
            fontWeight: "700",
            color: "grey",
          }}
        >
          1 FROM 3 QUESTIONS
        </Text>
      </View>
    </View>
  );
};

export default Question1;

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: "#000",
  },
  image: {
    width: 360,
    height: 550,
    position: "absolute",
  },
});
