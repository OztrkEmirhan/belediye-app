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
    EyeClosedIcon,
    EyeIcon 
} from "../../assets/svg";
import {
    colors
} from "../../themes/variants/light";

const Input: FC<IInputProps> = ({
    secureTextEntry = false,
    isValidateOnChangeText,
    onFocus: onFocusProp,
    onBlur: onBlurProp,
    isShowable = false,
    isError = false,
    title = "Title",
    initialValue,
    onChangeText,
    onValidate,
    disabled,
}) => {
    const [value, setValue] = useState(initialValue ? initialValue : "");
    const [isShowingPassword, setIsShowingPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    
    const onFocusInternal = () => {
        setIsFocused(true);
        if (onFocusProp) onFocusProp();
    };

    const onBlurInternal = () => {
        setIsFocused(false);
        if (onBlurProp) onBlurProp();
    };

    const renderTextInput = () => {
        return (
            <NativeTextInput
                secureTextEntry={isShowable ? secureTextEntry && !isShowingPassword : secureTextEntry}
                placeholderTextColor={colors.textGrey}
                onFocus={onFocusInternal}
                onBlur={onBlurInternal}
                editable={!disabled}
                placeholder={title}
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

    const renderSecureIcon = () => {
        if(!isShowable || !secureTextEntry) {
            return null;
        }

        if(!isShowingPassword) {
            return <TouchableOpacity
                onPress={() => {
                    console.log("Eye icon pressed");
                    setIsShowingPassword(!isShowingPassword);
                }}
            >
                <EyeClosedIcon/>
            </TouchableOpacity>;
        };

        return <TouchableOpacity
            onPress={() => {
                console.log("Eye icon pressed");
                setIsShowingPassword(!isShowingPassword);
            }}
        >
            <EyeIcon/>
        </TouchableOpacity>;
    };

    return (
        <View
            style={{
                ...stylesheet.container,
                borderColor: isError ? colors.error : isFocused ? colors.primary : colors.stronkLight,
            }}
        >
            {renderTextInput()}
            {renderSecureIcon()}
        </View>
    );
};

export default Input;
