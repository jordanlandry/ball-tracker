import { StatusBar } from "expo-status-bar";
import { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import HomePage from "./src/pages/home/HomePage";
import { BallType, TLanguage, TUnitDistance, TUnitSpeed } from "./src/types";

import * as tf from "@tensorflow/tfjs";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import { ObjectDetection } from "@tensorflow-models/coco-ssd";
import { Camera } from "expo-camera";

import { cameraWithTensors } from "@tensorflow/tfjs-react-native";

type TStore = {
  speedUnit: TUnitSpeed;
  distanceUnit: TUnitDistance;
  language: TLanguage;
  ballType: BallType;

  // Setters
  setSpeedUnit: Dispatch<SetStateAction<TUnitSpeed>>;
  setDistanceUnit: Dispatch<SetStateAction<TUnitDistance>>;
  setLanguage: Dispatch<SetStateAction<TLanguage>>;
  setBallType: Dispatch<SetStateAction<BallType>>;

  // Tensorflow model
  model: ObjectDetection | null;
  setModel: Dispatch<SetStateAction<ObjectDetection | null>>;
};

export const Store = createContext<TStore>({} as TStore);
export default function App() {
  // TODO: Save these settings to the user's device
  const [speedUnit, setSpeedUnit] = useState<TUnitSpeed>("mph");
  const [distanceUnit, setDistanceUnit] = useState<TUnitDistance>("feet");
  const [language, setLanguage] = useState<TLanguage>("en");

  const [ballType, setBallType] = useState<BallType>("soccer-ball");

  // Tensorflow model
  const [model, setModel] = useState<ObjectDetection | null>(null);

  const store = {
    speedUnit,
    setSpeedUnit,
    distanceUnit,
    setDistanceUnit,
    language,
    setLanguage,
    ballType,
    setBallType,
    model,
    setModel,
  };

  // Load the coco-ssd model
  useEffect(() => {
    // This function for some reason needs to be called in order for the model to work even though it's not used
    cameraWithTensors(Camera); // Removing this line crashes the model

    const load = async () => {
      await tf.ready();
      const model = await cocoSsd.load();
      console.log("Model loaded");
      setModel(model);
    };

    load();
  }, []);

  return (
    <Store.Provider value={store}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <HomePage />
      </View>
    </Store.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
