import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomePage from "./src/pages/home/HomePage";
import { Dispatch, SetStateAction, createContext, useState } from "react";
import { TLanguage, TUnitDistance, TUnitSpeed } from "./src/types";

type TStore = {
  speedUnit: TUnitSpeed;
  distanceUnit: TUnitDistance;
  language: TLanguage;

  // Setters
  setSpeedUnit: Dispatch<SetStateAction<TUnitSpeed>>;
  setDistanceUnit: Dispatch<SetStateAction<TUnitDistance>>;
  setLanguage: Dispatch<SetStateAction<TLanguage>>;
};

export const Store = createContext<TStore>({} as TStore);

export default function App() {
  // TODO: Save these settings to the user's device
  const [speedUnit, setSpeedUnit] = useState<TUnitSpeed>("mph");
  const [distanceUnit, setDistanceUnit] = useState<TUnitDistance>("feet");
  const [language, setLanguage] = useState<TLanguage>("en");

  const store = { speedUnit, setSpeedUnit, distanceUnit, setDistanceUnit, language, setLanguage };

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
