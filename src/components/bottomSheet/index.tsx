import React, {
    useImperativeHandle,
    useCallback,
    forwardRef
} from 'react';
import stylesheet from './stylesheet';
import {
    TouchableWithoutFeedback,
    Dimensions,
    View
} from 'react-native';
import Animated,{
    useAnimatedStyle,
    useSharedValue,
    interpolate,
    withSpring
} from 'react-native-reanimated';
import {
    GestureDetector,
    Gesture
} from 'react-native-gesture-handler';
import {
    useSafeAreaInsets
} from 'react-native-safe-area-context';

const BottomSheet = forwardRef(
    ({
        backgroundColor,
        backDropColor,
        activeHeight,
        children
    }:any, ref) => {

        const inset = useSafeAreaInsets();
        const {
            height
        } = Dimensions.get('screen');
        const newActiveHeight = height - activeHeight;
        const topAnimation = useSharedValue(height);
        const context = useSharedValue(0);

        const expand = useCallback(() => {
            'worklet';
            topAnimation.value = withSpring(newActiveHeight, {
                damping: 100,
                stiffness: 400,
            });
        }, []);

        const close = useCallback(() => {
            'worklet';
            topAnimation.value = withSpring(height, {
                damping: 100,
                stiffness: 400,
            });
        }, []);

        useImperativeHandle(
            ref,
            () => ({
                expand,
                close
            }),
            [
                expand,
                close
            ],
        );

        const animationStyle = useAnimatedStyle(() => {
            const top = topAnimation.value;
            return {
                top,
            };
        });
        const backDropAnimation = useAnimatedStyle(() => {
            const opacity = interpolate(
                topAnimation.value,
                [height, newActiveHeight],
                [0, 0.5],
            );
            const display = opacity === 0 ? 'none' : 'flex';
            return {
                opacity,
                display
            };
        });

        const pan = Gesture.Pan()
            .onBegin(() => {
                context.value = topAnimation.value;
            })
            .onUpdate(event => {
                if (event.translationY < 0) {
                    topAnimation.value = withSpring(newActiveHeight, {
                        stiffness: 400,
                        damping: 100,
                    });
                } else {
                    topAnimation.value = withSpring(context.value + event.translationY, {
                        stiffness: 400,
                        damping: 100,
                    });
                }
            })
            .onEnd(() => {
                if (topAnimation.value > newActiveHeight + 50) {
                    topAnimation.value = withSpring(height, {
                        stiffness: 400,
                        damping: 100,
                    });
                } else {
                    topAnimation.value = withSpring(newActiveHeight, {
                        stiffness: 400,
                        damping: 100,
                    });
                }
            });

        return (
            <>
                <TouchableWithoutFeedback
                    onPress={() => {
                        close();
                    }}>
                    <Animated.View
                        style={[
                            stylesheet.backDrop,
                            backDropAnimation,
                            {
                                backgroundColor: backDropColor
                            },
                        ]}
                    />
                </TouchableWithoutFeedback>
                <GestureDetector 
                    gesture={pan}
                >
                    <Animated.View
                        style={[
                            stylesheet.container,
                            animationStyle,
                            {
                                backgroundColor: backgroundColor,
                                paddingBottom: inset.bottom,
                                height: activeHeight
                            },
                        ]}>
                        <View 
                            style={
                                stylesheet.lineContainer
                            }
                        >
                            <View 
                                style={
                                    stylesheet.line
                                }
                            />
                        </View>
                        {children}
                    </Animated.View>
                </GestureDetector>
            </>
        );
    },
);

export default BottomSheet;
