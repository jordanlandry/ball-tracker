import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";

import { Camera, CameraType } from "expo-camera";

import Icon from "../../components/Icon";
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../../constants/deviceInfo";

import { Store } from "../../../App";
import { BALL_ICONS } from "../../constants/ballIcons";

import Test from "../../components/Test";
import formatToTime from "../../helpers/formatToTime";

const NewRun = () => {
  const [permission, requestionPermission] = Camera.useCameraPermissions();
  const [cameraType, setCameraType] = useState(CameraType.front);

  const [cameraRef, setCameraRef] = useState<Camera | null>(null);
  const [videoUri, setVideoUri] = useState<string | null>(null);

  const [timer, setTimer] = useState(0);

  const { ballType } = useContext(Store);
  const ballIcon = BALL_ICONS[ballType];

  const [recording, setRecording] = useState(false);

  // TODO: Add a help page and navigation
  const navigatToHelpPage = () => {
    console.log("Help page navigation not implemented");
  };

  const [showVideo, setShowVideo] = useState(false);

  const handleRecordButtonPress = () => {
    setRecording((alreadyRecording) => {
      if (alreadyRecording) {
        stopRecording();
        return false;
      }

      // Start recording
      else {
        startRecording();
        return true;
      }
    });
  };

  const startRecording = async () => {
    if (!cameraRef) {
      setRecording(false);
      console.error("Camera ref not set");
      return;
    }

    try {
      const { uri } = await cameraRef.recordAsync();
      setVideoUri(uri);
    } catch (error) {
      console.error(error);
    }
  };

  const stopRecording = () => {
    if (!cameraRef) {
      console.error("Camera ref not set");
      return;
    }

    cameraRef.stopRecording();
    setShowVideo(true);
  };

  const [timerInterval, setTimerInterval] = useState<NodeJS.Timeout | null>(null);
  useEffect(() => {
    if (recording) setTimerInterval(setInterval(() => setTimer((prev) => prev + 1), 1000));
    else {
      if (timerInterval) {
        clearInterval(timerInterval);
        setTimerInterval(null);
      }
    }

    return () => {
      if (timerInterval) {
        clearInterval(timerInterval);
        setTimerInterval(null);
      }
    };
  }, [recording]);

  // Change from back or front camera
  const toggleCameraType = () => setCameraType((prev) => (prev === CameraType.back ? CameraType.front : CameraType.back));

  return (
    <>
      {!showVideo ? (
        <View style={styles.container}>
          {permission ? (
            <TouchableWithoutFeedback onPress={handleRecordButtonPress}>
              <Camera style={styles.camera} type={cameraType} ref={(ref) => setCameraRef(ref)} />
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

          <View style={[styles.timer, { backgroundColor: recording ? "rgba(255, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.5)" }]}>
            <Text style={styles.timerText}>{formatToTime(timer)}</Text>
          </View>

          <Text style={styles.ballOutline}>{ballIcon}</Text>
        </View>
      ) : (
        <Test videoUri={videoUri!} />
      )}
    </>
  );
};

export default NewRun;

const ballOutlineSize = 50;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: DEVICE_WIDTH,
  },

  timer: {
    position: "absolute",
    top: 75,
    left: DEVICE_WIDTH / 2 - 50,
    right: DEVICE_WIDTH / 2 - 50,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  timerText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    padding: 10,
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
