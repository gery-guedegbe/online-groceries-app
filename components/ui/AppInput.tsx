import { useState } from "react";
import {
  Image,
  KeyboardTypeOptions,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface AppInputProps {
  label: string;
  value: string;
  hasIcon?: boolean;
  keyboardType: KeyboardTypeOptions;
  placeholder: string;
  secureTextEntry?: boolean;
  onChangeText: (text: string) => void;
}

const AppInput = ({
  label,
  value,
  hasIcon = false,
  keyboardType = "default",
  placeholder,
  secureTextEntry = false,
  onChangeText,
}: AppInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isSecured, setIsSecured] = useState(secureTextEntry);

  const toggleSecureEntry = () => {
    setIsSecured(!isSecured);
  };

  return (
    <View className="">
      <Text className="font-gilroy-semibold text-base font-semibold text-neutral600">
        {label}
      </Text>

      <View className="flex flex-row items-center justify-between gap-2 border-b border-b-neutral500 pb-2">
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType={keyboardType}
          value={value}
          placeholder={placeholder}
          secureTextEntry={isSecured}
          onChangeText={onChangeText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="flex-1 font-gilroy-medium text-lg font-medium leading-7 text-neutral900 placeholder:text-neutral600/60"
        />

        {hasIcon && secureTextEntry && (
          <TouchableOpacity
            onPress={toggleSecureEntry}
            className="h-[19px] w-[20px]"
          >
            <Image
              source={
                isSecured
                  ? require("../../assets/images/eye-close-icon.png")
                  : require("../../assets/images/eye-open-icon.png")
              }
              resizeMode="contain"
              className="flex-1"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default AppInput;
