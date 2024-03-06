import {
    ReactNode 
} from "react";
import {
    ViewStyle 
} from "react-native";

interface IProfileCardType {
    renderRightIcon?: UIColor.ColorType;
    isShowRightIcon?: boolean;
    renderLeft?: () => ReactNode;
    onPress: () => void;
    number: number;
    title: string;
}

export default IProfileCardType;
