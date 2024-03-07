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
import {
    TabBarPageNames,
    TabBarDataType
} from '../types';
import {
    MailBoxIcon,
    HomeIcon,
    BellIcon,
    UserIcon
} from '../../assets/svg';
import {
    colors
} from '../../themes/variants/light';

const BottomNavigator = createBottomTabNavigator();

const TabBarData: TabBarDataType = {
    HomeScreen: {
        //@ts-ignore
        icon: (props: UICore.SvgPropsType): JSX.Element => <HomeIcon
            {...props}
        />
    },
    NotificationsScreen: {
        //@ts-ignore
        icon: (props: UICore.SvgPropsType): JSX.Element => <MailBoxIcon
            size={20}
            {...props}
        />
    },
    NoticesScreen: {
        //@ts-ignore
        icon: (props: UICore.SvgPropsType): JSX.Element => <BellIcon
            {...props}
        />
    },
    ProfileScreen: {
        //@ts-ignore
        icon: (props: UICore.SvgPropsType): JSX.Element => <UserIcon
            {...props}
        />
    }
};

const iconGenerate = (
    pageName: TabBarPageNames,
    props: {
        style?: React.CSSProperties;
        focused: boolean;
        color: string;
        size: number;
    },
    {
        colors
    }: {
        colors: UIColor.ColorType;
    }
) => {
    const currentTabBarData = TabBarData[pageName];

    if (props.focused) {
        props.color = colors.primary;
    }
    //@ts-ignore
    return currentTabBarData.icon({
        ...props,
        style: [
            props.style,
            {
                marginTop: 5
            }
        ],
    });
};

export const BottomNavigatorScreen = () => (
    <BottomNavigator.Navigator
        screenOptions={{
            headerShown: false,
        }}>
        <BottomNavigator.Screen
            name={Routes.HOME_SCREEN}
            component={HomeScreen}
            options={{
                title: "Ana Sayfa",
                headerShown: false,
                tabBarIcon: (props) => iconGenerate("HomeScreen", props, {
                    colors,

                })
            }}
        />
        <BottomNavigator.Screen
            name={Routes.NOTIFICATIONS_SCREEN}
            component={NotificationsScreen}
            options={{
                title: "İhbarlar",
                headerShown: false,
                tabBarIcon: (props) => iconGenerate("NotificationsScreen", props, {
                    colors
                })
            }}
        />
        <BottomNavigator.Screen
            name={Routes.NOTICES_SCREEN}
            component={NoticesScreen}
            options={{
                title: "Bildirimler",
                headerShown: false,
                tabBarIcon: (props) => iconGenerate("NoticesScreen", props, {
                    colors
                })
            }}
        />
        <BottomNavigator.Screen
            name={Routes.PROFILE_SCREEN}
            component={ProfileScreen}
            options={{
                title: "Profil",
                headerShown: false,
                tabBarIcon: (props) => iconGenerate("ProfileScreen", props, {
                    colors
                })
            }}
        />
    </BottomNavigator.Navigator>
);
