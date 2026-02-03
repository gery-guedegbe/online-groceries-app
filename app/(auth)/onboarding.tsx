import AppButton from "@/components/ui/AppButton";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

const Onboarding = () => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleStarted = () => {
    setIsLoading(true);

    setTimeout(() => {
      router.push("/(auth)/signin");
      setIsLoading(false);
    }, 1500);
  };

  return (
    <ImageBackground
      className="relative h-full w-full flex-1"
      source={require("../../assets/images/onboarding-bg-image.png")}
      resizeMode="cover"
    >
      <View className="absolute inset-x-0 bottom-0 mb-10 flex h-1/2 flex-1 items-center justify-center gap-6 bg-gradient-to-t from-[#858585]/100 to-[#0E1727]/10 p-6 mix-blend-overlay">
        <Image
          source={require("../../assets/images/onboarding-icon.png")}
          resizeMode="contain"
          style={styles.icon}
        />

        <View className="flex items-center justify-center">
          <Text className="font-gilroy-semibold text-[44px] font-semibold leading-[48px] text-white">
            Welcome
          </Text>

          <Text className="font-gilroy-semibold text-[44px] font-semibold leading-[48px] text-white">
            to our store
          </Text>

          <Text className="text-neutral300/70 mt-2 font-gilroy-medium text-base">
            Ger your groceries in as fast as one hour
          </Text>
        </View>

        <AppButton
          onPress={handleStarted}
          loading={isLoading}
          style={{ marginTop: 8 }}
        >
          <Text className="font-gilroy-semibold text-base font-semibold text-neutral400">
            Get Started
          </Text>
        </AppButton>
      </View>
    </ImageBackground>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  icon: {
    width: 48,
    height: 56,
  },
});
