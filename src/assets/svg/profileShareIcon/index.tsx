import React from "react";
import Svg, {
    Path
} from "react-native-svg";
const ProfileShareIcon = ({
    color = '#0A84FF',
    size = 36,
    ...props
}: UICore.SvgPropsType) => {
    const pathScale = 36 / size;
    return <Svg
        width={size}
        height={size}
        fill="none"
        {...props}
    >
        <Path
            d="M21.75 9.875a2.708 2.708 0 0 0-2.666 3.187l-3.942 2.76a.613.613 0 0 0-.057.044 2.708 2.708 0 1 0 0 4.268c.018.016.037.03.057.045l3.942 2.76a2.708 2.708 0 1 0 .514-1.166l-3.733-2.614c.167-.351.26-.744.26-1.159 0-.415-.093-.808-.26-1.16l3.733-2.612a2.708 2.708 0 1 0 2.152-4.353Zm-1.458 2.708a1.458 1.458 0 1 1 2.916 0 1.458 1.458 0 0 1-2.916 0Zm-6.875 3.959a1.458 1.458 0 1 0 0 2.916 1.458 1.458 0 0 0 0-2.916Zm8.333 5.416a1.458 1.458 0 1 0 0 2.917 1.458 1.458 0 0 0 0-2.917Z"
            scale={1 / pathScale}
            fillRule="evenodd"
            clipRule="evenodd"
            fill={color}
        />
    </Svg>;
};
export default ProfileShareIcon;

