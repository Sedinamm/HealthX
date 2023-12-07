import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
// import { BlurView } from "@react-native-community/blur";

const Question1 = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 6 }}>
        <Image style={styles.image} source={require("../Images/mf.jpg")} />
      </View>
      <View
        style={{
          flex: 3.5,
          width: "100%",
          backgroundColor: "purple",
          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
        }}
        // blurType="dark"
        // blurAmount={10}
        // reducedTransparencyFallbackColor="white"
      >
        <Text
          style={{
            textAlign: "center",
            marginTop: 15,
            fontSize: 21,
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
            color: "grey",
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
          {/* Male */}
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: "#000",
                height: 140,
                width: 110,
                borderRadius: 20,
                marginRight: 10,
                // marginBottom: -30,
                position: "relative",
              }}
            >
              <Image
                style={{ width: "100%", height: "100%" }}
                source={require("../Images/male.png")}
              />
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: 16,
                  fontWeight: "700",
                  top: 100,
                  position: "absolute",
                  left: 0,
                  right: 0,
                }}
              >
                Man
              </Text>
            </View>
          </TouchableOpacity>
          {/* Female */}
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: "#000",
                height: 140,
                width: 110,
                borderRadius: 20,
                marginRight: 10,
                position: "relative",
              }}
            >
              <Image
                style={{ width: "100%", height: "100%" }}
                source={require("../Images/female.png")}
              />
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: 16,
                  fontWeight: "700",
                  position: "absolute",
                  top: 100,
                  left: 0,
                  right: 0,
                }}
              >
                Woman
              </Text>
            </View>
          </TouchableOpacity>

          {/* Others */}
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: "#000",
                height: 140,
                width: 110,
                borderRadius: 20,
                position: "relative",
              }}
            >
              <Image
                style={{ width: "100%", height: "100%" }}
                source={require("../Images/other.png")}
              />
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: 16,
                  fontWeight: "700",
                  position: "absolute",
                  top: 100,
                  left: 0,
                  right: 0,
                }}
              >
                Other
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer */}
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
