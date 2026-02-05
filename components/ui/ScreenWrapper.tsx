import React from "react";
import { ImageBackground } from "react-native";

interface ScreenWrapperProps {
  children: React.ReactNode;
}

const ScreenWrapper = ({ children }: ScreenWrapperProps) => {
  return (
    <ImageBackground
      className="flex-1 bg-neutral300"
      source={require("../../assets/images/screen-bg.png")}
      resizeMode="cover"
    >
      {children}
    </ImageBackground>
  );
};

export default ScreenWrapper;
