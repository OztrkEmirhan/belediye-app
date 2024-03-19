import {
    Dimensions,
    StyleSheet
} from "react-native";

const {
    height: SCREEN_HEIGHT 
} = Dimensions.get('window');

export default StyleSheet.create({
    bottomSheetContainer: {
        backgroundColor: 'white',
        height: SCREEN_HEIGHT,
        position: 'absolute',
        top: SCREEN_HEIGHT,
        borderRadius: 25,
        width: '100%'
    },
    line: {
        backgroundColor: 'grey',
        alignSelf: 'center',
        marginVertical: 15,
        borderRadius: 2,
        width: 75,
        height: 4
    },
});
