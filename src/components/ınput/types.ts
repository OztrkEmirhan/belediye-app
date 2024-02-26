import {
    ViewStyle 
} from "react-native";

export type IInputProps = {
  onChangeText?: (value: string) => void;
  onValidate?: (text: string) => boolean;
  isValidateOnChangeText?: boolean;
  secureTextEntry?: boolean;
  initialValue?: string;
  isShowable?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  disabled?: boolean;
  style?: ViewStyle;
  isError?: boolean;
  title?: string;
};
