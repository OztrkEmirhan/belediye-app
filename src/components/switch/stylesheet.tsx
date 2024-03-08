import {
    StyleSheet,
    ViewStyle
} from "react-native";
import {
    SwitchStylerParams,
    SwitchStylerResult,
    TitleProps
} from "./types";
import {
    colors 
} from "../../themes/variants/light";

export const TOGGLE_SIZE = 22;

export const stylesheet = StyleSheet.create({
    container: {
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center"
    },
    switchContainer: {
        borderRadius: (TOGGLE_SIZE + 8) / 2,
        width: (TOGGLE_SIZE * 2) + 8,
        minHeight: TOGGLE_SIZE + 8,
        padding: 4
    },
    indicator: {
        borderRadius: TOGGLE_SIZE / 2,
        height: TOGGLE_SIZE,
        width: TOGGLE_SIZE
    }
});

const switchStyler = ({
    spreadBehaviour,
    disabled,
    isActive,
    title
}: SwitchStylerParams): SwitchStylerResult => {
    let container: ViewStyle = {
        paddingVertical: 10
    };

    let titleProps: TitleProps = {
        style: {
            marginRight: 10
        },
        variant: "body2-regular",
        color: "textGrey"
    };

    let switchContainer: ViewStyle = {
        backgroundColor: colors.greyColors100
    };

    let indicator: ViewStyle = {
        backgroundColor: colors.backgroundLight
    };

    if(isActive) {
        switchContainer.backgroundColor = colors.primary;
    }

    if(spreadBehaviour === "baseline") {
        container.alignSelf = spreadBehaviour;
    }

    if(spreadBehaviour === "stretch") {
        container.alignSelf = spreadBehaviour;
        titleProps.style.flex = 1;
    }

    if(disabled) {
        container = {
            ...container,
        };
        indicator = {
            backgroundColor: colors.blue
        };
    }

    if(title) {
        container.paddingHorizontal = 10;
    }

    return {
        switchContainer,
        titleProps,
        container,
        indicator
    };
};
export default switchStyler;
