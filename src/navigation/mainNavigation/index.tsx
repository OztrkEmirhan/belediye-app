import React from 'react';
import {
    NavigationContainer
} from '@react-navigation/native';
import {
    createNativeStackNavigator
} from '@react-navigation/native-stack';
import {
    AuthNavigatorScreen
} from '../authNavigation';
import {
    BottomNavigatorScreen
} from '../bottomNavigaiton';
import {
    Routes
} from '../routes';

const MainNavigator = createNativeStackNavigator();

export const MainNavigatorScreen = () => {
    return (
        <NavigationContainer>
            <MainNavigator.Navigator
                screenOptions={
                    {
                        headerShown: false
                    }
                }
            >
                <MainNavigator.Screen
                    name={Routes.AUTH_SCREEN}
                    component={AuthNavigatorScreen}
                />
                <MainNavigator.Screen
                    name={Routes.BOTTOM_NAVIGATOR}
                    component={BottomNavigatorScreen}
                />
            </MainNavigator.Navigator>
        </NavigationContainer>
    );
};
