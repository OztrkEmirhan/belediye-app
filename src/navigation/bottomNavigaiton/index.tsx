import React from 'react';
import {
    createBottomTabNavigator
} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../pages/app/home';
import NotificationsScreen from '../../pages/app/notifications';
import NoticesScreen from '../../pages/app/notices';
import ProfileScreen from '../../pages/app/profile';
import {
    Routes
} from '../routes';

const BottomNavigator = createBottomTabNavigator();

export const BottomNavigatorScreen = () => (
    <BottomNavigator.Navigator
        screenOptions={{
            headerShown: false,
        }}>
        <BottomNavigator.Screen
            name={Routes.HOME_SCREEN}
            component={HomeScreen}
            options={{
                headerShown: false,
            }}
        />
        <BottomNavigator.Screen
            name={Routes.NOTIFICATIONS_SCREEN}
            component={NotificationsScreen}
            options={{
                headerShown: false,
            }}
        />
        <BottomNavigator.Screen
            name={Routes.NOTICES_SCREEN}
            component={NoticesScreen}
            options={{
                headerShown: false,
            }}
        />
        <BottomNavigator.Screen
            name={Routes.PROFILE_SCREEN}
            component={ProfileScreen}
            options={{
                headerShown: false,
            }}
        />
    </BottomNavigator.Navigator>
);
