import React, {
    FC
} from "react";
import {
    TouchableOpacity
} from "react-native";
import stylesheet from "./stylesheet";
import {
    Typography
} from "..";
import IRowCardType from "./types";
import {
    AltArrowRight
} from "../../assets/svg";
import {
    colors 
} from "../../themes/variants/light";

const FastTransactionsButton: FC<IRowCardType> = ({
    renderRightIcon: RightIconProp,
    renderTitle: renderTitleProp,
    renderLeft: renderLeftProp,
    renderTool: renderToolProp,
    isShowRightIcon = true,
    titleColor,
    disabled,
    onPress,
    title,
    style
}) => {

    const renderLeft = () => {
        if(renderLeftProp) {
            return renderLeftProp();
        }

        return null;
    };

    const renderRight = () => {
        if(!isShowRightIcon) {
            return null;
        }

        if(RightIconProp) {
            return <RightIconProp
                color={colors.textSecondary}
                size={24}
            />;
        }

        return <AltArrowRight />;
    };

    const renderTitle = () => {
        if(renderTitleProp) {
            return renderTitleProp(title);
        }
        if(!titleColor) {
            return <Typography
                style={stylesheet.title}
                variant="body2-medium"
                color="textDark"
                numberOfLines={1}
            >
                {title}
            </Typography>;
        }

        return <Typography
            style={stylesheet.title}
            variant="body2-medium"
            color={titleColor}
            numberOfLines={1}
        >
            {title}
        </Typography>;
    };

    const renderTool = () => {
        if(renderToolProp) {
            return renderToolProp();
        }
        return null;
    };

    return <TouchableOpacity
        onPress={disabled ? undefined : () => {
            if(onPress) onPress();
        }}
        disabled={disabled}
        style={[
            stylesheet.container,
            {
                padding: 10
            },
            style
        ]}
    >
        {renderLeft()}
        {renderTitle()}
        {renderTool()}
        {renderRight()}
    </TouchableOpacity>;
};
export default FastTransactionsButton;
