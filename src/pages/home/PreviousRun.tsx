import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TPreviousRun } from "../../_data/previousRuns";
import { users } from "../../_data/users";
import { DEVICE_WIDTH } from "../../constants/deviceInfo";

type Props = TPreviousRun;

const PreviousRun = ({ id, date, userId, distance, speed }: Props) => {
  const userName = users.find((user) => user.id === userId)?.name;

  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.usernameText]}>{userName}</Text>
      <View style={styles.videoContainer}>
        <Text style={styles.videoText}>{speed} mph</Text>
      </View>
      <Text style={styles.text}>
        {date.month} {date.day} {date.year}
      </Text>
    </View>
  );
};

export default PreviousRun;

const videoPercentOfWidth = 0.6;
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    textTransform: "capitalize",
  },

  videoContainer: {
    backgroundColor: "lightgrey",
    width: DEVICE_WIDTH * videoPercentOfWidth,
    height: (DEVICE_WIDTH * videoPercentOfWidth * 9) / 16,
    borderRadius: 4,

    alignItems: "center",
    justifyContent: "center",
  },

  usernameText: {
    fontSize: 18,
  },

  videoText: {
    fontSize: 24,
  },
});
