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
        style={styles.container2}
        // blurType="dark"
        // blurAmount={10}
        // reducedTransparencyFallbackColor="white"
      >
        <Text style={styles.text1}>Select your gender</Text>
        <Text style={styles.text2}>Let's get to know each other a little</Text>
        <View style={styles.buttonView}>
          {/* Male */}
          <TouchableOpacity>
            <View style={styles.maleBtnView}>
              <Image
                style={styles.image1}
                source={require("../Images/male.png")}
              />
              <Text style={styles.btnText}>Man</Text>
            </View>
          </TouchableOpacity>
          {/* Female */}
          <TouchableOpacity>
            <View style={styles.femaleBtnView}>
              <Image
                style={styles.image2}
                source={require("../Images/female.png")}
              />
              <Text style={styles.btnText2}>Woman</Text>
            </View>
          </TouchableOpacity>

          {/* Others */}
          <TouchableOpacity>
            <View style={styles.othersView}>
              <Image
                style={styles.image3}
                source={require("../Images/other.png")}
              />
              <Text style={styles.btnText3}>Other</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footerView}>
        <Text style={styles.footerText}>1 FROM 3 QUESTIONS</Text>
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
  container2: {
    flex: 3.5,
    width: "100%",
    backgroundColor: "purple",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  image: {
    width: "100%",
    height: 560,
    position: "absolute",
  },
  text1: {
    textAlign: "center",
    marginTop: 15,
    fontSize: 21,
    fontWeight: "bold",
    color: "white",
  },
  text2: {
    textAlign: "center",
    fontWeight: "700",
    color: "grey",
    marginTop: 8,
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    alignSelf: "center",
  },
  maleBtnView: {
    backgroundColor: "#000",
    height: 140,
    width: 110,
    borderRadius: 20,
    marginRight: 10,
    // marginBottom: -30,
    position: "relative",
  },
  image1: {
    width: "100%",
    height: "100%",
  },
  btnText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
    top: 100,
    position: "absolute",
    left: 0,
    right: 0,
  },
  femaleBtnView: {
    backgroundColor: "#000",
    height: 140,
    width: 110,
    borderRadius: 20,
    marginRight: 10,
    position: "relative",
  },
  image2: {
    width: "100%",
    height: "100%",
  },
  btnText2: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
    position: "absolute",
    top: 100,
    left: 0,
    right: 0,
  },
  othersView: {
    backgroundColor: "#000",
    height: 140,
    width: 110,
    borderRadius: 20,
    position: "relative",
  },
  image3: {
    width: "100%",
    height: "100%",
  },
  btnText3: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
    position: "absolute",
    top: 100,
    left: 0,
    right: 0,
  },
  footerView: {
    flex: 0.5,
    backgroundColor: "black",
  },
  footerText: {
    textAlign: "center",
    marginTop: 6,
    fontWeight: "700",
    color: "grey",
  },
});
