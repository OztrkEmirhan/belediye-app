import React, {
    useState,
    FC
} from "react";
import {
    TextInput as NativeTextInput,
    TouchableOpacity,
    View
} from "react-native";
import {
    stylesheet 
} from "./stylesheet";
import {
    IInputProps
} from "./types";
import {
    colors
} from "../../themes/variants/light";

const Input: FC<IInputProps> = ({
    renderRight: RenderRightProps,
    renderLeft: RenderLeftProps,
    isValidateOnChangeText,
    onFocus: onFocusProp,
    isShowGoBack = false,
    onBlur: onBlurProp,
    isError = false,
    title = "Title",
    initialValue,
    onChangeText,
    iconOnPress,
    onValidate,
    disabled,
    onGoBack
}) => {
    const [value, setValue] = useState(initialValue ? initialValue : "");
    const [isFocused, setIsFocused] = useState(false);

    const onFocusInternal = () => {
        setIsFocused(true);
        if (onFocusProp) onFocusProp();
    };

    const onBlurInternal = () => {
        setIsFocused(false);
        if (onBlurProp) onBlurProp();
    };

    const renderLeft = () => {
        if (RenderLeftProps) {
            return <RenderLeftProps />;
        }

        if (!isShowGoBack) {
            return null;
        }

        return <TouchableOpacity
            onPress={onGoBack}
        >
            <RenderLeftProps />
        </TouchableOpacity>;
    };

    const renderRight = () => {
        if(!RenderRightProps) {
            return null;
        }

        if (RenderRightProps) {
            return <TouchableOpacity
                onPress={iconOnPress}
                style={{
                    position:"absolute",
                    right:20,
                }}>
                <RenderRightProps />
            </TouchableOpacity>;
        }
    };

    const renderTextInput = () => {
        return (
            <NativeTextInput
                placeholder={title}
                placeholderTextColor={colors.textGrey}
                onFocus={onFocusInternal}
                onBlur={onBlurInternal}
                editable={!disabled}
                value={value}
                style={{
                    ...stylesheet.input,
                    color: colors.textDark
                }}
                onChangeText={text => {
                    if(onChangeText && !isValidateOnChangeText) onChangeText(text);
                    if(onValidate) {
                        const isValid = onValidate(text);
                        if(isValid) setValue(text);
                        return;
                    }
                    if(onChangeText && isValidateOnChangeText) onChangeText(text);
                    setValue(text);
                }}
            />
        );
    };

    return (
        <View
            style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
            }}
        >
            {renderLeft()}
            <View
                style={{
                    ...stylesheet.container,
                    borderColor: isError ? colors.error : isFocused ? colors.primary : colors.stronkLight,
                }}
            >
                {renderTextInput()}
            </View>
            {renderRight()}
        </View>
    );
};

export default Input;
