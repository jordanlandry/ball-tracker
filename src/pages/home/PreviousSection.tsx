import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { previousRuns } from "../../_data/previousRuns";
import PreviousRun from "./PreviousRun";

const PreviousSection = () => {
  const previousElements = previousRuns.map((run) => <PreviousRun key={run.id} {...run} />);
  return (
    <View style={styles.container}>
      <Text>Previous Runs</Text>
      <ScrollView horizontal={true}>
        <View style={styles.previousWrapper}>{previousElements}</View>
      </ScrollView>
    </View>
  );
};

export default PreviousSection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  previousWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    margin: 24,
  },
});
