import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

type SelectFieldProps = {
  label: string;
  value?: string;
  placeholder: string;
  onPress: () => void;
};

const SelectField = ({
  label,
  value,
  placeholder,
  onPress,
}: SelectFieldProps) => {
  return (
    <View className="gap-3">
      <Text className="font-gilroy-semibold text-base font-semibold text-neutral600">
        {label}
      </Text>

      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        className="flex h-[40px] flex-row items-center justify-between border-b border-b-neutral500 pb-2"
      >
        <Text
          className={`font-gilroy-medium text-lg font-medium ${
            value ? "text-neutral900" : "text-neutral600/60"
          }`}
        >
          {value || placeholder}
        </Text>

        <Image
          source={require("../../assets/images/chevron-down-icon.png")}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default SelectField;
