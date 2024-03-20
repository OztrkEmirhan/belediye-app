import React, {
    useCallback,
    useRef
} from 'react';
import {
    Dimensions,
    StyleSheet,
    View
} from 'react-native';
import BottomSheet from '../../../components/bottomSheet';
import {
    GestureHandlerRootView
} from 'react-native-gesture-handler';
import {
    SafeAreaView
} from 'react-native-safe-area-context';
import Button from '../../../components/button';
import {
    BottomSheetRef
} from '../../../components/bottomSheet/types';

const HomeScreen = () => {
    const bottomSheetRef2 = useRef<BottomSheetRef>(null);
    const bottomSheetRef3 = useRef<BottomSheetRef>(null);
    const bottomSheetRef = useRef<BottomSheetRef>(null);

    const {
        height 
    } = Dimensions.get('screen');

    const pressHandler = useCallback(() => {
        bottomSheetRef.current?.expand();
    }, []);

    const pressHandler2 = useCallback(() => {
        bottomSheetRef2.current?.expand();
    }, []);

    const pressHandler3 = useCallback(() => {
        bottomSheetRef3.current?.expand();
    }, []);

    return (
        <GestureHandlerRootView
            style={{
                flex: 1 
            }}>
            <SafeAreaView
                style={
                    styles.container
                }
            >
                <View
                    style={
                        styles.buttonContainer
                    }
                >
                    <Button
                        onPress={pressHandler}
                        title="BottomSheet 1"
                    />
                    <Button
                        onPress={pressHandler2} 
                        title="BottomSheet 2"
                    />
                    <Button
                        onPress={pressHandler3}
                        title="BottomSheet 3"
                    />
                </View>
                <BottomSheet
                    activeHeight={height * 1}
                    backgroundColor={'white'}
                    backDropColor={'black'}
                    ref={bottomSheetRef}
                />
                <BottomSheet
                    activeHeight={height * 0.7}
                    backgroundColor={'#DAD3C8'}
                    backDropColor={'black'}
                    ref={bottomSheetRef2}
                >
                </BottomSheet>
                <BottomSheet
                    backgroundColor={'#FFFFFF'}
                    activeHeight={height * 0.4}
                    backDropColor={'black'} 
                    ref={bottomSheetRef3}
                >
                </BottomSheet>
            </SafeAreaView>
        </GestureHandlerRootView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    buttonContainer: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginBottom: 20
    },
});
