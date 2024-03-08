import React, {
    FC
} from "react";
import {
    TouchableOpacity,
    View
} from "react-native";
import checkBoxStyler, {
    stylesheet
} from "./stylesheet";
import Typograpyh from "../typography";
import {
    ICheckBoxProps
} from "./types";

const CheckBox: FC<ICheckBoxProps> = ({
    spreadBehaviour = "baseline",
    titleType = "body2-regular",
    onChange: onChangeProp,
    isSelected = false,
    disabled = false,
    titleStyle,
    title,
    style
}) => {
    const {
        checkContainer,
        checkIndicator,
        titleProps,
        container
    } = checkBoxStyler({
        spreadBehaviour,
        titleStyle,
        isSelected,
        disabled
    });

    const onChange = () => {
        if(onChangeProp) onChangeProp(isSelected);
    };

    const renderRadioContainer = () => {
        return <View
            style={[
                stylesheet.checkContainer,
                checkContainer
            ]}
        >
            {renderIndicator()}
        </View>;
    };

    const renderIndicator = () => {
        if(!isSelected) {
            return null;
        }
        return <View
            style={[
                stylesheet.checkIndicator,
                checkIndicator
            ]}
        >
        </View>;
    };

    const renderTitle = () => {
        if(!title) {
            return null;
        }

        return <Typograpyh
            color={titleProps.color}
            variant={titleType}
            style={[
                stylesheet.title,
                titleProps.style
            ]}
        >
            {title}
        </Typograpyh>;
    };

    return <TouchableOpacity
        style={[
            stylesheet.container,
            container,
            style
        ]}
        disabled={disabled}
        onPress={onChange}
    >
        {renderRadioContainer()}
        {renderTitle()}
    </TouchableOpacity>;
};
export default CheckBox;
