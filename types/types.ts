import React from "react";
import { TouchableOpacityProps, ViewStyle } from "react-native";

export interface AppButtonProps extends TouchableOpacityProps {
  style?: ViewStyle;
  onPress?: () => void;
  loading?: boolean;
  children: React.ReactNode;
}

export type AuthButtonIcon = "google" | "facebook";

export interface AuthButtonProps extends TouchableOpacityProps {
  style?: ViewStyle;
  onPress?: () => void;
  text: string;
  icon: AuthButtonIcon;
  loading?: boolean;
  accessibilityLabel?: string;
}
