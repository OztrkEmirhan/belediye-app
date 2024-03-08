import {
    StyleSheet,
    ViewStyle
} from "react-native";
import {
    CheckBoxStylerParams, 
    CheckBoxStylerResult, 
    TitleProps
} from "./types";
import {
    colors
} from "../../themes/variants/light";

export const stylesheet = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
    },
    checkContainer: {
        justifyContent: "center",
        alignItems: "center",
        height: 24,
        width: 24
    },
    checkIndicator: {
        justifyContent: "center",
        alignItems: "center",
        height: 24,
        width: 24
    },
    title: {
        textAlignVertical: "center",
        flex: 1
    }
});

const checkBoxStyler = ({
    spreadBehaviour,
    titleStyle,
    disabled,
}: CheckBoxStylerParams): CheckBoxStylerResult => {
    let container: ViewStyle = {
        paddingVertical: 5
    };

    let checkContainer: ViewStyle = {
        backgroundColor: colors.backgroundLight,
        borderColor: colors.stronkLight,
        borderRadius: 20,
        borderWidth: 1,
    };

    let checkIndicator: ViewStyle = {
        backgroundColor: colors.primary,
        borderRadius: 20
    };

    let titleProps: TitleProps = {
        color: "textBlack",
        style: {
            marginLeft: 10,
            ...titleStyle
        }
    };

    if(disabled) {
        container = {
            ...container
        };
        checkIndicator.backgroundColor = colors.textGrey;
    }

    if(spreadBehaviour === "baseline" || spreadBehaviour === "stretch") {
        container.alignSelf = spreadBehaviour;
    }

    return {
        checkContainer,
        checkIndicator,
        titleProps,
        container
    };
};
export default checkBoxStyler;
