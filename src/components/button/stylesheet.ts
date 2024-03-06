import {
    StyleSheet
} from 'react-native';
import {
    colors
} from '../../themes/variants/light';

export const buttonStyles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 12,
        marginBottom: 10,
        opacity: 1,
    },
    outlineButton: {
        borderColor: colors.primary,
        backgroundColor: 'white',
        borderWidth: 1,
    },
    filledButton: {
        backgroundColor: colors.primary,
    },
    disabledButton: {
        opacity: 0.5,
    },
});
