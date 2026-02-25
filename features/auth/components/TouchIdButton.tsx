import { StyleSheet, View } from 'react-native';
import Animated from 'react-native-reanimated';

import usePulseAnimation from '../hooks/usePulseAnimation';
import { TouchIdIcon } from '@/components/icons';
import { colors } from '@/theme';

const TouchIdButton = () => {
    const pulseStyle = usePulseAnimation();

    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <Animated.View style={[styles.ring, pulseStyle]} />
                <View style={styles.button}>
                    <TouchIdIcon size={24} color={colors.white} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: { alignItems: 'center', paddingBottom: 8 },
    container: { width: 76, height: 76, justifyContent: 'center', alignItems: 'center' },
    ring: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: 38,
        borderCurve: 'continuous',
        backgroundColor: colors.primaryLight,
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 28,
        borderCurve: 'continuous',
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default TouchIdButton;
