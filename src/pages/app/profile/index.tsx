import React, {
    useEffect
} from "react";
import stylesheet from "./stylesheet";
import {
    TouchableOpacity,
    ScrollView,
    Image,
    View
} from "react-native";
import Header from "../../../components/header";
import {
    Typography
} from "../../../components";
import {
    ProfileShareIcon,
    MessageIcon,
    MailBoxIcon, 
    HandsIcon,
    CallIcon,
    ExitIcon,
    LikeIcon,
    PenIcon
} from "../../../assets/svg";
import {
    colors 
} from "../../../themes/variants/light";
import {
    useNavigation
} from "@react-navigation/native";
import RowCard from "../../../components/rowCard";
import ProfileCard from "../../../components/profileCard";

const Profile = () => {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            header: () => <Header
                headerRight={() => renderHeaderRight()}
                titleColor={colors.textDark}
                customTitle={
                    <Typography
                        style={stylesheet.headerTitle}
                        variant="header5-semiBold"
                        color="textDark"
                    >
                        Profile
                    </Typography>
                }
            />,
            headerShown: true
        });
    });

    const renderHeaderRight = () => {
        return <TouchableOpacity
            onPress={() => {}}
            style={{
                ...stylesheet.goBack,
                borderColor: colors.stronkLight,
                borderWidth: 1
            }}
        >
            <PenIcon />
        </TouchableOpacity>;
    };

    const renderProfileCard = () => {

        return <View
            style={{
                ...stylesheet.profileCardContainer,
                marginTop: 20
            }}
        >
            <Image
                source={require("../../../assets/image/User.png")}
                style={{
                    ...stylesheet.profileCardImage,
                    marginBottom: 20
                }}
            />
            <Typography
                variant="body-semiBold"
                color="textDark"
                style={{
                    marginBottom: 5
                }}
            >
                Eray Öztürk
            </Typography>
            <Typography
                variant="body2-regular"
                color="textSecondary"
            >
                erayozturk@gmail.com
            </Typography>
            <View 
                style={{
                    flexDirection: 'row',
                    marginBottom:15,
                    marginRight:25,
                    marginLeft:25,
                    marginTop:15
                }}
            >
                <ProfileCard
                    renderLeft={() => <MailBoxIcon />}
                    isShowRightIcon={true}
                    title="Şikayetlerin"
                    onPress={() => {}}
                    number={10}
                />
                <View 
                    style={{
                        marginLeft: 20
                    }} 
                />
                <ProfileCard
                    renderLeft={() => <LikeIcon />}
                    isShowRightIcon={true}
                    title="Desteklerin"
                    onPress={() => {}}
                    number={10}
                />
            </View>
        </View>;
    };


    const renderLine = () => {
        return <View
            style={{
                ...stylesheet.line,
                borderBottomWidth: 1,
                borderColor: colors.stronkLight
            }}
        />;
    };

    const renderProfileOptions = () => {
        return <View
            style={{
                ...stylesheet.profileOptionsContainer,
                borderColor: colors.stronkLight,
                paddingHorizontal: 15,
                paddingVertical: 15,
                marginBottom: 20,
                borderRadius: 20,
                borderWidth: 1,
                marginRight:15,
                marginLeft:15
            }}
        >
            <RowCard
                title="İletişim Tercihleri"
                onPress={() => {}}
                renderLeft={() => <View
                    style={{
                        ...stylesheet.icon,
                        backgroundColor: colors.primaryOpacity,
                        borderRadius:20,
                        marginRight: 10
                    }}
                >
                    <CallIcon />
                </View>
                }
            />
            {renderLine()}
            <RowCard
                title="Bize Ulaşın"
                onPress={() => {}}
                renderLeft={() => <View
                    style={{
                        ...stylesheet.icon,
                        backgroundColor: colors.primaryOpacity,
                        borderRadius:20,
                        marginRight: 10
                    }}
                >
                    <MessageIcon/>
                </View>
                }
            />
            {renderLine()}
            <RowCard
                title="Uygulamayı Değerlendirin"
                onPress={() => {}}
                renderLeft={() => <View
                    style={{
                        ...stylesheet.icon,
                        backgroundColor: colors.primaryOpacity,
                        borderRadius:20,
                        marginRight: 10
                    }}
                >
                    <HandsIcon />
                </View>
                }
                isShowRightIcon={false}
            />
            {renderLine()}
            <RowCard
                title="Uygulamayı Paylaş"
                onPress={() => {}}
                renderLeft={() => <View
                    style={{
                        ...stylesheet.icon,
                        backgroundColor: colors.primaryOpacity,
                        borderRadius:20,
                        marginRight: 10
                    }}    
                >
                    <ProfileShareIcon />
                </View>
                }
                isShowRightIcon={false}
            />
            {renderLine()}
            <RowCard
                title="Çıkış Yap"
                titleColor="error"
                renderLeft={() => <View
                    style={{
                        ...stylesheet.icon,
                        backgroundColor: colors.error50,
                        borderRadius: 20,
                        marginRight: 10
                    }}
                >
                    <ExitIcon />
                </View>
                }
                isShowRightIcon={false}
            />
        </View>;
    };

    const renderVersion = () => {
        return <Typography
            style={stylesheet.centerText}
            variant="body2-regular"
            color="textSecondary"
        >
            Version 1.0
        </Typography>;
    };

    return <ScrollView
        style={{
            backgroundColor: colors.backgroundLight,
            borderColor: colors.stronkLight,
            borderTopWidth: 1
        }}
    >
        {renderProfileCard()}
        {renderProfileOptions()}
        {renderVersion()}
    </ScrollView>;
};

export default Profile;
