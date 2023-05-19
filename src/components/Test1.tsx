import { AVPlaybackStatusSuccess, ResizeMode, Video } from "expo-av";
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../constants/deviceInfo";

type Props = {
  videoUri: string;
  duration: number;
};

const Test1 = ({ videoUri, duration }: Props) => {
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const videoRef = useRef<Video>(null);

  const nextFrame = async () => {
    const status = await videoRef.current?.getStatusAsync();

    if (status?.isLoaded) {
      const currentFrame = status?.positionMillis;
      videoRef.current?.setPositionAsync(currentFrame + 10);

      setCurrentFrameIndex(currentFrame + 10);
    }
  };

  const previousFrame = async () => {
    const status = await videoRef.current?.getStatusAsync();

    if (status?.isLoaded) {
      const currentFrame = status?.positionMillis;
      videoRef.current?.setPositionAsync(currentFrame - 10);

      setCurrentFrameIndex(currentFrame - 10);
    }
  };

  return (
    <View style={styles.container}>
      <Video
        style={styles.video}
        ref={videoRef}
        source={{ uri: videoUri }}
        resizeMode={ResizeMode.CONTAIN}
        useNativeControls={false}
        shouldPlay={false}
        isLooping={false}
      />

      <Text style={{ color: "white", position: "absolute", top: 100, width: DEVICE_WIDTH, textAlign: "center" }}>
        {currentFrameIndex} / {duration * 10}
      </Text>

      <TouchableOpacity onPress={previousFrame} style={[styles.button, { left: 50 }]}>
        <Text style={{ color: "white" }}>Previous</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={nextFrame} style={[styles.button, { right: 50 }]}>
        <Text style={{ color: "white" }}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Test1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT,
    flex: 1,
  },
  frameImage: {
    flex: 1,
    resizeMode: "contain",
  },
  button: {
    position: "absolute",
    bottom: 100,
  },
});
