import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Camera } from "expo-camera";
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../../constants/deviceInfo";
import useCameraPermissions from "../../hooks/useCameraPermissions";
import Icon from "../../components/Icon";

const MAX_TIMER_SECONDS = 15;
const NewRun = () => {
  const hasPermission = useCameraPermissions();

  const [timer, setTimer] = useState(0);

  const timerUp = () => setTimer((prev) => Math.min(prev + 1, MAX_TIMER_SECONDS));
  const timerDown = () => setTimer((prev) => Math.max(prev - 1, 0));

  return (
    <View style={styles.container}>
      {hasPermission ? <Camera style={styles.camera} /> : <Text>No access to camera</Text>}

      <View style={styles.textView}>
        <Text style={styles.text}>Align the circle with the ball</Text>
      </View>

      <View style={styles.sideBar}>
        <View style={styles.sideBar}>
          <TouchableOpacity onPress={timerUp}>
            <Icon name="clock" size={32} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.ballOutline}></View>
    </View>
  );
};

export default NewRun;

const ballOutlineSize = 50;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: DEVICE_WIDTH,
  },

  camera: {
    flex: 1,
  },

  ballOutline: {
    borderWidth: 5,
    borderColor: "red",
    width: ballOutlineSize,
    height: ballOutlineSize,
    position: "absolute",
    bottom: 50,
    left: DEVICE_WIDTH / 2 - ballOutlineSize / 2,
    borderRadius: 50,
  },

  textView: {
    position: "absolute",
    top: 50,
    width: DEVICE_WIDTH,
  },

  text: {
    color: "white",
    textShadowColor: "black",
    textShadowRadius: 5,
    fontSize: 18,
    textAlign: "center",
  },

  sideBar: {
    backgroundColor: "transparent",
    position: "absolute",
    right: 0,
    width: 50,
    height: DEVICE_HEIGHT,

    justifyContent: "center",
    alignItems: "center",
  },
});
