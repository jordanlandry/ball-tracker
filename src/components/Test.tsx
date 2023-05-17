import { Button, StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import * as VideoThumbnails from "expo-video-thumbnails";
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../constants/deviceInfo";

type Props = {
  videoUri: string;
};

const Test = ({ videoUri }: Props) => {
  const [image, setImage] = useState<string>("");

  const generateThumbnail = async () => {
    const { uri } = await VideoThumbnails.getThumbnailAsync(videoUri, { time: 1000 });

    setImage(uri);
  };

  return (
    <SafeAreaView style={styles.container}>
      {image !== "" ? (
        <Image source={{ uri: image }} style={styles.image} />
      ) : (
        <TouchableOpacity onPress={generateThumbnail}>
          <Text>Start</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );

  return <></>;
};

export default Test;

const styles = StyleSheet.create({
  container: {},
  image: {
    height: DEVICE_HEIGHT,
    width: DEVICE_HEIGHT * (9 / 16),
  },
});
