import * as React from "react";
import Svg, {
    Path
} from "react-native-svg";
const AltArrowRight = ({
    color = '#0A84FF',
    size = 20,
    ...props
}: UICore.SvgPropsType) => {
    const pathScale = 20 / size;
    return <Svg
        height={size}
        width={size}
        fill="none"
        {...props}
    >
        <Path
            d="M7.093 3.691a.625.625 0 0 1 .882.068l5 5.834c.2.234.2.579 0 .813l-5 5.833a.625.625 0 1 1-.95-.813l4.652-5.427-4.652-5.426a.625.625 0 0 1 .068-.882Z"
            scale={1 / pathScale}
            fillRule="evenodd"
            clipRule="evenodd"
            fill={color}
        />
    </Svg>;
};
export default AltArrowRight;
