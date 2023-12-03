import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import video from "react-native-video";

const IntroScreen = () => {
  return (
    <View>
      <Video
        source={require("../assets/1080p.mp4")}
        style={styles.backgroundVideo}
        volume={1.0}
        muted={false}
        resizeMode={"cover"}
        rate={1.0}
        ignoreSilentSwitch={"obey"}
      />
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
