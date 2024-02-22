import React from 'react';
import {
    MainNavigatorScreen
} from './navigation';
import {
    SafeAreaProvider
} from 'react-native-safe-area-context';

function App() {
    return (
        <SafeAreaProvider>
            <MainNavigatorScreen />
        </SafeAreaProvider>
    );
}

export default App;
