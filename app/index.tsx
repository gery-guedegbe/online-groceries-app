import { colors } from "@/constants/theme";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace("/(auth)/onboarding");
    }, 1500);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} backgroundColor={colors.primary} />

      <Animated.Image
        source={require("../assets/images/splashIcon.png")}
        entering={FadeInDown.duration(700).springify()}
        style={styles.logo}
        resizeMode={"contain"}
      />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  logo: { height: "33%", aspectRatio: 1 },
});
