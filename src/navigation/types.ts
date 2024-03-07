export type TabBarPageNames = "HomeScreen" | "NotificationsScreen" | "NoticesScreen" | "ProfileScreen";
export type TabBarDataType = Record<TabBarPageNames, {
    icon: UICore.SvgPropsType;
}>;