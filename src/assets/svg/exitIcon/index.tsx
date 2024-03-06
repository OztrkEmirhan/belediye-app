import React from "react";
import Svg, {
    Path
} from "react-native-svg";
const Exit = ({
    color = '#DC2626',
    size = 36,
    ...props
}: UICore.SvgPropsType) => {
    const pathScale = 36 / size;
    return <Svg
        height={size}
        width={size}
        fill="none"
        {...props}
    >
        <Path
            d="M18 10.709a.625.625 0 1 1 0 1.25 6.042 6.042 0 0 0 0 12.083.625.625 0 1 1 0 1.25 7.292 7.292 0 1 1 0-14.583Z"
            scale={1 / pathScale}
            fill={color}
        />
        <Path
            d="M21.725 15.943a.625.625 0 0 1 .883-.884l2.5 2.5a.625.625 0 0 1 0 .884l-2.5 2.5a.625.625 0 1 1-.883-.884l1.433-1.433h-6.825a.625.625 0 0 1 0-1.25h6.825l-1.433-1.433Z"
            scale={1 / pathScale}
            fill={color}
        />
    </Svg>;
};
export default Exit;
