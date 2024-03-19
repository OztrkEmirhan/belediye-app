import React, {
    useImperativeHandle,
    useCallback
} from 'react';
import stylesheet from './stylesheet';
import {
    Dimensions,
    StyleSheet,
    View 
} from 'react-native';
import {
    GestureDetector,
    Gesture
} from 'react-native-gesture-handler';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    Extrapolate,
    interpolate,
    withSpring,
} from 'react-native-reanimated';
import {
    BottomSheetRefProps,
    BottomSheetProps
} from './types';

const {
    height: SCREEN_HEIGHT 
} = Dimensions.get('window');

const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50;

const BottomSheet = React.forwardRef<BottomSheetRefProps,BottomSheetProps>(
    ({
        children 
    }, ref) => {
        const translateY = useSharedValue(0);
        const active = useSharedValue(false);

        const scrollTo = useCallback((
            destination: number
        ) => {
            'worklet';
            active.value = destination !== 0;
            translateY.value = withSpring(destination, {
                damping: 50 
            });
        }, []);

        const isActive = useCallback(() => {
            return active.value;
        }, []);

        useImperativeHandle(ref, () => ({
            scrollTo,
            isActive 
        }), [
            scrollTo,
            isActive
        ]);

        const context = useSharedValue({
            y: 0 
        });
        const gesture = Gesture.Pan()
            .onStart(() => {
                context.value = {
                    y: translateY.value 
                };
            })
            .onUpdate((event) => {
                translateY.value = event.translationY + context.value.y;
                translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
            })
            .onEnd(() => {
                if (translateY.value > -SCREEN_HEIGHT / 3) {
                    scrollTo(0);
                } else if (translateY.value < -SCREEN_HEIGHT / 1.5) {
                    scrollTo(MAX_TRANSLATE_Y);
                }
            });

        const rBottomSheetStyle = useAnimatedStyle(() => {
            const borderRadius = interpolate(
                translateY.value,
                [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
                [25, 5],
                Extrapolate.CLAMP
            );

            return {
                borderRadius,
                transform: [{
                    translateY: translateY.value 
                }],
            };
        });

        return (
            <GestureDetector 
                gesture={gesture}
            >
                <Animated.View style={[
                    stylesheet.bottomSheetContainer,
                    rBottomSheetStyle
                ]}
                >
                    <View style={
                        stylesheet.line
                    }
                    />
                    {children}
                </Animated.View>
            </GestureDetector>
        );
    }
);

const styles = StyleSheet.create({
    bottomSheetContainer: {
        height: SCREEN_HEIGHT,
        width: '100%',
        backgroundColor: 'white',
        position: 'absolute',
        top: SCREEN_HEIGHT,
        borderRadius: 25,
    },
    line: {
        width: 75,
        height: 4,
        backgroundColor: 'grey',
        alignSelf: 'center',
        marginVertical: 15,
        borderRadius: 2,
    },
});

export default BottomSheet;