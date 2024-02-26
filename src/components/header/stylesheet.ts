import {
    StyleSheet
} from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: "column",
        width: "100%"
    },
    contentContainer: {
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center"
    },
    headerRight: {
        justifyContent: "flex-end",
        flexDirection: "row",
        flex: 1
    },
    headerLeftToRightNull: {
        justifyContent: "center",
        alignItems: "center",
        height: 42,
        width: 42
    }
});
