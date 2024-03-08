import React, {
    useEffect,
    useRef,
    FC
} from "react";
import {
    TouchableOpacity,
    Animated,
    View
} from "react-native";
import switchStyler, {
    TOGGLE_SIZE,
    stylesheet
} from "./stylesheet";
import {
    Typography
} from "..";
import {
    ISwitchProps
} from "./types";

const Switch: FC<ISwitchProps> = ({
    renderTitle: renderTitleProp,
    spreadBehaviour = "stretch",
    isActive = false,
    disabled = false,
    indicatorStyle,
    titleStyle,
    onPress,
    style,
    title
}) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: isActive ? 1 : 0,
            duration: 150,
            useNativeDriver: true
        }).start();
    }, [isActive, fadeAnim]);

    const {
        switchContainer,
        titleProps,
        indicator,
        container
    } = switchStyler({
        spreadBehaviour,
        disabled,
        isActive,
        title
    });

    const renderTitle = () => {
        if(!title && !renderTitleProp) {
            return null;
        }

        if(renderTitleProp) {
            return renderTitleProp({
                spreadBehaviour: spreadBehaviour,
                titleVariant: titleProps.variant,
                color: titleProps.color,
                isActive: isActive,
                titleStyle: [
                    titleProps.style
                ]
            });
        }

        return <Typography
            color={titleProps.color}
            style={[
                titleProps.style,
                titleStyle
            ]}
        >
            {title}
        </Typography>;
    };

    const renderSwitch = () => {
        return <View
            style={[
                stylesheet.switchContainer,
                switchContainer,
                indicatorStyle
            ]}
        >
            <Animated.View
                style={[
                    stylesheet.indicator,
                    indicator,
                    {
                        transform: [{
                            translateX: fadeAnim.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, TOGGLE_SIZE]
                            })
                        }]
                    }
                ]}
            />
        </View>;
    };

    return <TouchableOpacity
        style={[
            stylesheet.container,
            container,
            style
        ]}
        disabled={disabled}
        onPress={disabled ? undefined : onPress}
    >
        {renderTitle()}
        {renderSwitch()}
    </TouchableOpacity>;
};
export default Switch;
