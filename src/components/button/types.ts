import {
    ViewStyle
} from "react-native";

export type ButtonVariant = "filled" | "outline";

export interface IButtonProps {
  variant?: ButtonVariant;
  onPress: () => void;
  disabled?: boolean;
  style?: ViewStyle;
  title: string;
}