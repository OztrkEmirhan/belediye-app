import React from 'react';
import {
    TouchableOpacity,
    View
} from 'react-native';
import {
    AltArrowRight
} from '../../assets/svg';
import {
    colors
} from '../../themes/variants/light';
import IProfileCardType from './types';
import {
    Typography
} from '..';

const ProfileCard = ({
    renderRightIcon: RightIconProp,
    renderLeft: renderLeftProp,
    isShowRightIcon,
    onPress,
    number,
    title
}: IProfileCardType) => {

    const renderLeft = () => {
        if(renderLeftProp) {
            return renderLeftProp();
        }
        return null;
    };

    const renderRight = () => {
        if(!isShowRightIcon) {
            return null;
        }

        if(RightIconProp) {
            return <RightIconProp
                color={colors.textSecondary}
                size={24}
            />;
        }
        return <AltArrowRight />;
    };

    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                justifyContent: 'space-between',
                borderColor:colors.stronkLight,
                flexDirection: 'row',
                alignItems: 'center', 
                borderRadius:20, 
                borderWidth:1, 
                width:"50%", 
                padding:15
            }}
        >
            {renderLeft()}
            <View 
                style={{
                    marginLeft: 10,
                    flex: 1
                }}
            >
                <Typography
                    variant='body3-regular'
                    color='textGrey'
                >
                    {title}
                </Typography>
                <Typography
                    variant='body-bold'
                    color='textDark'
                >
                    {number}
                </Typography>
            </View>
            {renderRight()}
        </TouchableOpacity>
    );
};

export default ProfileCard;
