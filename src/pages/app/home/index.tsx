import React, {
    useRef 
} from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import {
    BottomSheetRefProps 
} from '../../../components/bottomSheet/types';
import BottomSheet from '../../../components/bottomSheet';
import { colors } from '../../../themes/variants/light';

const HomeScreen = () => {
    const ref = useRef<BottomSheetRefProps>(null);

    const onPress =() => {
        const isActive = ref?.current?.isActive();
        if (isActive) {
            ref?.current?.scrollTo(0);
        } else {
            ref?.current?.scrollTo(-200);
        }
    };
    
    return <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={onPress} />
        <BottomSheet ref={ref}>
            <View style={{
                backgroundColor: colors.stronkLight,
                flex: 1
            }}>
            </View>
        </BottomSheet>
    </View>;
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: '#FFF',
        alignItems: 'center',
        flex: 1,
    },
    button: {
        backgroundColor: 'grey',
        borderRadius: 25,
        aspectRatio: 1,
        opacity: 0.6,
        height: 50,
    },
});
  
export default HomeScreen;
