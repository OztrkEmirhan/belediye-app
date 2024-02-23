import React, {
    FC
} from "react";
import {
    TouchableOpacity,
    ViewStyle
} from "react-native";
import Typography from "../typography";
import {
    IButtonProps
} from "./types";
import {
    colors
} from "../../themes/variants/light";

const Button: FC<IButtonProps> = ({
    disabled = false,
    variant = "filled",
    onPress,
    title,
    style,
}) => {

    const buttonStyle: ViewStyle = {
        justifyContent: "center",
        alignItems: "center",
        paddingVertical:15,
        borderRadius: 13,
        marginBottom: 10,
        opacity:1,
        ...style,
    };

    if (variant === "outline") {
        buttonStyle.borderColor = colors.primary;
        buttonStyle.backgroundColor = "white";
        buttonStyle.borderWidth = 1;
    } else {
        buttonStyle.backgroundColor = disabled ? colors.primary : colors.primary;
        buttonStyle.opacity= disabled ? 0.5 : 1;
    }

    return (
        <TouchableOpacity
            onPress={disabled ? undefined : onPress}
            disabled={disabled}
            style={buttonStyle}
        >
            <Typography
                //@ts-ignore
                color={variant === "outline" ? colors.primary : "white"}
                variant="body2-medium"
            >
                {title}
            </Typography>
        </TouchableOpacity>
    );
};

export default Button;
