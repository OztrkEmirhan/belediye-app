import {
    TextStyle,
    StyleProp,
    TextProps
} from "react-native";

interface ITextProps extends TextProps {
    variant?: keyof UITypography.TypographyType
    color?: keyof UIColor.ColorType;
    style?: StyleProp<TextStyle>;
};
export default ITextProps;
