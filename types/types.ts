import React from "react";
import {
  ImageSourcePropType,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";

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

export type Product = {
  id: string;
  name: string;
  price: number;
  image: ImageSourcePropType;
  unit: string;
  category: string;
  description: string;
  rating: number;
};

export type CartItem = {
  product: Product;
  quantity: number;
};

export interface TabBarIconProps {
  focused: boolean;
  icon: ImageSourcePropType;
  title: string;
}
