import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "./global.css";

// Empêche le splash de disparaître automatiquement
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    "Gilroy-Regular": require("../assets/fonts/Gilroy-Regular.ttf"),
    "Gilroy-Medium": require("../assets/fonts/Gilroy-Medium.ttf"),
    "Gilroy-SemiBold": require("../assets/fonts/Gilroy-SemiBold.ttf"),
    "Gilroy-Bold": require("../assets/fonts/Gilroy-Bold.ttf"),
    "Gilroy-Light": require("../assets/fonts/Gilroy-Light.ttf"),
  });

  useEffect(() => {
    if (error) {
      console.error(error);
      throw error;
    }

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  // Tant que les fonts ne sont pas chargées, on n’affiche rien
  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaProvider>
  );
}
