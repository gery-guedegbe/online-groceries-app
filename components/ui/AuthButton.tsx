import { AuthButtonIcon, AuthButtonProps } from "@/types/types";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

const AuthButton = ({
  style,
  onPress,
  icon,
  text,
  loading = false,
  accessibilityLabel,
}: AuthButtonProps) => {
  const iconMap: Record<AuthButtonIcon, any> = {
    google: require("../../assets/images/google-icon.png"),
    facebook: require("../../assets/images/facebook-icon.png"),
  };

  return (
    <TouchableOpacity
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="button"
      accessible={true}
      style={style}
      onPress={onPress}
      activeOpacity={0.7}
      className="flex h-[67px] w-full flex-row items-center gap-10 rounded-[19px] px-10"
    >
      <Image source={iconMap[icon]} resizeMode="cover" />

      <Text className="font-gilroy-semibold text-base font-semibold text-neutral300">
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default AuthButton;

const styles = StyleSheet.create({});
