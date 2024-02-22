import React from 'react';
import {
    createNativeStackNavigator
} from '@react-navigation/native-stack';
import LoginScreen from '../../pages/auth/login';
import RegisterScreen from '../../pages/auth/register';
import {
    Routes
} from '../routes';

const AuthNavigator = createNativeStackNavigator();

export const AuthNavigatorScreen = () => (
    <AuthNavigator.Navigator
        screenOptions={
            {
                headerShown: false
            }
        }
    >
        <AuthNavigator.Screen
            name={Routes.LOGIN_SCREEN} 
            component={LoginScreen} 
        />
        <AuthNavigator.Screen
            name={Routes.REGISTER_SCREEN}
            component={RegisterScreen}
        />
    </AuthNavigator.Navigator>
);
