import {
    StyleSheet
} from "react-native";
import {
    colors 
} from "../../../themes/variants/light";

export default StyleSheet.create({
    container: {
        backgroundColor: colors.backgroundLight,
        flex: 1
    },
    content: {
        marginHorizontal: 22,
        flex: 1
    },
    loginInformationText: {
        marginVertical: 8,
    },
    inputView: {
        justifyContent: "center",
        alignItems: "center",
    },
    orlineContainer: {
        flexDirection: "row",
        marginTop:30
    },
    socialLoginContainer: {
        justifyContent: "space-between",
        alignContent: "space-around",
        flexDirection: "row",
        alignItems: "center",
        marginTop:30
    },
    socialLoginButton: {
        alignItems: "center",
        flex: 1
    },
    socialIconButton:{
        flexDirection:"row",
        alignItems:"center",
    },
    socialGoogleButtonText: {
        marginLeft:10
    },
    socialAppleButtonText: {
        marginLeft:10
    },
    restartpassword: {
        flexDirection: 'row',
        justifyContent:"flex-end",
    },
    buttonContainer:{  
        marginTop:20
    }
});
