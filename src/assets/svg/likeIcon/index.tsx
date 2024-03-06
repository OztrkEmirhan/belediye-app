import * as React from "react";
import Svg, {
    Path 
} from "react-native-svg";
const Like = ({
    color = '#0A84FF',
    ...props
}: UICore.SvgPropsType) => {
    return <Svg
        height={24}
        fill="none"
        width={25}
        {...props}
    >
        <Path
            d="m20.77 16.265.705-4.08a1.666 1.666 0 0 0-1.64-1.95h-5.181a.833.833 0 0 1-.822-.969l.663-4.045a4.781 4.781 0 0 0-.09-1.973 1.635 1.635 0 0 0-1.092-1.137l-.145-.047a1.346 1.346 0 0 0-.994.068c-.34.164-.588.463-.68.818l-.476 1.834a7.624 7.624 0 0 1-.656 1.679c-.415.777-1.058 1.4-1.725 1.975l-1.439 1.24c-.406.35-.619.873-.572 1.406l.812 9.393A1.666 1.666 0 0 0 9.096 22h4.649c3.481 0 6.452-2.426 7.025-5.735Z"
            fill={color}
        />
        <Path
            d="M3.468 9.485a.75.75 0 0 1 .78.685l.97 11.236a1.237 1.237 0 1 1-2.468.107V10.234a.75.75 0 0 1 .718-.749Z"
            clipRule="evenodd"
            fillRule="evenodd"
            fill={color}
        />
    </Svg>;
};
export default Like;
