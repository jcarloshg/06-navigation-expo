import { Slot, SplashScreen } from "expo-router";
import { useFonts } from "expo-font";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "./global.css";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded] = useFonts({
    "WorkSans-Black": require("../assets/fonts/WorkSans-Black.ttf"),
    "WorkSans-Light": require("../assets/fonts/WorkSans-Light.ttf"),
    "WorkSans-Medium": require("../assets/fonts/WorkSans-Medium.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Slot />
    </GestureHandlerRootView>
  );
};

export default RootLayout;
