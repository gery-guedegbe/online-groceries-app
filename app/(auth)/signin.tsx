import AuthButton from "@/components/ui/AuthButton";
import { colors } from "@/constants/theme";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const Signin = () => {
  const router = useRouter();

  const handleGoogleSignin = () => {
    // Implémentation de la connexion Google
    console.log("Google signin");
  };

  const handleFacebookSignin = () => {
    // Implémentation de la connexion Facebook
    console.log("Facebook signin");
  };

  return (
    <View className="relative flex flex-1 flex-col items-center justify-center bg-[#FEFEFE]/50 pb-2">
      <View className="h-2/5 w-full">
        <Image
          source={require("../../assets/images/signin-bg.png")}
          className="flex-1"
          resizeMode="cover"
        />
      </View>

      <View className="flex h-3/5 w-full flex-col gap-10 p-6 text-start">
        <Text className="max-w-[222px] text-left font-gilroy-semibold text-[26px] font-semibold leading-7 text-neutral800">
          Get your groceries with nectar
        </Text>

        <TouchableOpacity
          onPress={() => router.push("/(auth)/number")}
          accessibilityRole="button"
          accessible={true}
          className="flex h-[40px] w-full flex-row gap-2 border-b border-b-neutral500 pb-4"
        >
          <Image
            source={require("../../assets/images/flage-image.png")}
            resizeMode="cover"
          />

          <Text className="font-gilroy-medium text-[18px] font-medium leading-7 text-neutral800">
            +880
          </Text>
        </TouchableOpacity>

        <Text className="text-center font-gilroy-semibold text-sm font-semibold text-neutral700">
          Or connect with social media
        </Text>

        <View className="flex flex-col items-center gap-4">
          <AuthButton
            icon="google"
            text="Continue with Google"
            onPress={handleGoogleSignin}
            style={{ backgroundColor: colors.primaryBlue }}
            accessibilityLabel="Continuer avec Google"
          />

          <AuthButton
            icon="facebook"
            text="Continue with Facebook"
            onPress={handleFacebookSignin}
            style={{ backgroundColor: colors.secondaryBlue }}
            accessibilityLabel="Continuer avec Facebook"
          />
        </View>
      </View>

      <View className="bg-neutral550 h-[5px] w-[134px] rounded-[50px]" />
    </View>
  );
};

export default Signin;
