import { Camera } from "expo-camera";
import { useEffect, useState } from "react";

export default function useCameraPermissions() {
  const [hasPermission, setHasPermission] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  return hasPermission;
}
