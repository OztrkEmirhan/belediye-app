import React, {
    FC
} from  "react";
import {
    Text as NativeText
} from "react-native";
import ITextProps from "./types";
import {
    typography,
    colors
} from "../../themes/variants/light";

const Typograpyh: FC<ITextProps> = ({
    variant = "body-regular",
    children,
    color,
    style,
    ...props
}) => {

    return <NativeText
        {...props}
        style={[
            style,
            {
                color: color ? colors[color] : colors.white,
                ...typography[variant]
            }
        ]}
    >
        {children}
    </NativeText>;
};
export default Typograpyh;
