import React from 'react';
import {
    SafeAreaView 
} from 'react-native';
import stylesheet from './stylesheet';
import {
    MainNavigatorScreen
} from './navigation/mainNavigation';
import {
    colors 
} from './themes/variants/light';
import {
    GestureHandlerRootView
} from 'react-native-gesture-handler';

function App() {
    return <GestureHandlerRootView style={{
        flex: 1 
    }}>
        <SafeAreaView
            style={{
                ...stylesheet.container,
                backgroundColor: colors.backgroundLight
            }}
        >
            <MainNavigatorScreen/>
        </SafeAreaView>
    </GestureHandlerRootView>;
}

export default App;
