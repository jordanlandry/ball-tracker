// import React, { useEffect, useRef } from "react";
// import { ScrollView, View, StyleSheet, Text } from "react-native";
// import { ResizeMode, Video } from "expo-av";
// import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../constants/deviceInfo";

// //
// import { Asset } from "expo-asset";
// import * as FileSystem from "expo-file-system";

// type Props = {
//   videoUri: string;
// };

// const TensorTest = ({ videoUri }: Props) => {
//   const videoRef = useRef<Video>(null);

//   const extractFrame = async () => {
//     const videoAsset = Asset.fromURI(videoUri)
//     await videoAsset.downloadAsync();

//     const videoObject = new Video({ source: {uri: videoUri} });
//     await videoObject.loadAsync();
//   }

//   return (
//     <ScrollView>
//       <View style={styles.videoWrapper}>
//         <Text>Video:</Text>
//         <Video ref={videoRef} style={styles.video} source={{ uri: videoUri! }} resizeMode={ResizeMode.COVER} useNativeControls isLooping />
//       </View>
//     </ScrollView>
//   );
// };

// export default TensorTest;

// const videoPlayerWidth = Math.min(DEVICE_WIDTH * 0.75, 250);
// const styles = StyleSheet.create({
//   videoWrapper: {
//     justifyContent: "center",
//     alignItems: "center",

//     marginTop: 100,
//   },

//   video: {
//     flex: 1,

//     width: videoPlayerWidth,
//     height: videoPlayerWidth * (DEVICE_HEIGHT / DEVICE_WIDTH),
//   },
// });
