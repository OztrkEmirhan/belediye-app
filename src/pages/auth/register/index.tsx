import React, {
    useEffect
} from 'react';
import {
    TouchableOpacity,
    View,
    Text
} from 'react-native';
import stylesheet from './stylesheet';
import {
    Typography
} from '../../../components';
import Header from '../../../components/header';
import {
    GoBackIcon 
} from '../../../assets/svg';
import {
    colors 
} from '../../../themes/variants/light';
import {
    useNavigation 
} from '@react-navigation/native';

const RegisterScreen = () => {
    const navigation = useNavigation();
    
    useEffect(() => {
        navigation.setOptions({
            header: () => <Header
                customTitle={renderHeaderTitle()}
                headerLeft={renderHeaderLeft}
                style={{
                    borderBottomColor: colors.stronkLight,
                    borderBottomWidth: 1
                }}
            />,
            headerShown: true
        });
    });

    const renderHeaderLeft = () => {
        return <TouchableOpacity
            style={{
                ...stylesheet.goBack,
                borderColor: colors.stronkLight,
                borderWidth: 1
            }}
            onPress={() => {
                navigation.goBack();
            }}
        >
            <GoBackIcon />
        </TouchableOpacity>;
    };

    const renderHeaderTitle = () => {
        return <Typography
            style={stylesheet.headerTitle}
            variant="header5-semiBold"
            color="textDark"
        >
            Kayıt Ol
        </Typography>;
    };

    return (
        <View>
            <Text>RegisterScreen</Text>
        </View>
    );
};

export default RegisterScreen;
