import {
    ReactNode, ReactElement 
} from "react";
import {
    ViewStyle 
} from "react-native";

export type IInputProps = {
  onChangeText?: (value: string) => void;
  onValidate?: (text: string) => boolean;
  isValidateOnChangeText?: boolean;
  iconOnPress?: () => void;
  isShowGoBack?: boolean;
  onGoBack?: () => void;
  initialValue?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  disabled?: boolean;
  style?: ViewStyle;
  isError?: boolean;
  renderRight?: any; //TODO: TYPE TO FİXED
  renderLeft?: any; //TODO: TYPE TO FİXED
  title?: string;
};
