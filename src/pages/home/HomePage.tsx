import React from "react";
import { StyleSheet, View } from "react-native";
import NewRunPage from "../newRun/NewRunPage";
import PreviousSection from "./PreviousSection";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <View>
      {/* <PreviousSection /> */}
      <NewRunPage />
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
