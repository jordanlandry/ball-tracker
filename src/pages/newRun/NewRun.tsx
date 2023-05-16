import React, { useContext, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";

import { Camera, CameraType } from "expo-camera";
import Icon from "../../components/Icon";
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../../constants/deviceInfo";

import { Store } from "../../../App";
import { BALL_ICONS } from "../../constants/ballIcons";

const MAX_TIMER_SECONDS = 15;
const NewRun = () => {
  const [permission, requestionPermission] = Camera.useCameraPermissions();

  const [timer, setTimer] = useState(0);
  const [cameraType, setCameraType] = useState(CameraType.front);

  const timerUp = () => setTimer((prev) => Math.min(prev + 1, MAX_TIMER_SECONDS));
  const timerDown = () => setTimer((prev) => Math.max(prev - 1, 0));

  const { ballType } = useContext(Store);
  const ballIcon = BALL_ICONS[ballType];

  const [recording, setRecording] = useState(false);

  // TODO: Add a help page and navigation
  const navigatToHelpPage = () => {
    console.log("Help page navigation not implemented");
  };

  const startCamera = () => {
    setRecording(true);
  };

  const toggleCameraType = () => setCameraType((prev) => (prev === CameraType.back ? CameraType.front : CameraType.back));

  return (
    <View style={styles.container}>
      {permission ? (
        <TouchableWithoutFeedback onPress={startCamera}>
          <Camera style={styles.camera} type={cameraType} />
        </TouchableWithoutFeedback>
      ) : (
        <Text>No access to camera</Text>
      )}

      <View style={styles.sideBarWrapper}>
        <View style={styles.sideBar}>
          <TouchableOpacity onPress={toggleCameraType}>
            <Icon name="arrow-repeat" size={32} />
          </TouchableOpacity>
          <TouchableOpacity onPress={navigatToHelpPage}>
            <Icon name="question-mark" size={32} />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.ballOutline}>{ballIcon}</Text>
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
    fontSize: ballOutlineSize,
    position: "absolute",
    bottom: 50,
    left: DEVICE_WIDTH / 2 - ballOutlineSize / 2,
    opacity: 0.7,
    // borderRadius: 50,
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
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 10,
    padding: 10,
    gap: 25,
  },

  sideBarWrapper: {
    backgroundColor: "transparent",
    position: "absolute",
    right: 0,
    width: 50,
    height: DEVICE_HEIGHT,

    top: 50,

    alignItems: "center",
  },

  timerMenu: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 25,
    padding: 25,
    zIndex: 100,
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT / 4,
  },

  timerMenuText: {
    fontSize: 24,
    color: "black",
  },

  timerMenuTextActive: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  timerOutter: {
    position: "absolute",
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 99,
  },
});
