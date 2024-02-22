import React from 'react';
import Svg, {
    Path
} from 'react-native-svg';
const AltArrowDown = ({
    color = '#8C8C8C',
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
            d="M3.692 7.093a.625.625 0 0 1 .881-.068L10 11.677l5.427-4.652a.625.625 0 1 1 .813.95l-5.833 5c-.234.2-.58.2-.814 0l-5.833-5a.625.625 0 0 1-.068-.882Z"
            scale={1 / pathScale}
            fillRule="evenodd"
            clipRule="evenodd"
            fill={color}
        />
    </Svg>;
};
export default AltArrowDown;
