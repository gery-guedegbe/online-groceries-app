import { TouchableOpacityProps, ViewStyle } from "react-native";

export interface AppButtonProps extends TouchableOpacityProps {
  style?: ViewStyle;
  onPress?: () => void;
  loading?: boolean;
  children: React.ReactNode;
}
