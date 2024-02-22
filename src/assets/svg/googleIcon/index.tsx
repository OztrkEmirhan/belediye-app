import React from 'react';
import Svg, {
    Path
} from 'react-native-svg';
const Google = ({
    size = 20,
    ...props
}: UICore.SvgPropsType) => {
    const pathScale = 20 / size;
    return (
        <Svg
            height={size}
            width={size}
            fill="none"
            {...props}
        >
            <Path
                d="M18 10.19c0-.591-.053-1.16-.151-1.705H10v3.223h4.485a3.833 3.833 0 0 1-1.663 2.516v2.09h2.693C17.091 14.864 18 12.727 18 10.19Z"
                scale={1 / pathScale}
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#4285F4"
            />
            <Path
                d="M10 18.333c2.25 0 4.136-.746 5.515-2.019l-2.693-2.09c-.746.5-1.7.795-2.822.795-2.17 0-4.008-1.466-4.663-3.436H2.553v2.16A8.33 8.33 0 0 0 10 18.332Z"
                scale={1 / pathScale}
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#34A853"
            />
            <Path
                d="M5.337 11.583A5.01 5.01 0 0 1 5.076 10c0-.55.094-1.083.261-1.583v-2.16H2.553A8.33 8.33 0 0 0 1.667 10a8.33 8.33 0 0 0 .886 3.742l2.784-2.159Z"
                scale={1 / pathScale}
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#FBBC05"
            />
            <Path
                d="M10 4.981c1.223 0 2.322.42 3.186 1.246l2.39-2.39c-1.444-1.345-3.33-2.17-5.576-2.17a8.33 8.33 0 0 0-7.447 4.59l2.784 2.16C5.992 6.447 7.83 4.98 10 4.98Z"
                scale={1 / pathScale}
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#EA4335"
            />
        </Svg>
    );
};

export default Google;
