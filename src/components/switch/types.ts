import {
    TextStyle,
    ViewStyle,
    StyleProp
} from "react-native";

export type SwitchSpreadBehaviour = "baseline" | "stretch" | "free";
export interface ISwitchProps {
    spreadBehaviour?: SwitchSpreadBehaviour;
    indicatorStyle?: ViewStyle;
    titleStyle?: TextStyle;
    onPress?: () => void;
    isActive?: boolean;
    disabled?: boolean;
    style?: ViewStyle;
    title?: string;
    renderTitle?: (props: {
        titleVariant: keyof UITypography.TypographyType;
        spreadBehaviour?: SwitchSpreadBehaviour;
        titleStyle?: StyleProp<TextStyle>;
        color: keyof UIColor.ColorType;
        isActive?: boolean;
    }) => JSX.Element;
};

export type SwitchStylerParams = {
    spreadBehaviour?: SwitchSpreadBehaviour;
    isActive: boolean;
    disabled: boolean;
    title?: string;
};

export type TitleProps = {
    variant: keyof UITypography.TypographyType;
    color: keyof UIColor.ColorType;
    style: TextStyle;
};

export type SwitchStylerResult = {
    switchContainer: ViewStyle;
    titleProps: TitleProps;
    indicator: ViewStyle;
    container: ViewStyle;
};
