import {
    ReactNode 
} from "react";
import {
    ViewStyle 
} from "react-native";

interface IRowCardType {
    renderTitle?: (title: string) => ReactNode;
    titleColor?: keyof UIColor.ColorType;
    renderRightIcon?: UIColor.ColorType;
    renderLeft?: () => ReactNode;
    renderTool?: () => ReactNode;
    isShowRightIcon?: boolean;
    onPress?: () => void;
    disabled?: boolean;
    style?: ViewStyle;
    title: string;
}

export default IRowCardType;
