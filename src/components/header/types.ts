import {
    ReactNode
} from "react";
import {
    ViewStyle
} from "react-native";

interface IHeaderProps {
    titleVariant?: keyof UITypography.TypographyType;
    headerLocation?: "left" | "center";
    headerRight?: () => ReactNode;
    headerLeft?: () => ReactNode;
    renderBottom?: ReactNode;
    customTitle?: ReactNode;
    titleColor?: string;
    style?: ViewStyle;
    title?: string;
};
export default IHeaderProps;
