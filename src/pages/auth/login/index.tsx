import React, {
    useState
} from 'react';
import {
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    StatusBar,
    View
} from 'react-native';
import stylesheet from './stylesheet';
import {
    Typography,
    Input
} from '../../../components';
import Button from '../../../components/button';
import {
    GoogleIcon,
    AppleIcon
} from '../../../assets/svg';
import {
    Routes 
} from '../../../navigation/routes';
import {
    useNavigation
} from '@react-navigation/native';
import {
    colors
} from '../../../themes/variants/light';
import {
    windowWidth
} from '../../../utils';

const Login = () => {
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const navigation = useNavigation();

    const renderSocialLoginButtons = () => {
        return <View
            style={stylesheet.socialLoginContainer}
        >
            <TouchableOpacity
                style={[
                    stylesheet.socialLoginButton,
                    {
                        borderColor: colors.stronkLight,
                        backgroundColor: colors.white,
                        paddingHorizontal: 20,
                        paddingVertical: 15,
                        borderRadius: 15,
                        marginRight: 10,
                        borderWidth: 1
                    }
                ]}
            >
                <View 
                    style={
                        stylesheet.socialIconButton
                    }
                >
                    <GoogleIcon size={20}/>
                    <Typography
                        variant='body2-medium'
                        color='textDark'
                        style={
                            stylesheet.socialGoogleButtonText
                        }
                    >
                        Google
                    </Typography>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={[
                    stylesheet.socialLoginButton,
                    {
                        backgroundColor: colors.backgroundBlack,
                        borderColor: colors.stronkDark,
                        paddingHorizontal: 20,
                        paddingVertical: 15,
                        borderRadius: 15,
                        borderWidth: 1
                    }
                ]}
            >
                <View 
                    style={
                        stylesheet.socialIconButton
                    }
                >
                    <AppleIcon size={20}/>
                    <Typography
                        variant='body2-medium'
                        color='textWhite'
                        style={
                            stylesheet.socialAppleButtonText
                        }
                    >
                        Apple
                    </Typography>
                </View>
            </TouchableOpacity>
        </View>;
    };

    const renderOrLine = () => {
        return <View
            style={
                stylesheet.orlineContainer
            }
        >
            <View
                style={{
                    borderColor: colors.stronkLight,
                    width: windowWidth / 2.7,
                    borderBottomWidth: 1,
                    marginVertical: 10,
                }}
            />
            <Typography
                variant='body2-medium'
                color='textGrey'
                style={
                    {
                        marginHorizontal: 10,
                    }
                }
            >
                Veya
            </Typography>
            
            <View
                style={{
                    borderColor: colors.stronkLight,
                    width: windowWidth / 2.5,
                    borderBottomWidth: 1,
                    marginVertical: 10
                }}
            />
        </View>;
    };
    
    return <SafeAreaView 
        style={
            stylesheet.container
        }
    >
        <StatusBar
            backgroundColor={colors.backgroundLight}
            barStyle={'default'}
        />
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={stylesheet.content}>
            <View 
                style={{
                    marginBottom:30,
                    marginTop:60
                }}
            >
                <Typography
                    variant='header3-bold'
                    color="textBlack"
                >
                        Giriş Yap
                </Typography>

                <Typography
                    variant='body-regular'
                    color="textGrey"
                >
                        Tekrar hoş geldiniz!👋
                </Typography>
            </View>
            <View>
                <Typography 
                    style={stylesheet.loginInformationText}
                    variant="body2-semiBold"
                    color='textDark'
                >
                        Giriş Bilgilerin
                </Typography>
                <View
                    style={
                        stylesheet.inputView
                    }
                >
                    <Input
                        title='Kullancı adı veya E-Posta adresiniz'
                        onChangeText={(text) => setEmail(text)}
                        initialValue={email}
                    />

                    <Input
                        onChangeText={(text) => setPassword(text)}
                        initialValue={password}
                        secureTextEntry={true}
                        isShowable={true}
                        title='Şifre'
                    />
                </View>
            </View>
            <View
                style={
                    stylesheet.restartpassword
                }
            >
                <Typography 
                    variant='body2-medium'
                    color='primary'
                >
                        Şifremi Unuttum
                </Typography>
            </View>
            <View
                style={
                    stylesheet.buttonContainer
                }
            >
                <Button
                    onPress={() => navigation.navigate(Routes.BOTTOM_NAVIGATOR as never)}
                    title='Giriş Yap'
                    variant='filled'
                />
                <Button
                    onPress={() => navigation.navigate(Routes.REGISTER_SCREEN as never)}
                    title='Hemen Üye Ol'
                    variant='outline'

                />
            </View>
            {renderOrLine()}
            {renderSocialLoginButtons()}
        </ScrollView>
    </SafeAreaView>;
};

export default Login;
