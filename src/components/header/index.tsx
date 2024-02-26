import React from "react";
import {
    Platform,
    View
} from "react-native";
import stylesheet from "./stylesheet";
import IHeaderProps from "./types";
import {
    Typography
} from "../index";
import {
    colors
} from "../../themes/variants/light";

const Header = ({
    titleVariant = "header5-semiBold",
    headerLocation = "left",
    titleColor = "primary",
    renderBottom,
    headerRight,
    customTitle,
    headerLeft,
    title,
    style
}: IHeaderProps ) => {

    const renderBottomContainer = () => {
        if(!renderBottom) {
            return null;
        }

        return <View
            style={{
                marginTop: 20
            }}
        >
            {renderBottom}
        </View>;
    };

    return (
        <View
            style={[
                stylesheet.container,
                {
                    paddingTop: Platform.OS === 'ios' ? 20 : 10,
                    paddingBottom: renderBottom ? 0 : 10,
                    borderBottomColor: colors.white,
                    backgroundColor: colors.white,
                    paddingHorizontal: 15,
                },
                style
            ]}
        >
            <View style={stylesheet.contentContainer}>
                {
                    headerLeft ?
                        headerLeft()
                        :
                        !headerLeft && !headerRight ?
                            <View 
                                style={{
                                    ...stylesheet.headerLeftToRightNull,
                                }}
                            />
                            :
                            null
                }
                {
                    customTitle ?
                        customTitle
                        :
                        <Typography
                            variant={titleVariant}
                            style={[
                                headerLocation === "center" ? {
                                    textAlign: "center",
                                    color: titleColor,
                                    flex: 1
                                } : null
                            ]}
                        >
                            {title}
                        </Typography>
                }
                <View
                    style={[
                        stylesheet.headerRight,
                        headerLocation === "center" ? {
                            position: "absolute",
                            flex: undefined,
                            right: -10
                        } : null
                    ]}
                >
                    {headerRight ? headerRight() : null}
                </View>
            </View>
            <View
                style={stylesheet.container}
            >
                {renderBottomContainer()}
            </View> 
        </View>
    );
};
export default Header;
