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

function App() {
    return <SafeAreaView
        style={{
            ...stylesheet.container,
            backgroundColor: colors.backgroundLight
        }}
    >
        <MainNavigatorScreen/>
    </SafeAreaView>;
}

export default App;
