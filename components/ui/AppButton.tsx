import { AppButtonProps } from "@/types/types";
import React from "react";
import { TouchableOpacity } from "react-native";
import Loading from "./Loading";

const AppButton = ({
  style,
  onPress,
  children,
  loading = false,
}: AppButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[style]}
      className={`${loading ? "bg-transparent" : "bg-primary"} h-[67px] w-full items-center justify-center rounded-[19px] p-4 font-bold`}
    >
      {loading ? <Loading /> : children}
    </TouchableOpacity>
  );
};

export default AppButton;
