import {
    StyleSheet
} from "react-native";
import {
    colors
} from "../../../themes/variants/light";

const stylesheet = StyleSheet.create({
    goBack: {
        borderColor: colors.stronkLight,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 21,
        borderWidth: 1,
        height: 42,
        width: 42
    },
    headerTitle: {
        position: "absolute"
    }
});
export default stylesheet;
