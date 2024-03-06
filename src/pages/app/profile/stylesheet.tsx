import {
    StyleSheet
} from "react-native";

const stylesheet = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
    headerTitle: {
        position: "absolute"
    },
    goBack: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 21,
        height: 42,
        width: 42
    },
    profileCardContainer: {
        alignItems: "center",
        flex: 1
    },
    profileCardImage: {
        borderRadius: 37,
        height: 74,
        width: 74
    },
    loginCardContainer: {
        alignItems: "center",
        flex: 1
    },
    line: {
        alignSelf: "center",
        width: "90%"
    },
    profileOptionsContainer: {
        alignItems: "center",
        flex: 1
    },
    transferIcon: {
        alignSelf: "center"
    },
    changeAccountSheetText: {
        textAlign: "center"
    },
    changeAccountSheetUserCard: {
        flexDirection: "row",
        alignItems: "center"
    },
    changeAccountSheetProfilePhoto: {
        borderRadius: 30,
        height: 60,
        width: 60
    },
    accountLogo: {
        borderRadius: 30,
        height: 60,
        width: 60
    },
    changeAccountSheetCompanyInfoCard: {
        flex: 1
    },
    centerText: {
        textAlign: "center"
    },
    icon: {
        borderRadius: 12
    }
});
export default stylesheet;
