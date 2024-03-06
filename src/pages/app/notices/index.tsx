import React, {
    useEffect
} from 'react';
import {
    TouchableOpacity,
    View,
    Text
} from 'react-native';
import stylesheet from './stylesheet';
import Header from '../../../components/header';
import {
    Typography
} from '../../../components';
import {
    colors
} from '../../../themes/variants/light';
import {
    SharedIcon
} from '../../../assets/svg';
import {
    useNavigation
} from '@react-navigation/native';

const NoticesScreen = () => {
    const navigation = useNavigation();
    
    useEffect(() => {
        navigation.setOptions({
            header: () => <Header
                customTitle={renderHeaderTitle()}
                headerRight={renderHeaderRight}
                style={{
                    borderBottomColor: colors.stronkLight,
                    borderBottomWidth: 1
                }}
            />,
            headerShown: true
        });
    });

    const renderHeaderTitle = () => {
        return <Typography
            style={stylesheet.headerTitle}
            variant="header5-semiBold"
            color="textDark"
        >
            Bildirimler
        </Typography>;
    };

    const renderHeaderRight = () => {
        return <TouchableOpacity
            style={{
                ...stylesheet.goBack,
            }}
        >
            <SharedIcon />
        </TouchableOpacity>;
    };

    return <View>
        <Text>NoticesScreen</Text>
    </View>;
};

export default NoticesScreen;
