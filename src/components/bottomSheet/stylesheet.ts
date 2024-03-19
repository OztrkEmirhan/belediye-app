import {
    StyleSheet
} from "react-native";

const stylesheet = StyleSheet.create({
    container: {
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0
    },
    lineContainer: {
        alignItems: 'center',
        marginVertical: 10
    },
    line: {
        backgroundColor: 'black',
        borderRadius: 20,
        width: 50,
        height: 4
    },
    backDrop: {
        position: 'absolute',
        display: 'none',
        bottom: 0,
        right: 0,
        left: 0,
        top: 0
    }
});

export default stylesheet;
