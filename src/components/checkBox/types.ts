import {
    ViewStyle,
    TextStyle
} from "react-native";

export type CheckBoxSpreadBehaviour = "baseline" | "stretch" | "free";

export interface ICheckBoxProps {
    titleType?: keyof UITypography.TypographyType;
    spreadBehaviour?: CheckBoxSpreadBehaviour;
    onChange?: (isSelected: boolean) => void;
    icon?: UICore.SvgPropsType;
    titleStyle?: TextStyle;
    isSelected?: boolean;
    disabled?: boolean;
    style?: ViewStyle;
    title?: string;
};

export type CheckBoxStylerParams = {
    spreadBehaviour: CheckBoxSpreadBehaviour;
    titleStyle?: TextStyle;
    isSelected?: boolean;
    disabled?: boolean;
};

export type TitleProps = {
    color: keyof UIColor.ColorType;
    style: TextStyle;
};

export type CheckBoxStylerResult = {
    checkContainer: ViewStyle;
    checkIndicator: ViewStyle;
    titleProps: TitleProps;
    container: ViewStyle;
};
