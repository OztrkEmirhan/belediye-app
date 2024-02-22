import React from 'react';
import Svg, {
    Path
} from 'react-native-svg';
const Cross = ({
    color = '#191919',
    size = 24,
    ...props
}: UICore.SvgPropsType) => {
    const pathScale = 24 / size;
    return (
        <Svg
            height={size}
            width={size}
            fill="none"
            {...props}
        >
            <Path
                d="M18.293 5.703a.996.996 0 0 0-1.41 0l-4.89 4.88-4.89-4.89a.996.996 0 1 0-1.41 1.41l4.89 4.89-4.89 4.89a.996.996 0 1 0 1.41 1.41l4.89-4.89 4.89 4.89a.996.996 0 1 0 1.41-1.41l-4.89-4.89 4.89-4.89c.38-.38.38-1.02 0-1.4Z"
                scale={1 / pathScale}
                fillRule="evenodd"
                clipRule="evenodd"
                fill={color}
            />
        </Svg>
    );
};
export default Cross;
