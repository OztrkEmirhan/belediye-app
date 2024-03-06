import React, {
    FC
} from 'react';
import {
    TouchableOpacity
} from 'react-native';
import {
    buttonStyles
} from './stylesheet';
import Typography from '../typography';
import {
    IButtonProps
} from './types';
import {
    colors
} from '../../themes/variants/light';

const Button: FC<IButtonProps> = ({
    variant = 'filled',
    disabled = false,
    onPress,
    title,
    style,
}) => {

    const styles = [
        buttonStyles.button,
        style
    ];
    if (variant === 'outline') {
        styles.push(buttonStyles.outlineButton);
    } else {
        styles.push(buttonStyles.filledButton);

        if (disabled) {
            styles.push(buttonStyles.disabledButton);
        }
    }

    return (
        <TouchableOpacity
            onPress={disabled ? undefined : onPress}
            disabled={disabled}
            style={styles}
        >
            <Typography
                //@ts-ignore
                color={variant === 'outline' ? colors.primary : 'white'}
                variant="body2-medium"
            >
                {title}
            </Typography>
        </TouchableOpacity>
    );
};

export default Button;
