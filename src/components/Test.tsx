import * as VideoThumbnails from "expo-video-thumbnails";
import React, { useContext, useEffect, useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Store } from "../../App";
import { DEVICE_HEIGHT } from "../constants/deviceInfo";

import * as tf from "@tensorflow/tfjs";

import { decodeJpeg } from "@tensorflow/tfjs-react-native";
import * as FileSystem from "expo-file-system";

type Props = {
  videoUri: string;
};

const Test = ({ videoUri }: Props) => {
  const [image, setImage] = useState<string>("");

  const generateThumbnail = async () => {
    const { uri } = await VideoThumbnails.getThumbnailAsync(videoUri, { time: 1000 });
    setImage(uri);
  };

  const [predictions, setPredictions] = useState<any>([]);

  const { model } = useContext(Store);

  useEffect(() => {
    if (!model || image === "") return;

    async function test() {
      const imgB64 = await FileSystem.readAsStringAsync(image, { encoding: FileSystem.EncodingType.Base64 });
      const imgBuffer = tf.util.encodeString(imgB64, "base64").buffer;
      const raw = new Uint8Array(imgBuffer);
      const imageTensor = decodeJpeg(raw);
      const predictions = await model?.detect(imageTensor);

      setPredictions(predictions);
    }

    test();
  }, [image]);

  return (
    <SafeAreaView style={styles.container}>
      {image !== "" ? (
        <>
          <Image source={{ uri: image }} style={styles.image} />
          {predictions.map((prediction: any) => {
            const [x, y, width, height] = prediction.bbox;
            return (
              <View
                key={prediction.class}
                style={{
                  position: "absolute",
                  left: x,
                  top: y,
                  width: width,
                  height: height,
                  borderWidth: 2,
                  borderColor: "red",
                }}
              >
                <Text style={{ color: "red", backgroundColor: "white" }}>{prediction.class}</Text>
              </View>
            );
          })}
        </>
      ) : (
        <TouchableOpacity onPress={generateThumbnail}>
          <Text>Start</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

export default Test;

const styles = StyleSheet.create({
  container: {},
  image: {
    // height: DEVICE_HEIGHT,
    // width: DEVICE_HEIGHT * (9 / 16),
    height: 300,
    width: 300 * (9 / 16),
  },
});
